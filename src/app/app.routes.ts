import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from './features/home/home.component';
import {AboutComponent} from './features/about/about.component';
import {ContactComponent} from './features/contact/contact.component';
import {WinesComponent} from './features/wines/wines.component';
import {PageNotFoundComponent} from './features/notfound/notfound.component';
import {CartComponent} from "./features/cart/cart.component";

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
