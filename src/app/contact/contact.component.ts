import {Component} from "@angular/core";

import {ContactForm} from "./contact.form";
import {MapComponent} from "../map/map.component";

@Component({
    templateUrl: './contact.component.html',
    styles: [require('./contact.component.scss')],
    directives: [ContactForm, MapComponent]
})
export class ContactComponent {

}
