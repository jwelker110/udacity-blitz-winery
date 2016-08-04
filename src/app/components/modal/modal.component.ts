import {Component, Input} from "@angular/core";

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styles: [require('./modal.component.scss')]
})
export class ModalComponent {
    @Input() show: boolean = false;

    constructor() {}

}