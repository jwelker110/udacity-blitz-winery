import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {NavComponent} from './components/nav/nav.component';
import {HomeComponent} from "./features/home/home.component";
import {AboutComponent} from "./features/about/about.component";
import {ContactComponent} from "./features/contact/contact.component";
import {WinesComponent} from "./features/wines/wines.component";
import {FooterComponent} from "./components/footer/footer.component";
import {WinesService} from "./features/wines/wines.service";
import {PageNotFoundComponent} from "./features/notfound/notfound.component";
import {WineModel} from "./models/wine.model";
import {ShoppingCart} from "./components/cart/cart.service";
import {CartComponent} from "./components/cart/cart.component";

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
