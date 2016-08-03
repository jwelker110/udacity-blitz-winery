
import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {ShoppingCart} from "../../models/cart.model";
import {CheckoutForm} from "../../components/cart/checkout.form";
import {ModalComponent} from "../../components/modal/modal.component";

@Component({
    templateUrl: './cart.component.html',
    styles: [require('./cart.component.scss')],
    directives: [ROUTER_DIRECTIVES, CheckoutForm, ModalComponent]
})
export class CartComponent implements OnInit {
    shoppingCart: ShoppingCart;
    isCheckingOut: boolean = false;

    constructor(private _shoppingCart: ShoppingCart) {

    }

    ngOnInit() {
        this.shoppingCart = this._shoppingCart;
    }

    /**
     * checkout using the information in the form provided
     * @param form
     */
    checkout = (form: any) => {
        if(form.$invalid) {return;}
        if(this.shoppingCart.itemCount < 1) {return;}
        this.shoppingCart.resetCart();
        this.setCheckingOut(false);
    };

    /**
     * Set the status of the user in relation to the checkout modal
     * @param isCheckingOut {boolean} - is the user filling out the form?
     */
    setCheckingOut = (isCheckingOut: boolean) => {
        this.isCheckingOut = isCheckingOut;
    };

}