import {Injectable} from "@angular/core";

import {CartItem, ProductInterface} from "./cart-item";

@Injectable()
export class ShoppingCart {
    items: CartItem[] = [];

    constructor() {
        this.restoreCart();
    }

    /**
     * Add an item to the shopping cart
     * @param item - the item to add
     * @param quantity -
     */
    addItem = (item: ProductInterface, quantity: number) => {
        quantity = Math.round(quantity);

        let tmpItem = this.getItemFromCart(item);

        if(tmpItem == null) {
            // the item isn't in the cart so let's add it
            this.items[item.key] = new CartItem(item, quantity);
            this.storeCart();
            return;
        }
        tmpItem.changeQuantityBy(quantity);
        this.storeCart();
    };

    removeItem = (item: ProductInterface) => {
        let i: number = null;
        // find the item's index in our array
        this.items.forEach(function(value: CartItem, index: number, arr: CartItem[]) {
            if(index) {return;}
            if(value.Product.key === item.key) {
                i = index;
            }
        });
        if(!i) {return;}
        // remove it
        this.items.splice(i, 1);
        this.storeCart();
    };

    getItemFromCart = (item: ProductInterface) => {
        if(this.itemInCart(item.key)) {
            return this.items[item.key];
        }
        return null;
    };


    itemInCart = (key: string) => {
        let match = this.items.filter(function(value: CartItem, index: number, arr: CartItem[]) {
            if(!value) {return;}
            return value.Product.key == key;
        });
        return match.length > 0;
    };

    getCartSubtotal = () => {
        let sub = 0;
        this.items.forEach(function(value: CartItem) {
            if(!value) {return;}
            sub += value.subtotal();
        });
        return sub;
    };

    getCartItemCount = () => {
        let count = 0;
        this.items.forEach(function(value: CartItem) {
            if(!value) {return;}
            count += value.Quantity;
        });
        return count;
    };

    storeCart = () => {
        localStorage.setItem('ub-winery-cart', JSON.stringify(this.items));
    };

    restoreCart = () => {
        let stored = localStorage.getItem('ub-winery-cart');
        if (!stored) {return;}
        let cart = JSON.parse(stored);
        if(cart) {
            cart.forEach((value: CartItem, index: number, arr: any[]) => {
                if(!value) {
                    this.items[index] = value;
                    return;
                }
                this.items[index] = new CartItem(value.Product, value.Quantity);
            });
        }
    };

}