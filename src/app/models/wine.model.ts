import {Injectable} from '@angular/core';
import {WinesService} from "../features/wines/wines.service";
import {WineInterface} from "../features/wines/wine.interface";

@Injectable()
export class WineModel {
    featuredWines: WineInterface[];
    wines: WineInterface[];

    constructor(private _winesService: WinesService) {
        this.init()
    }

    init() {
        // grab featured wines and wines
        this._winesService.getFeaturedWines()
            .then((featured) => {
                this.featuredWines = featured;
            })
            .catch((err) => {
                console.log(err);
            });
        this._winesService.getWines()
            .then((wines) => {
                this.wines = wines;
            })
            .catch((err) => {
                console.log(err);
            });
    }

}