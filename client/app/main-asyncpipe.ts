/**
 * Created by vincebloise on 1/19/17.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Observable} from "rxjs/Observable";
import { YoMoFoComponent } from './yo-mo-fo/yo-mo-fo';

@Component({
    selector: 'http-client',
    template: `<h1>All Products</h1>
  <ul>
    <li *ngFor="let product of products | async">
       {{product.title}}
    </li>
  </ul>
  <h2>{{errorMessage}}</h2>
  <yo-mo-fo></yo-mo-fo>
  `})
class AppComponent {

    products: Observable<Array<string>>;
    errorMessage: string;

    constructor(private http: Http) {

        this.products = this.http.get('/products')
            .map(res => res.json())
            .catch( err => {
                this.errorMessage =`Can't get product details from ${err.url}, error ${err.status} `;
                return Observable.empty();
            });
    }
}

@NgModule({
    imports:      [ BrowserModule,
        HttpModule],
    declarations: [ AppComponent, YoMoFoComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);