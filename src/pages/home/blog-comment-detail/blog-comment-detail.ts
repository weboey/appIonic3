import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';

/**
 * Generated class for the BlogCommentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. 评论展开详情页面
 */

@IonicPage({
  name: 'comment-detail-page',
  segment: 'comment-detail/:id'
})
@Component({
  selector: 'page-blog-comment-detail',
  templateUrl: 'blog-comment-detail.html',
})
export class BlogCommentDetailPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogCommentDetailPage');
  }

  gotoThumbsPage() {
    this.app.getRootNav().push('comment-thumbs-page', {id: 4})
  }
}
