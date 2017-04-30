import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ReclaMsgPage } from '../recla-msg/recla-msg'

@Component({
    selector: 'page-reclamations',
    templateUrl: 'reclamations.html'
})
export class ReclamationsPage {

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

    ecrireRecla () {
        let modal = this.modalCtrl.create(ReclaMsgPage);
        modal.onDidDismiss(data => {
            console.log(data);
        });
        modal.present();
    }

}
