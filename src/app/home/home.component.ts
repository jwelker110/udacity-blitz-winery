import {Component, OnInit} from "@angular/core";

import {WinesService} from '../wines/wines.service';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {WineComponent} from "../wines/wine.component";
import {WineInterface} from "../wines/wine.interface";

@Component({
    templateUrl: './home.component.html',
    styles: [require('./home.component.scss')],
    directives: [WineComponent, ROUTER_DIRECTIVES],
    providers: [WinesService]
})
export class HomeComponent implements OnInit {
    featuredProducts: WineInterface[] = [];

    constructor(private _winesService: WinesService){}

    ngOnInit() {
        this._winesService.getFeaturedWines()
            .then((products) => this.featuredProducts = products)
            .catch((err) => {
                console.log(err);
            });
    }
}
