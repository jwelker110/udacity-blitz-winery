import {Component, Input} from "@angular/core";

import {WineInterface} from "./wine.interface";
import {ArrayToStringPipe} from "../pipe/array-string.pipe";
import {ModalComponent} from "../modal/modal.component";

@Component({
    selector: 'wine-product',
    templateUrl: './wine.component.html',
    styles: [require('./wine.component.scss')],
    directives: [ModalComponent],
    pipes: [ArrayToStringPipe]
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