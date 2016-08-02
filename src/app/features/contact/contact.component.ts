import {Component} from "@angular/core";

import {ContactForm} from "../../components/contact/contact.form";
import { MapComponent } from "../../components/map/map.component";

@Component({
    templateUrl: './contact.component.html',
    styles: [require('./contact.component.scss')],
    directives: [ContactForm, MapComponent]
})
export class ContactComponent {

}
