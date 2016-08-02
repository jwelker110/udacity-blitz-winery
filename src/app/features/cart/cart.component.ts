
import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {ShoppingCart} from "../../models/cart.model";

@Component({
    templateUrl: './cart.component.html',
    styles: [require('./cart.component.scss')],
    directives: [ROUTER_DIRECTIVES]
})
export class CartComponent implements OnInit {
    shoppingCart: ShoppingCart;

    constructor(private _shoppingCart: ShoppingCart) {

    }

    ngOnInit() {
        this.shoppingCart = this._shoppingCart;
    }

    checkout = () => {
        if(this.shoppingCart.itemCount < 1) {return;}
        this.shoppingCart.resetCart();
    };

}