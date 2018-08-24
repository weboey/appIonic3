import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Items} from "../../../mocks/providers/items";

/**
 * Generated class for the MyStarRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'myStarRecordPage',
  segment: 'myStarRecord'
})
@Component({
  selector: 'page-my-star-record',
  templateUrl: 'my-star-record.html',
})
export class MyStarRecordPage {

  public currentItems;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private items: Items
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyStarRecordPage');
    this.currentItems = this.items.query();
  }

}
