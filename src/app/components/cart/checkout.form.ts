import {Component, Output, OnInit} from "@angular/core";
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventEmitter} from "@angular/platform-browser-dynamic/src/facade/async";

import {StatesModel} from "../../models/states.model";

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
    statesModel: StatesModel;

    constructor(private _formBuilder: FormBuilder, private _statesModel: StatesModel) {
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
            'creditcard': [''], // Add CreditCardValidator.validateCard to the validators here
            'exp': [''],
            'csc': ['']
        });
        this.statesModel = this._statesModel;
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
