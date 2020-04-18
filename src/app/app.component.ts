import { Component, NgZone } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import UserService from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private _user: UserService,
    private _route: Router,
    private zone: NgZone, 
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  isTeacher=()=>this._user.getCurrentUser().isTeacher;
  isLogged=()=>this._user.getCurrentUser() != undefined;

  closeCustom() {
    this.menu.close();
  }

  ionViewWillEnter(){
    this._route.navigateByUrl('/home');
  }

  logOff(){
    this.closeCustom();
    this._user.logOff();
    
    this.ionViewWillEnter();
  }

  profile(){
    this.closeCustom();
    this._route.navigateByUrl(
      `/profile-screen/${this._user.getCurrentUser().isTeacher ? "teacher" : "children"}/${this._user.getCurrentUser().id}`
    )
  }
}
