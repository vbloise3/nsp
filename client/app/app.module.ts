/**
 * Created by vincebloise on 1/18/17.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import 'rxjs/add/operator/map';
import { YoMoFoComponent } from './yo-mo-fo/yo-mo-fo';
import AppComponent from './appComponent/appComponent';
import HomeComponent from './home/home';
import { ParkComponent } from './parkTest/parkTest';
import { routing } from './app.routing';
import { MaterialModule } from '@angular/material';
import 'node_modules/hammerjs/hammer.js';
import {Material2AppAppComponent, DialogContent} from './app.component/app.component';


@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule,
        HttpModule, routing, MaterialModule, BrowserAnimationsModule],
    declarations: [ AppComponent, HomeComponent, YoMoFoComponent, ParkComponent, Material2AppAppComponent, DialogContent],
    entryComponents: [DialogContent],
    providers:    [
        {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

