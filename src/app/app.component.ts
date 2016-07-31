import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {NavComponent} from './nav/nav.component';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {WinesComponent} from "./wines/wines.component";
import {FooterComponent} from "./footer/footer.component";
import {WinesService} from "./wines/wines.service";
import {PageNotFoundComponent} from "./notfound/notfound.component";
import {WineModel} from "./model/wine.model";
import {ShoppingCart} from "./cart/cart.service";
import {CartComponent} from "./cart/cart.component";

@Component({
    selector: 'ub-app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss')],
    directives: [NavComponent, FooterComponent, RouterOutlet],
    providers: [WinesService, WineModel, ShoppingCart],
    precompile: [HomeComponent, AboutComponent, ContactComponent, WinesComponent, PageNotFoundComponent, CartComponent]
})
export class AppComponent implements OnInit {
    faIcons: {iClass: string, iUrl: string}[] = [];

    constructor() {}

    ngOnInit() {
        this.faIcons = [
            {
                iClass: 'fa fa-twitter-square',
                iUrl: '/'
            },
            {
                iClass: 'fa fa-google-plus-square',
                iUrl: '/'
            },
            {
                iClass: 'fa fa-facebook-square',
                iUrl: '/'
            },
            {
                iClass: 'fa fa-youtube-square',
                iUrl: '/'
            }
        ];
    }
}
