import {Component, Output, Input, EventEmitter} from "@angular/core";
import {ROUTER_DIRECTIVES} from '@angular/router';

import {WineInterface} from './wine.interface';
import { ArrayToStringPipe } from "../../pipes/array-string.pipe";
import { ShoppingCart } from "../cart/cart.service";

@Component({
    selector: 'wine-detailed',
    templateUrl: './wine-detailed.component.html',
    styles: [require('./wine-detailed.component.scss')],
    pipes: [ArrayToStringPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class WineDetailedComponent {
    @Input() wine: WineInterface;

    constructor(private _shoppingCart: ShoppingCart) {}

    /**
     * This will emit the event that can be captured by
     * the shopping cart (if implemented)
     */
    addToCart = (item: any) => {
        this._shoppingCart.addItem(item, 1);
    }


}