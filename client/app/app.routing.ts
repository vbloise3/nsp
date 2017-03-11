/**
 * Created by vincebloise on 1/24/17.
 */
import { Routes, RouterModule } from '@angular/router';
import { YoMoFoComponent } from './yo-mo-fo/yo-mo-fo';
import HomeComponent from './home/home';
import {ParkComponent} from './parkTest/parkTest';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products/:id', component: HomeComponent},
    {path: 'yo', component: YoMoFoComponent},
    {path: 'dbaa', component: HomeComponent},
    {path: 'park', component: ParkComponent}
    ];

export const routing = RouterModule.forRoot(routes);