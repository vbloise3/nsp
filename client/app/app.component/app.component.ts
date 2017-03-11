/**
 * Created by vincebloise on 1/25/17.
 */
import {Component, Optional, ViewEncapsulation} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { Http, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Observable} from "rxjs/Observable";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'material2-app-app',
    templateUrl: 'app/app.component/app.component2.html',
    styleUrls: ['app/app.component/app.component.css'],
    encapsulation:ViewEncapsulation.None
})
export class Material2AppAppComponent {
    isDarkTheme: boolean = false;
    lastDialogResult: string;
    myEmail: string = 'vbloise3@gmail.com';

    products: Observable<Array<string>>;
    errorMessage: string;
    productId: Number;
    randomness: Number;
    selected = '';

    getRandomNumber(): number {
        return Math.random();
    }

    select(text: string) {
        this.selected = text;
        this.lastDialogResult = text;
    }

    foods: any[] = [
        {name: 'Pizza', rating: 'Excellent'},
        {name: 'Burritos', rating: 'Great'},
        {name: 'French fries', rating: 'Pretty good'},
    ];

    progress: number = 0;

    constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar, private http: Http, route: ActivatedRoute) {
        this.products = this.http.get('/products')
            .map(res => res.json())
            .catch( err => {
                this.errorMessage =`Can't get product details from ${err.url}, error ${err.status} `;
                return Observable.empty();
            });
        this.productId = route.snapshot.params['id'];
        this.randomness = this.getRandomNumber();
        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }

    openDialog() {
        let dialogRef = this._dialog.open(DialogContent);

        dialogRef.afterClosed().subscribe(result => {
            this.lastDialogResult = result;
        })
    }

    showSnackbar() {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    }

    sendEmail() {
        window.open('mailto:' + this.myEmail + '?subject=Resume&body=Contacting you about your resume.', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none');
    }
}


@Component({
    template: `
    <!--div id="container" class="centerIt"-->
        <md-toolbar color="primary" style="height: 0.25em; width: 114%; margin-left: -1em; margin-top: -1em;">            
            <img class="mdCardSmallDialogImg" src="app/app.component/VinceBloiseTransparent.png">
            <span id="center" class="textBottom largeFont" style="width: 50%; margin-left: -1em;">&nbsp;My Contact Info</span>            
        </md-toolbar>
    <!--/div-->
    <table>
        <tr>
          <td><a href="mailto:vbloise3@gmail.com?Subject=Resume" style="color: blue;"><i class="material-icons md-18 iconBottom">email</i>vbloise3@gmail.com</a></td>
          <td><a href="tel:484-433-3269" style="color: blue"><i class="material-icons md-18 iconBottom">phone_iphone</i>484-433-3269</a></td>
        </tr>
    </table>
    <div class="centerIt2">
        <button md-raised-button md-autofocus (click)="dialogRef.close('done')">Done</button>
    </div>
  `,
})
export class DialogContent {
    constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}