
import {Component, Input} from "@angular/core";
import {WineInterface} from "./wine.interface";

@Component({
    selector: 'wine-product',
    templateUrl: './wine.component.html',
    styles: [require('./wine.component.scss')]
})
export class WineComponent {
    @Input()product: WineInterface;

    constructor() {
    }

}