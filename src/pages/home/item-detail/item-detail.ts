import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {FwWritePanelComponent} from "../../../components/shared/fw-write-panel/fw-write-panel";
import {HomeBlogOperateComponent} from "../../../components/home-blog-operate/home-blog-operate";
import { BlogProvider, BLOG_TYPE} from '../../../providers';
import {Blog} from "../../../models/blog";

@IonicPage({
  name: 'detail-page',
  segment: 'detail/:id'
})
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  blog: Blog;
  showPlaceholder = true;
  curTabIndex = 1;
  constructor(public navCtrl: NavController,
              navParams: NavParams,
              public popoverCtrl: PopoverController,
              public blogProvider: BlogProvider) {
    this.blog = new Blog({});
    this.blog.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
    this.getCurrentBlog(this.blog.id);
  }

  clearPlaceholder(inputVal: string) {
    this.showPlaceholder = !inputVal.length;
  }

  // 评论，点赞 tab切换
  toggleTab(tabIndex) {
    this.curTabIndex = tabIndex;
  }

  getCurrentBlog(id: string) {
    // this.blog = (<any>this.blogProvider.getBlogListMock({id}))[0];
    this.blogProvider.getBlogDetail({id: this.blog.id}).subscribe((item: any) => {
      console.log('博文详情');
      console.log(item);
      this.blog = item.data;
    })
  }

  more(ev) {
    let popover = this.popoverCtrl.create(HomeBlogOperateComponent, {type: 4});
    popover.present({ev: ev});
  }
  // 打开输入面板，写评论
  openWritePanel(ev) {
    let popover = this.popoverCtrl.create(FwWritePanelComponent, {} , {
      cssClass: 'write-panel',
      showBackdrop: true
    });
    popover.present({ev: ev});
    popover.onDidDismiss(item => {
      if (item) {
        let param = {'article_id': this.blog.id, content: item.content};
        this.blogProvider.blogPushComment(param).subscribe(
          (resp: any) => {
            console.log(resp);
          }
        )
      }
    });
  }

  imgLoadErr(ev) {
    let imgEl = ev.target || ev.srcElement;
    imgEl.src = 'assets/img/advance-card-tmntr.jpg';
    console.error('img load error', ev)
  }
}
