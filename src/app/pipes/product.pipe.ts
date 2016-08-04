import {Pipe, PipeTransform} from '@angular/core';
import {WineInterface} from "../components/wine/wine.interface";

// http://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
@Pipe({name: 'products'})
export class ProductPipe implements PipeTransform {

    /**
     * This pipe takes an object containing the various wines and converts it's member
     * keys to an array of their respective values, adding the key to each object
     * @param value - the object containing various wines
     * @param args - additional arguments
     * @returns {WineInterface[]} - an array of Wine Products
     */
    transform(value: any, args: string[]) : WineInterface[] {
        let keys: WineInterface[] = [];
        for (let key in value) {
            value[key].key = key;
            keys.push(value[key]);
        }
        return keys;
    }
}