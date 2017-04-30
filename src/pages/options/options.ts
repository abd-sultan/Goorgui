import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ParametresPage } from '../parametres/parametres';
import { ReclamationsPage } from '../reclamations/reclamations';
import { SantePage } from '../sante/sante';
import { LogoutPage } from '../logout/logout';

@Component({
    templateUrl: 'options.html'
})

export class OptionsPage {

    constructor(public navCtrl: NavController) {}

    /*close() {
        this.viewCtrl.dismiss();
    }*/

    toSante() {
        this.navCtrl.push(SantePage);
    }

    toRecla() {
        this.navCtrl.push(ReclamationsPage);
    }

    toParam() {
        this.navCtrl.push(ParametresPage);
    }

    toLogout() {
        this.navCtrl.push(LogoutPage);
    }


}