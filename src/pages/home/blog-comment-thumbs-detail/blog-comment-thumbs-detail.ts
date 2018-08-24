import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlogCommentThumbsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. 评论点赞页面
 */

@IonicPage({
  name: 'comment-thumbs-page',
  segment: 'thumbs-list/:id'
})
@Component({
  selector: 'page-blog-comment-thumbs-detail',
  templateUrl: 'blog-comment-thumbs-detail.html',
})
export class BlogCommentThumbsDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogCommentThumbsDetailPage');
  }

}
