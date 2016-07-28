import {Pipe, PipeTransform} from '@angular/core';
import {WineInterface} from "../wines/wine.interface";

// http://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
@Pipe({name: 'products'})
export class ProductPipe implements PipeTransform {

    transform(value: any, args: string[]) : WineInterface[] {
        console.log(value);
        let keys: WineInterface[] = [];
        for (let key in value) {
            keys.push(value[key]);
        }
        console.log(keys);
        return keys;
    }
}