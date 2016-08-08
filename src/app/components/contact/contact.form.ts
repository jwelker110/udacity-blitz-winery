import {Component, OnInit} from "@angular/core";
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'contact-form',
    templateUrl: './contact.form.html',
    styles: [require('./contact.form.scss')],
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class ContactForm implements OnInit {
    isSubmitted: boolean = false;
    contactForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.contactForm = this._formBuilder.group({
            'name': [''],
            'email': ['', Validators.compose([Validators.required, Validators.pattern('.+@.+')])],
            'msg': ['']
        });
    }

    submitForm =(form: any) => {
        if(!form.valid) {return;}
        this.isSubmitted = true;
    };

}