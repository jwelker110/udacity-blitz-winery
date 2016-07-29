import {Component, Output, Input, EventEmitter} from "@angular/core";

import {WineInterface} from './wine.interface';

@Component({
    selector: 'wine-detailed',
    templateUrl: './wine-detailed.component.html',
    styles: [require('./wine-detailed.component.scss')]
})
export class WineDetailedComponent {
    @Output() addedToCart: EventEmitter<any> = new EventEmitter<any>();
    @Input() wine: WineInterface;

    constructor() {}

    /**
     * This will emit the event that can be captured by
     * the shopping cart (if implemented)
     */
    addToCart = () => {
        if(!this.wine) {return;}
        this.addedToCart.emit(this.wine);
    }


}