import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Items} from "../../../mocks/providers/items";

/**
 * Generated class for the MyShareRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'myShareRecordPage',
  segment: 'myShareRecord'
})
@Component({
  selector: 'page-my-share-record',
  templateUrl: 'my-share-record.html',
})
export class MyShareRecordPage {

  public currentItems: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private items: Items) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCommentRecordPage');
    this.currentItems = this.items.query();
  }
}
