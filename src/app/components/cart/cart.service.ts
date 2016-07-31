import {Injectable} from "@angular/core";

import {CartItem, ProductInterface} from "./cart-item";

@Injectable()
export class ShoppingCart {
    items: CartItem[] = [];

    constructor() {}

    /**
     * Add an item to the shopping cart
     * @param item - the item to add
     * @param quantity -
     */
    addItem = (item: ProductInterface, quantity: number) => {
        console.log(item);
        quantity = Math.round(quantity);

        let tmpItem = this.getItemFromCart(item);

        if(tmpItem == null) {
            // the item isn't in the cart so let's add it
            this.items[item.key] = new CartItem(item, quantity);
            console.log(this.items);
            return;
        }
        tmpItem.changeQuantityBy(quantity);
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
    };

    getItemFromCart = (item: ProductInterface) => {
        if(this.itemInCart(item.key)) {
            return this.items[item.key];
        }
        return null;
    };


    itemInCart = (key: string) => {
        let match = this.items.filter(function(value: CartItem, index: number, arr: CartItem[]) {
            return value.Product.key == key;
        });
        return match.length > 0;
    };

    getCartSubtotal = () => {
        let sub = 0;
        this.items.forEach(function(value: CartItem) {
            sub += value.subtotal();
        });
        return sub;
    };

    getCartItemCount = () => {
        let count = 0;
        this.items.forEach(function(value: CartItem) {
            count += value.Quantity;
        });
        return count;
    };

}