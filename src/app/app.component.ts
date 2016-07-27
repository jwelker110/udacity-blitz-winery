import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {NavComponent} from './nav/nav.component';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {WinesComponent} from "./wines/wines.component";
import {FooterComponent} from "./footer/footer.component";
import {WinesService} from "./wines/wines.service";
import {PageNotFoundComponent} from "./notfound/notfound.component";

@Component({
    selector: 'ub-app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss')],
    directives: [NavComponent, FooterComponent, RouterOutlet],
    providers: [WinesService],
    precompile: [HomeComponent, AboutComponent, ContactComponent, WinesComponent, PageNotFoundComponent]
})
export class AppComponent {
}
