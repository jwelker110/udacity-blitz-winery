import {Component, Output, OnInit} from "@angular/core";
import {EventEmitter} from "@angular/platform-browser-dynamic/src/facade/async";
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup} from "@angular/forms";
import {Validators} from "@angular/common";

import {CreditCardValidator} from "../../validators/creditcard.validator";

@Component({
    selector: 'checkout-form',
    templateUrl: './checkout.form.html',
    styles: [require('./checkout.form.scss')],
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class CheckoutForm implements OnInit{
    @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
    @Output() cancelled: EventEmitter<any> = new EventEmitter<any>();
    checkoutForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.checkoutForm = this._formBuilder.group({
            'fullname': [''],
            'email': ['', Validators.compose([Validators.required, Validators.pattern(".+@.+")])],
            'address': [''],
            'addressTwo': [''],
            'city': [''],
            'state': [''],
            'zip': [''],
            'isBilling': [''],
            'fullnameBilling': [''],
            'addressBilling': [''],
            'addressTwoBilling': [''],
            'cityBilling': [''],
            'stateBilling': [''],
            'zipBilling': [''],
            'creditcard': ['', Validators.compose([Validators.required, CreditCardValidator.validateCard])],
            'exp': [''],
            'csc': ['']
        });
    }

    /**
     * Submit the form, emit the event, and clear the form
     * @param form - the form containing input values
     */
    submitForm = (form: any) => {
        if(!form.valid) {return;}
        this.submitted.emit(form);
    };

    /**
     * Emit the cancel event so the parent may close
     * the form
     */
    cancelForm = () => {
        this.cancelled.emit(true);
    };

}
