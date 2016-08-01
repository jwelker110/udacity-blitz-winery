export class CartItem {
    Product: ProductInterface;
    Quantity: number;

    constructor(product: ProductInterface, quantity: number) {
        this.Product = product;
        this.Quantity = Math.round(quantity);
        if(quantity <= 0) throw ("Invalid quantity.");
    }

    /**
     * Calculate the subtotal value of this item
     * @returns {number} - subtotal
     */
    subtotal = (): number => {
        return this.Product.price * this.Quantity;
    };

    /**
     * Change the quantity by the provided amount
     * @param amt - positive or negative number to change the quantity by
     */
    changeQuantityBy = (amt: number) => {
        amt = Math.round(amt);
        if(amt + this.Quantity < 0) {
            throw ("Invalid change: there are only: " + this.Quantity + " items.")
        }
        if(amt + this.Quantity == 0) {
            throw ("Invalid change: would result in 0 items. Remove from cart instead.")
        }
        this.Quantity += amt;
    };

}

export interface ProductInterface {
    name:string;
    category:string;
    key: string;
    countryOfOrigin: string;
    winemaker:string;
    tasteSummary:string[];
    foodPairings:string[];
    tastingNotes:string;
    wineType:string;
    alcoholByVolume:number;
    price: number;
    rating: string;
    containerType:string;
    bottleMaterial:string;
    productPhotos:string[];
}