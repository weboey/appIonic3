import {Component, ViewChild} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Nav, Platform} from 'ionic-angular';

import {MainPage} from '../pages';
import {Settings} from "../providers";

@Component({
  template: `
    <ion-nav [root]="rootPage" [class]="selectedTheme"></ion-nav>`
})
export class MyApp {
  rootPage = MainPage;

  // 选择主题
  selectedTheme: string = 'dark-theme';

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private settings: Settings) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
