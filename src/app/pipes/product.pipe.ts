import {Pipe, PipeTransform} from '@angular/core';
import {WineInterface} from "../components/wine/wine.interface";

// http://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
@Pipe({name: 'products'})
export class ProductPipe implements PipeTransform {

    transform(value: any, args: string[]) : WineInterface[] {
        let keys: WineInterface[] = [];
        for (let key in value) {
            value[key].key = key;
            keys.push(value[key]);
        }
        return keys;
    }
}