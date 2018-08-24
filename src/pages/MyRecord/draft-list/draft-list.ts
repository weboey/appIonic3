import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Items} from "../../../mocks/providers/items";
import {BaseUI} from "../../../common/baseUI.common";

/**
 * Generated class for the DraftListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'draftListPage',
  segment: 'draftList'
})
@Component({
  selector: 'page-draft-list',
  templateUrl: 'draft-list.html',
})
export class DraftListPage extends BaseUI{

  public currentItems;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private items: Items,
    private toastController: ToastController,
  ) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCollectRecordPage');
    this.currentItems = this.items.query();
  }

  removeArticle(data) {
    super.showToast(this.toastController, '文章删除成功')
  }

}
