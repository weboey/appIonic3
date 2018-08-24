import { Component } from '@angular/core';
import {App, IonicPage, ModalController, LoadingController} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { Items } from '../../providers';
import {HomeListFilterComponent} from "../../components/home-list-filter/home-list-filter";
import {BlogSearchPage} from "./blog-search/blog-search";
import {BlogProvider} from "../../providers";
import {Settings} from "../../providers";
import {HomeBlogOperateComponent} from "../../components/home-blog-operate/home-blog-operate";
import {BaseUI} from "../../common/baseUI.common";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage extends BaseUI{
  curFilterTab = 1;
  currentItems = [];
  showTip = false;
  constructor(public items: Items,
              public modalCtrl: ModalController,
              public popoverCtrl: PopoverController,
              private app:App,
              public settings:Settings,
              public loadingCtrl: LoadingController,
              private blogProvider: BlogProvider) {
    super();
  }

  ionViewDidLoad() {
    this.loadData();
  }
  tabChange(tab) {
    console.log('博文列表刷新数据', event);
    this.curFilterTab = +tab;
  }
  loadData() {
    // let loading = super.showLoading(this.loadingCtrl, "加载中...");
    this.blogProvider.getBlogList().subscribe((data: any) => {
      console.log(data);
      this.currentItems = data.data_list;
    });
    // this.currentItems = this.items.query();
  }
  addItem(ev) {
    let popover = this.popoverCtrl.create(HomeBlogOperateComponent, {type: 5});
    popover.present({ev: ev});
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(HomeListFilterComponent);
    popover.present({ev: ev});
  }

  gotoSearchPage() {
    console.log('gotoSearchPage');
    this.settings.getValue('userId').then(v=>{console.log(v)});
    let addModal = this.modalCtrl.create('BlogSearchPage');
    addModal.onDidDismiss(item => {
      console.log('搜索关闭');
      console.log(item);
    });
    addModal.present();
  }

  doRefresh(refresher) {
    this.loadData();
    setTimeout(()=>{
      refresher.complete();
      this.showTip = true;
      setTimeout(()=>{
        this.showTip = false;
      }, 2000)
    }, 1000);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.loadData();
    setTimeout(()=>{
      infiniteScroll.complete();
    }, 1000);
  }
}
