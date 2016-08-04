import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router, NavigationEnd} from "@angular/router";

import {ShoppingCart} from "../../models/cart.model";

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
    shoppingCart: ShoppingCart;

    constructor(private _routerService: Router, private _shoppingCart: ShoppingCart){
    }

    ngOnInit() {
        this.routes = [
            {url: '/', name: 'Home'},
            {url: '/about', name: 'About'},
            {url: '/wines', name: 'Wines'},
            {url: '/contact', name: 'Contact'}
        ];
        this.brand = 'U&B Winery';
        this.shoppingCart = this._shoppingCart;
        // so when the user navigates they need to be returned to the top of
        // the page instead of the point they were at on the previous screen
        this._routerService.events.subscribe((e) => {
            if(e instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }

        });
    }

    /**
     * The mobile navbar collapses as a result of this after the desired
     * time expires.
     */
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
