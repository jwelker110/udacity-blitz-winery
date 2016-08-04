import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import { ProductPipe } from "../../pipes/product.pipe";
import { WineModel } from "../../models/wine.model";
import {WineDetailedComponent} from "../../components/wine/wine-detailed.component";

@Component({
    templateUrl: './home.component.html',
    styles: [require('./home.component.scss')],
    directives: [WineDetailedComponent, ROUTER_DIRECTIVES],
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
