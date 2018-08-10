import { Component } from '@angular/core';
import {App, IonicPage, ModalController} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
import {HomeListFilterComponent} from "../../components/home-list-filter/home-list-filter";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  currentItems: Item[];

  constructor(public items: Items,
              public modalCtrl: ModalController,
              public popoverCtrl: PopoverController,
              private app:App) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {}

  addItem() {
    console.log(this.app.getRootNavs());
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(HomeListFilterComponent);
    popover.present({ev: ev});
  }
}
