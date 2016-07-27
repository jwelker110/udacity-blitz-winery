
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'ub-footer',
    templateUrl: './footer.component.html',
    styles: [require('./footer.component.scss')],
    directives: [ROUTER_DIRECTIVES]
})
export class FooterComponent {

}