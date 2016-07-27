
import {Component} from "@angular/core";

import {ContactForm} from "./contact.form";

@Component({
    templateUrl: './contact.component.html',
    styles: [require('./contact.component.scss')],
    directives: [ContactForm]
})
export class ContactComponent {

}
