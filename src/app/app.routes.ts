import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {WinesComponent} from './wines/wines.component';
import {PageNotFoundComponent} from './notfound/notfound.component';

const ROUTES: RouterConfig = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'wines', component: WinesComponent},
    {path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(ROUTES)
];
