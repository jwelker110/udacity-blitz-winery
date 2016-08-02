import {Injectable} from '@angular/core';

import {WinesService} from "../components/wine/wines.service";
import {WineInterface} from "../components/wine/wine.interface";

@Injectable()
export class WineModel {
    featuredWines: WineInterface[];
    wines: WineInterface[];

    constructor(private _winesService: WinesService, private _wines: WineInterface[]) {
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
                // converting from the object to
                // an array of products
                let keys: WineInterface[] = [];
                for (let key in wines) {
                    wines[key].key = key;
                    keys.push(wines[key]);
                }
                this._wines = keys;
                this.wines = keys;
            })
            .catch((err) => {
                console.log(err);
            });
    }

}