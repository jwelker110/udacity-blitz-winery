import {Component, Output, OnInit} from "@angular/core";
import {EventEmitter} from "@angular/platform-browser-dynamic/src/facade/async";

@Component({
    selector: 'checkout-form',
    templateUrl: './checkout.form.html',
    styles: [require('./checkout.form.scss')]
})
export class CheckoutForm {
    @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
    @Output() cancelled: EventEmitter<any> = new EventEmitter<any>();


    constructor() {}

    submitForm = (form: any) => {
        if(form.$invalid) {return;}
        this.submitted.emit(form);
        this.clearForm();
    };

    cancelForm = () => {
        this.cancelled.emit(true);
    };

    clearForm = () => {

    };
}
