import { Component } from '@angular/core';
import { PopoverController, ViewController } from 'ionic-angular';

import { AcceuilPage } from '../acceuil/acceuil';
import { ProfilPage } from '../profil/profil';
import { RetraitPage } from '../retrait/retrait';
import { OptionsPage } from '../options/options';

@Component({
  selector: 'tabs-select',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AcceuilPage;
  tab2Root = RetraitPage;
  tab3Root = ProfilPage;

  constructor(public popoverCtrl: PopoverController, public viewCtrl: ViewController) {}

  openOptions(myEvent) {
    let popover = this.popoverCtrl.create(OptionsPage);
    popover.present({
      ev: myEvent
    });
  }
  
}
