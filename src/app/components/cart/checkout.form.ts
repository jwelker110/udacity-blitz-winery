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

    /**
     * Submit the form, emit the event, and clear the form
     * @param form - the form containing input values
     */
    submitForm = (form: any) => {
        if(form.$invalid) {return;}
        this.submitted.emit(form);
        this.clearForm(form);
    };

    /**
     * Emit the cancel event so the parent may close
     * the form
     */
    cancelForm = () => {
        this.cancelled.emit(true);
    };

    /**
     * clear the form contents
     * @param form
     */
    clearForm = (form: any) => {
        form.firstname = '';
        form.lastname = '';
        form.email = '';
        form.address = '';
        form.addressTwo = '';
        form.city = '';
        form.state = '';
        form.zip = '';
        form.creditcard = '';
        form.expire = '';
        form.csc = null;
    };
}
