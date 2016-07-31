export interface WineInterface {
    key: {
        name:string;
        category:string;
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
}