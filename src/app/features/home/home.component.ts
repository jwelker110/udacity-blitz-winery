import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {WineComponent} from "../wines/wine.component";
import { ProductPipe } from "../../pipes/product.pipe";
import { WineModel } from "../../models/wine.model";

@Component({
    templateUrl: './home.component.html',
    styles: [require('./home.component.scss')],
    directives: [WineComponent, ROUTER_DIRECTIVES],
    pipes: [ProductPipe]
})
export class HomeComponent implements OnInit {
    wineModel: WineModel;

    constructor(private _wineModel: WineModel){}

    ngOnInit() {
        // so we can bind to the model directly
        this.wineModel = this._wineModel;
    }
}
