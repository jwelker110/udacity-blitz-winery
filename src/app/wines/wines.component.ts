import {Component, OnInit} from "@angular/core";
import {WineComponent} from "./wine.component";
import {WineModel} from "../model/wine.model";

@Component({
    templateUrl: './wines.component.html',
    styles: [require('./wines.component.scss')],
    directives: [WineComponent]
})
export class WinesComponent implements OnInit {
    wineModel: WineModel;

    constructor(private _wineModel: WineModel) {
    }

    ngOnInit() {
        // so we can bind to the model directly
        this.wineModel = this._wineModel;
    }
}
