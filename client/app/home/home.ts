/**
 * Created by vincebloise on 1/19/17.
 */
import { Component, ViewEncapsulation }      from '@angular/core';
import { Http, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Observable} from "rxjs/Observable";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'http-client',
    templateUrl: 'app/home/home.html',
    styleUrls: ['app/home/home.css'],
    encapsulation:ViewEncapsulation.None
})

export default class HomeComponent {

    products: Observable<Array<string>>;
    errorMessage: string;
    productId: Number;
    randomness: Number;

    getRandomNumber(): number {
        return Math.random();
    }

    constructor(private http: Http, route: ActivatedRoute) {

        this.products = this.http.get('/products')
            .map(res => res.json())
            .catch( err => {
                this.errorMessage =`Can't get product details from ${err.url}, error ${err.status} `;
                return Observable.empty();
            });
        this.productId = route.snapshot.params['id'];
        this.randomness = this.getRandomNumber();
    }
}