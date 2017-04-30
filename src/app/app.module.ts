import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { ProfilPage } from '../pages/profil/profil';
import { RetraitPage } from '../pages/retrait/retrait';
import { LoginPage } from '../pages/login/login';
import { OptionsPage } from '../pages/options/options';
import { ParametresPage } from '../pages/parametres/parametres';
import { ReclamationsPage } from '../pages/reclamations/reclamations';
import { SantePage } from '../pages/sante/sante';
import { LogoutPage } from '../pages/logout/logout';
import { ReclaMsgPage } from '../pages/recla-msg/recla-msg';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AcceuilPage,
    ProfilPage,
    RetraitPage,
    TabsPage,
    LoginPage,
    OptionsPage,
    ParametresPage,
    ReclamationsPage,
    SantePage,
    LogoutPage,
    ReclaMsgPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AcceuilPage,
    ProfilPage,
    RetraitPage,
    TabsPage,
    LoginPage,
    OptionsPage,
    ParametresPage,
    ReclamationsPage,
    SantePage,
    LogoutPage,
    ReclaMsgPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
