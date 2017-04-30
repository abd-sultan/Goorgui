import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-recla-msg',
  templateUrl: 'recla-msg.html',
})
export class ReclaMsgPage {

  typeRecla: String;
  /*typeRecla = [
    {notif : 'notif'},
    {ipres : 'ipres'},
    {bugs : 'bugs'},
    {autres : 'autres'},
  ];*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  envoyerRecla() {
    this.viewCtrl.dismiss(this.typeRecla);
  }

  annulerRecla() {
    this.viewCtrl.dismiss();
  }


}
