
import {Component, OnInit} from "@angular/core";
import {ShoppingCart} from "../../components/cart/cart.service";

@Component({
    templateUrl: './cart.component.html',
    styles: [require('./cart.component.scss')]
})
export class CartComponent implements OnInit {
    shoppingCart: ShoppingCart;

    constructor(private _shoppingCart: ShoppingCart) {

    }

    ngOnInit() {
        this.shoppingCart = this._shoppingCart;
    }


}