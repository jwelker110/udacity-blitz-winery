import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

const PRODUCT_URL = 'api/v1/products/';

@Injectable()
export class WinesService {

    constructor(private _http: Http) {}

    getWines() {
        return this._http.get(PRODUCT_URL + 'products.json')
            .map((response: Response) => response.json())
            .toPromise()
            .catch(this._errorHandler);
    }

    getFeaturedWines() {
        return this._http.get(PRODUCT_URL + 'featured.json')
            .map((response: Response) => response.json())
            .toPromise()
            .catch(this._errorHandler);
    }

    _errorHandler(err: any) {
        console.log(err); // todo provide better feedback
        return Promise.reject(err);
    }

}