import {Injectable} from '@angular/core';
import {WinesService} from "../components/wine/wines.service";
import {ProductInterface} from "../components/cart/cart-item";

@Injectable()
export class WineModel {
    featuredWines: ProductInterface[] = [];
    wines: ProductInterface[] = [];
    private _wines: ProductInterface[] = [];

    constructor(private _winesService: WinesService) {
        this.init()
    }

    init() {
        // grab featured wines and wines
        this._winesService.getFeaturedWines()
            .then((featured) => {
                let keys: ProductInterface[] = [];
                for (let key in featured) {
                    featured[key].key = key;
                    keys.push(featured[key]);
                }
                this.featuredWines = keys;
            })
            .catch((err) => {
                console.log(err);
            });
        this._winesService.getWines()
            .then((wines) => {
                let keys: ProductInterface[] = [];
                for (let key in wines) {
                    wines[key].key = key;
                    keys.push(wines[key]);
                }
                this._wines = keys;
                this.wines = this._wines;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    filterByRating = (rating: string) => {
        console.log(rating);
        if(rating.toLowerCase() === 'all') {
            this.wines = this._wines;
            return;
        }
        this.wines = this._wines.filter(function(value: ProductInterface, index: number, arr: ProductInterface[]) {
            return value.rating.toLowerCase() == rating.toLowerCase();
        });
    };

    sortByPriceLowestToHighest = () => {
        this.wines.sort(function(a: ProductInterface, b: ProductInterface) {
            return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
        });
    };

    sortByPriceHighestToLowest = () => {
        this.wines.sort(function(a: ProductInterface, b: ProductInterface) {
            return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
        });
    };

    sortByNone = () => {
        this.wines = this._wines;
    };


}