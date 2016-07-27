
import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'ub-nav',
    templateUrl: './nav.component.html',
    styles: [require('./nav.component.scss')],
    directives: [ROUTER_DIRECTIVES]
})
export class NavComponent implements OnInit {
    routes: {url: string, name: string}[];
    brand: string;
    isCollapsed: boolean = true;
    to: any;

    constructor(){
    }

    ngOnInit() {
        this.routes = [
            {url: '/', name: 'Home'},
            {url: '/wines', name: 'Wines'},
            {url: '/about', name: 'About'},
            {url: '/contact', name: 'Contact'}
        ];
        this.brand = 'U&B';
    }

    // TODO NEED TO CHANGE THE TIMEOUT FN USED
    toggleCollapsed() {
        if(this.to) {clearTimeout(this.to)}
        this.isCollapsed = !this.isCollapsed;
        if(this.isCollapsed) {return;}
        this.to = setTimeout(() => {
            this.isCollapsed = true;
        }, 3500);
    }

    collapse() {
        if(this.to) {clearTimeout(this.to)}
        this.isCollapsed = true;
    }
}
