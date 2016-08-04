import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";


@Component({
    templateUrl: './about.component.html',
    styles: [require('./about.component.scss')],
    directives: [ROUTER_DIRECTIVES]
})
export class AboutComponent {

    constructor(){}

}
