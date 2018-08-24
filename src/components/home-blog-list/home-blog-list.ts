import { Component, Input } from '@angular/core';
import { App } from 'ionic-angular';
import {NavController, PopoverController, ActionSheetController, ModalController, ViewController} from 'ionic-angular';
import { Item } from '../../models/item';
import {HomeBlogOperateComponent} from "../home-blog-operate/home-blog-operate";
import {BlogProvider} from "../../providers";
import {MainPage} from '../../pages';

@Component({
  selector: 'home-blog-list',
  templateUrl: 'home-blog-list.html'
})
export class HomeBlogListComponent {

  currentItems: Item[];
  @Input()
  set items(value: any) {
    this.currentItems = value;
  }
  get items(): any {
    return this.currentItems;
  }
  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public actionsheetCtrl: ActionSheetController,
              public blogProvider: BlogProvider,
              private app:App) {
  }

  ionViewDidLoad() {}

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    // this.navController.push(ItemDetailPage, {
    //   item: item
    // });
    console.log(item);
    console.log(this.app.getRootNavs());
    //this.navController.push('detail-page', {item: item});
    this.app.getRootNav().push('detail-page', {id: item.id});
  }

  openListEditPopover(ev, blogItem) {
    let type = blogItem.creator.id === '2' ? 1 : 3;
    let popover = this.popoverCtrl.create(HomeBlogOperateComponent, {type, blog: blogItem});
    popover.present({ev: ev});
  }

  /*
  *  点赞，转发，评论，分享
  * */
  doListOperation(item, blog) {
    switch(item.id){
      case 1:this._blogDZ(blog);break;
      case 2:this.openItem({});break;
      case 3:this.openSharePanel();break;
    }
  }
  _blogDZ(blog) {
    // blog.thumbsCount += 1;
    this.blogProvider.blogThumbs({article_id: blog.id})
      .subscribe((resp: any) => {
        blog.thumbs_count = resp.data.is_praise;
        // console.log(resp.data.is_praise);
      })
  }
  openSharePanel() {
    let actionSheet = this.actionsheetCtrl.create({
      cssClass: 'horizontal-sheet',
      buttons: [
        {
          text: '转发', icon: 'ios-images-outline',
          handler: () => {
            this.navCtrl.setRoot(MainPage);
            this.openModal('blog-forward', null);
          }
        },
        {
          text: '微信', icon: 'ios-images-outline',
          handler: () => {}
        },
        {
          text: '朋友圈', icon: 'ios-images-outline',
          handler: () => {}
        },
        {
          text: '微博', icon: 'ios-images-outline',
          handler: () => {}
        },
        {
          text: 'QQ', icon: 'ios-images-outline',
          handler: () => {}
        },{
          text: '取消', role: 'cancel',
          handler: () => {}
        }
      ]
    });
    actionSheet.present();
  }
  isSelf(uid) {
    return uid == 2;
  }

  imgLoadErr(ev) {
    let imgEl = ev.target || ev.srcElement;
    imgEl.src = 'assets/img/advance-card-tmntr.jpg';
    console.error('img load error', ev)
  }

  private openModal(page: string, data) {
    let addModal = this.modalCtrl.create(page, data);
    addModal.onDidDismiss(item => {
      if (item) {
        console.error(item)
      }
    });
    addModal.present().then(() => {
      this.viewCtrl.dismiss();
    });
  }
}
