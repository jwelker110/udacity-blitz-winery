import {Component, OnInit} from "@angular/core";
import {WineComponent} from "../../components/wine/wine.component";
import {WineDetailedComponent} from "../../components/wine/wine-detailed.component";
import { ProductPipe } from "../../pipes/product.pipe";
import { WineModel } from "../../models/wine.model";

@Component({
    templateUrl: './wines.component.html',
    styles: [require('./wines.component.scss')],
    directives: [WineComponent, WineDetailedComponent],
    pipes: [ProductPipe]
})
export class WinesComponent implements OnInit {
    wineModel: WineModel;

    constructor(private _wineModel: WineModel) {
    }

    ngOnInit() {
        // so we can bind to the model directly
        this.wineModel = this._wineModel;
    }

    /**
     * Sort by the price that was selected please
     * @param sortBy {string} - the price to favor
     */
    sortByPrice = (sortBy: string) => {
        if(sortBy.toLowerCase() === 'lowest') {
            this.wineModel.sortByPriceLowestToHighest();
        } else if(sortBy.toLowerCase() === 'highest') {
            this.wineModel.sortByPriceHighestToLowest();
        } else {
            this.wineModel.sortByNone();
        }
    };
}
