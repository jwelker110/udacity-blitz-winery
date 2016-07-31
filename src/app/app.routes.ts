import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {WinesComponent} from './wines/wines.component';
import {PageNotFoundComponent} from './notfound/notfound.component';
import {CartComponent} from "./cart/cart.component";

const ROUTES: RouterConfig = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'wines', component: WinesComponent},
    {path: 'cart', component: CartComponent},
    {path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(ROUTES)
];
