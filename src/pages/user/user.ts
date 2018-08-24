import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {MyStarRecordPage} from "../MyRecord/my-star-record/my-star-record";
import {MyArticlePage} from "../MyRecord/my-article/my-article";
import {MyCollectRecordPage} from "../MyRecord/my-collect-record/my-collect-record";
import {DraftListPage} from "../MyRecord/draft-list/draft-list";
import {MyCommentRecordPage} from "../MyRecord/my-comment-record/my-comment-record";
import {MyFansAndConcernPage} from "../MyRecord/my-fans-and-concern/my-fans-and-concern";
import {Settings} from "../../providers";


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'user-page',
    segment: 'user',
  }
)
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  items = [];
  public userId;
  constructor(
    private nacCrl: NavController,
    public modalCtrl: ModalController,
    public settings: Settings
  ) {

  }

  ionViewDidLoad() {
    this.settings.getValue('userId').then(result => {
       this.userId = result;
       console.log(this.userId);
    });
  }
  // 登录
  goLogin() {
    this.nacCrl.push(LoginPage).then();
  }
  // 我的点赞
  goMyStarRecordPage() {
    this.nacCrl.push(MyStarRecordPage).then();
  }
  // 粉丝
  goMeFansPage() {
    this.nacCrl.push(MyFansAndConcernPage, {type: 'fans'}).then();
  }
  // 关注
  goMyConcernPage() {
    this.nacCrl.push(MyFansAndConcernPage, {type: 'concern'}).then();
  }
  // 帖子
  goMyArticlePage() {
    this.nacCrl.push(MyArticlePage).then();
  }
  // 收藏记录
  goMyCollectRecordPage() {
    this.nacCrl.push(MyCollectRecordPage).then();
  }
  // 草稿箱
  goMyDraftListPage() {
    this.nacCrl.push(DraftListPage).then();
  }
  // 评论记录
  goMyCommentRecordPage() {
    this.nacCrl.push(MyCommentRecordPage).then();
  }
  // 反馈
  goFeedback() {
    this.nacCrl.push('feedbackPage').then();
  }
  //设置
  presentModal() {
    this.nacCrl.push('UserSetting', null);
  }
}
