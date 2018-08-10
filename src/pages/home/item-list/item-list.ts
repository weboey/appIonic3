import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import {ModalController, NavController, PopoverController} from 'ionic-angular';
import { Item } from '../../../models/item';
import { Items } from '../../../providers';
import {HomeListEditComponent} from "../../../components/home-list-edit/home-list-edit";

@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html'
})
export class ItemListPage {
  currentItems: Item[];
  iconList = [
    {'id': 1, 'title': '转发', icon: 'ios-redo-outline'},
    {'id': 2, 'title': '点赞', icon: 'ios-thumbs-up-outline'},
    {'id': 3, 'title': '1万+', icon: 'ios-text-outline'},
    {'id': 4, 'title': '分享', icon: 'ios-git-branch-outline'}
  ];
  constructor(public navCtrl: NavController,
              public items: Items,
              public modalCtrl: ModalController,
              public popoverCtrl: PopoverController,
              private app:App) {
    this.currentItems = this.items.query();
  }
  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    // this.navCtrl.push(ItemDetailPage, {
    //   item: item
    // });
    console.log(item);
    console.log(this.app.getRootNavs());
    //this.navCtrl.push('detail-page', {item: item});
    this.app.getRootNav().push('detail-page', {item: item});
  }

  openListEditPopover(ev) {
    let popover = this.popoverCtrl.create(HomeListEditComponent);
    popover.present({ev: ev});
  }

  /*
  *  点赞，转发，评论，分享
  * */
  doListOperation(item) {
    console.log(item);
  }
  /*
  *  全文
  * */
  showAllText(ev) {
    ev.stopPropagation();
  }
}
