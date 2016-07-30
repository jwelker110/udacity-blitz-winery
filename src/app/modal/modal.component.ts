import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styles: [require('./modal.component.scss')]
})
export class ModalComponent {
    @Input() show: boolean = false;
    @Output() closed: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    /**
     * Alert that the modal has been closed
     */
    onModalClosed = () => {
        this.closed.emit(true);
    };

}