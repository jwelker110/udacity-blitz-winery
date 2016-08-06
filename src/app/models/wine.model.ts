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
                // here we convert the returned JSON object to an array of wines
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
                // here we convert the returned JSON object to an array of wines
                for (let key in wines) {
                    wines[key].key = key;
                    keys.push(wines[key]);
                }
                this._wines = keys;
                this.wines = this._wines.slice();
                this.sortByNone();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    /**
     * Filters out the wines that don't have the provided rating
     * @param rating {string} - the desired rating of the wines
     */
    filterByRating = (rating: string) => {
        if(rating.toLowerCase() === 'all') {
            this.wines = this._wines.slice();
            return;
        }
        this.wines = this._wines.slice().filter(function(value: ProductInterface) {
            return value.rating.toLowerCase() == rating.toLowerCase();
        });
    };

    /**
     * Sorts the wines based on price, from lowest price to highest price, and then alphabetically
     * ascending.
     * If names are mixed lowercase and uppercase, this will affect the sort order.
     */
    sortByPriceLowestToHighest = () => {
        this.wines.sort(function(a: ProductInterface, b: ProductInterface) {
            return a.price > b.price ? 1 : a.price < b.price ? -1 : a.name[0] > b.name[0] ? 1 : a.name[0] < b.name[0] ? -1 : 0;
        });
    };

    /**
     * Sorts the wines based on price, from highest price to lowest price, and then alphabetically
     * ascending.
     * If names are mixed lowercase and uppercase, this will affect the sort order.
     */
    sortByPriceHighestToLowest = () => {
        this.wines.sort(function(a: ProductInterface, b: ProductInterface) {
            return a.price > b.price ? -1 : a.price < b.price ? 1 : a.name[0] > b.name[0] ? 1 : a.name[0] < b.name[0] ? -1 : 0;
        });
    };

    /**
     * Returns the wines to their default sorted positions (sorted by name)
     */
    sortByNone = () => {
        this.wines.sort(function(a: ProductInterface, b: ProductInterface) {
            return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });
    };


}