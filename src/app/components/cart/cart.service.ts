import {Injectable} from "@angular/core";

import {CartItem, ProductInterface} from "./cart-item";

@Injectable()
export class ShoppingCart {
    items: CartItem[] = [];
    itemCount: number = 0;
    subtotal: number = 0.00;

    constructor() {
        this.restoreCart();
    }

    /**
     * Add an item to the shopping cart
     * @param item - the item to add
     * @param quantity - the amount of this item we are storing
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

    /**
     * Remove an item from the shopping cart
     * @param item - the item to remove
     */
    removeItem = (item: CartItem) => {
        if(!item || !item.Product || !item.Product.key) {return;}
        let i: number = null;
        // find the item's index in our array
        this.items.forEach(function(value: CartItem, index: number, arr: CartItem[]) {
            if(!value) {return;}
            if(value.Product.key === item.Product.key) {
                i = index;
            }
        });
        if(!i) {return;}
        // remove it
        this.items.splice(i, 1);
        this.storeCart();
    };

    /**
     * Change the quantity of the provided item to the provided amount
     * @param item - the item to adjust
     * @param amt - the quantity to associate with the item
     */
    changeItemQuantity = (item: CartItem, amt: number) => {
        if(amt == null || amt == undefined) {return;}
        amt = Math.round(amt);
        if(amt < 0 || amt == 0) {
            this.removeItem(item);
        } else {
            item.Quantity = amt;
        }
        this.storeCart();
    };

    /**
     * Retrieve the item from the cart corresponding to the provided item
     * @param item - the item to retrieve
     * @returns {CartItem} - the item from the cart, or null
     */
    getItemFromCart = (item: ProductInterface): CartItem => {
        if(this.itemInCart(item.key)) {
            return this.items[item.key];
        }
        return null;
    };

    /**
     * Checks whether an item exists in the cart matching the provided key.
     * @param key - the item key to locate
     * @returns {boolean} - true if item is in the cart already, else false
     */
    itemInCart = (key: string) => {
        let match = this.items.filter(function(value: CartItem) {
            if(!value) {return;}
            return value.Product.key == key;
        });
        return match.length > 0;
    };

    /**
     * Calculate the cart subtotal
     * @returns {number} - subtotal
     */
    getCartSubtotal = () => {
        let sub = 0;
        this.items.forEach(function(value: CartItem) {
            if(!value) {return;}
            sub += value.subtotal();
        });
        return sub;
    };

    /**
     * Calculate the number of items in the cart
     * @returns {number} - count
     */
    getCartItemCount = () => {
        let count = 0;
        this.items.forEach(function(value: CartItem) {
            if(!value) {return;}
            count += value.Quantity;
        });
        return count;
    };

    /**
     * Store the contents of the cart using localStorage
     */
    storeCart = () => {
        localStorage.setItem('ub-winery-cart', JSON.stringify(this.items));
        this.itemCount = this.getCartItemCount();
    };

    /**
     * Retrieve the stored contents of the cart using localStorage
     */
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
        this.itemCount = this.getCartItemCount();
    };

}