
import {Component, Input} from "@angular/core";
import {WineInterface} from "./wine.interface";
import {PairingPipe} from "../pipe/pairing.pipe";

@Component({
    selector: 'wine-product',
    templateUrl: './wine.component.html',
    styles: [require('./wine.component.scss')],
    pipes: [PairingPipe]
})
export class WineComponent {
    @Input()product: WineInterface;
    isProductSelected: boolean = false;

    constructor() {
    }

    setProductSelected = (isSelected: boolean) => {
        this.isProductSelected = isSelected;
    };
}