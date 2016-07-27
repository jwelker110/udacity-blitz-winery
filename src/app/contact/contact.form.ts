
import {Component} from "@angular/core";

@Component({
    selector: 'contact-form',
    templateUrl: './contact.form.html',
    styles: [require('./contact.form.scss')]
})
export class ContactForm {
    isSubmitted: boolean = false;
    name: string;
    email: string;
    msg: string;

    constructor() {
    }

    submitForm() {
        this.isSubmitted = true;
    }

}