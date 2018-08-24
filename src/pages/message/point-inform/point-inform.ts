import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'point-inform',
  segment: 'point/:data'
})
@Component({
  selector: 'page-point-inform',
  templateUrl: 'point-inform.html',
})
export class PointInformPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams
  ) {
    console.log(this.navParams.get('data'))
  }

  ionViewDidLoad() {

  }

}
