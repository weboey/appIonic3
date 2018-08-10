import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';



export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
    this.dir = platform.dir();
    this.slides = [
      {
        title: 'page1',
        description: 'page1...........',
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: 'page2',
        description: 'page2...........',
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: 'page3',
        description: 'page3',
        image: 'assets/img/ica-slidebox-img-3.png',
      }
    ];

  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
