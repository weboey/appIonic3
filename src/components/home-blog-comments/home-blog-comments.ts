import { Component, Input } from '@angular/core';
import { BlogComments } from '../../providers';
import { App, AlertController } from 'ionic-angular';
import {UserCommon} from "../../common/user-common";
/**
 * Generated class for the HomeBlogCommentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components. 博文评论列表组件
 */
@Component({
  selector: 'home-blog-comments',
  templateUrl: 'home-blog-comments.html'
})
export class HomeBlogCommentsComponent extends UserCommon{

  // 评论级别：0：博文评论列表， 1：评论的回复列表
  @Input() level = 0;
  commentList = [];
  constructor(
    private blogComments: BlogComments,
    public alertCtrl: AlertController,
    private app:App) {
    super();
    console.log('Hello HomeBlogCommentsComponent Component');
    this.commentList = this.blogComments.query();
    console.log(this.commentList );
  }

  gotoDetail() {
    if (this.level === 0) {
      this.app.getRootNav().push('comment-detail-page', {id: 4})
    }
  }

  remove(ev) {
    ev.stopPropagation();
    const confirm = this.alertCtrl.create({
      title: '确定删除这条评论?',
      message: '',
      buttons: [
        {
          text: '取消',
          handler: () => {console.log('取消');}
        },
        {
          text: '确定',
          handler: () => {}
        }
      ]
    });
    confirm.present();
  }
}
