import {Component, Output, Input, EventEmitter} from "@angular/core";
import {ROUTER_DIRECTIVES} from '@angular/router';

import {WineInterface} from './wine.interface';
import { ArrayToStringPipe } from "../../pipes/array-string.pipe";
import { ShoppingCart } from "../cart/cart.service";
import {ModalComponent} from "../modal/modal.component";
import {ProductInterface} from "../cart/cart-item";

@Component({
    selector: 'wine-detailed',
    templateUrl: './wine-detailed.component.html',
    styles: [require('./wine-detailed.component.scss')],
    pipes: [ArrayToStringPipe],
    directives: [ROUTER_DIRECTIVES, ModalComponent]
})
export class WineDetailedComponent {
    @Input() wine: WineInterface;
    quantity: number = 1;
    isProductSelected: boolean = false;


    constructor(private _shoppingCart: ShoppingCart) {}

    /**
     * Add the provided item to the shopping cart
     */
    addToCart = (item: ProductInterface, quantity: number) => {
        this._shoppingCart.addItem(item, quantity);
        this.setProductSelected(false);
    };

    setProductSelected = (isSelected: boolean) => {
        this.isProductSelected = isSelected;
    };

}