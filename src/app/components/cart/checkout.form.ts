import {Component, Output, OnInit} from "@angular/core";
import {EventEmitter} from "@angular/platform-browser-dynamic/src/facade/async";
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup} from "@angular/forms";

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
        this.checkoutForm = _formBuilder.group({
            'fullname': [''],
            'email': [''],
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
            'creditcard': [''],
            'exp': [''],
            'csc': ['']
        });
    }

    ngOnInit() {
        console.log(this.checkoutForm);
    }

    /**
     * Submit the form, emit the event, and clear the form
     * @param form - the form containing input values
     */
    submitForm = (form: any) => {
        if(!form.valid) {return;}
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

    validateCreditCardInput = (input: FormGroup) => {
        console.log(input);
        // input.valid = this.validateCreditCard(input.value);
    };

    /**
     * This performs a simple check using Luhn's algorithm to determine
     * whether the credit card number is valid. This is simply to provide feedback
     * to prevent user error.
     * Thanks, https://en.wikipedia.org/wiki/Luhn_algorithm
     * @param cardNum
     * @returns {boolean}
     */
    validateCreditCard = (cardNum: number): boolean => {
        let checkDigit = cardNum % 10;
        let sums = this.sumOfDoubleEvenPlace(cardNum) + this.sumOfOddPlace(cardNum);
        if((sums) % 10 != 0) {return false;}

        return ((sums - checkDigit) * 9) % 10 == checkDigit;
    };

    sumOfDoubleEvenPlace = (num: number): number => {
        var sum = 0;
        var count = 0;
        while(num > 0) {
            num = Math.floor(num / 10);
            if(count % 2 == 0) {
                sum += this.getDigit((num % 10) * 2);
            }
            count++;
        }

        return sum;
    };

    sumOfOddPlace = (num: number): number => {
        var sum = 0;
        var count = 0;
        while(num > 0) {
            if(count % 2 == 0) {
                sum += this.getDigit(Math.floor(num % 10));
            }
            num = Math.floor(num / 10);
            count++;
        }

        return sum;
    };

    /**
     * Retrieve the single digit, and if a double digit, return the sum of both digits
     * @param num {number} - the digit to retrieve
     * @returns {number} - the digit
     */
    getDigit = (num: number): number => {
        return num > 9 ? (num % 10) + Math.floor(num / 10) : num;
    };

    /**
     * Determines whether the provided number contains an appropriate prefix
     * @param num {number} - the cc number
     * @param p {number} - the prefix to match to
     * @returns {boolean} - true if a match, else false
     */
    prefixMatched = (num: number, p: number) => {
        return p == this.getPrefix(num, p);
    };

    /**
     * Retrieves the size (width) of num
     * @param num {number} - the number to measure
     * @returns {number} - size of num
     */
    getSize = (num: number): number => {
        var size = 0;
        while(num != 0) {
            num = Math.floor(num / 10);
            size++;
        }
        return size;
    };

    /**
     * Retrieves the prefix of the provided cc number
     * @param num {number} - the cc number
     * @param n {number} - the
     * @returns {number}
     */
    getPrefix = (num: number, n: number): number => {
        let sizeNum = this.getSize(num);
        if(sizeNum < n) {return num;}

        let prefix = 0;

        for(var i = sizeNum - 1; i > 0; i--) {
            if(this.getSize(prefix) == n) return n;

            var divisor = 1;
            prefix *= 10;
            for(let j = i; j > 0; j--) {
                divisor *= 10;
            }
            prefix += Math.floor(num / divisor) % 10;
        }

        prefix += num % 10;
        return prefix;
    };



    /**
     * clear the form credit card contents
     * @param form
     */
    clearForm = (form: any) => {
        form.creditcardBilling = '';
        form.expireBilling = '';
        form.cscBilling = null;
    };
}
