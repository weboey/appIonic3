import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Items} from "../../../mocks/providers/items";

/**
 * Generated class for the MyCollectRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'myCollectRecordPage',
  segment: 'myCollectRecord'
})
@Component({
  selector: 'page-my-collect-record',
  templateUrl: 'my-collect-record.html',
})
export class MyCollectRecordPage {

  public currentItems;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private items: Items
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCollectRecordPage');
    this.currentItems = this.items.query();
  }

}
