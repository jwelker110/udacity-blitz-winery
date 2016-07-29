
import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'ub-nav',
    templateUrl: './nav.component.html',
    styles: [require('./nav.component.scss')],
    directives: [ROUTER_DIRECTIVES]
})
export class NavComponent implements OnInit {
    routes: {url: string, name: string}[];
    brand: string;
    to: any;
    isCollapsed: boolean = true;

    constructor(private _routerService: Router){
    }

    ngOnInit() {
        this.routes = [
            {url: '/', name: 'Home'},
            {url: '/wines', name: 'Wines'},
            {url: '/about', name: 'About'},
            {url: '/contact', name: 'Contact'}
        ];
        this.brand = 'U&B Winery';
        this._routerService.events.subscribe((e) => {
            if(e instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }

        });
    }

    // TODO NEED TO CHANGE THE TIMEOUT FN USED
    toggleCollapsed = () => {
        if(this.to) {clearTimeout(this.to)}
        this.isCollapsed = !this.isCollapsed;
        if(this.isCollapsed) {return;}
        this.to = setTimeout(() => {
            this.isCollapsed = true;
        }, 3500);
    };

    collapse = () => {
        if(this.to) {clearTimeout(this.to)}
        this.isCollapsed = true;
    };
}
