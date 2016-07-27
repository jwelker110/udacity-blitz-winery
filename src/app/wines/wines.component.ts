import {Component, OnInit} from "@angular/core";
import {WinesService} from "./wines.service";
import {WineComponent} from "./wine.component";
import {WineInterface} from "./wine.interface";

@Component({
    templateUrl: './wines.component.html',
    styles: [require('./wines.component.scss')],
    directives: [WineComponent]
})
export class WinesComponent implements OnInit {
    products: WineInterface[] = [];

    constructor(private _winesService: WinesService) {
    }

    ngOnInit() {
        this._winesService.getWines()
            .then((products) => {
                this.products = products;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
