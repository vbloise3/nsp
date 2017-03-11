/**
 * Created by vincebloise on 1/19/17.
 */
import { Component, ViewEncapsulation }      from '@angular/core';
import { Http, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Observable} from "rxjs/Observable";

@Component({
    selector: 'http-client',
    templateUrl: 'app/appComponent/appComponent.html',
    styleUrls: ['app/appComponent/appComponent.css'],
    encapsulation:ViewEncapsulation.None
})

export default class AppComponent {}