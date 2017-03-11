/**
 * Created by vincebloise on 3/11/17.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'park-test',
    templateUrl: 'app/parkTest/parkTest.html'
})
export class ParkComponent {
    name: string;

    constructor() {
        this.name = 'Nickerson State Park!';
    }
}