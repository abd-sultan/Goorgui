import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-parametres',
    templateUrl: 'parametres.html'
})
export class ParametresPage {

    constructor(public navCtrl: NavController) {}

    volume: number = 50;

}
