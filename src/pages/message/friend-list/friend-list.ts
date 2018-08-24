import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {App} from 'ionic-angular';

/**
 * Generated class for the FriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'friend-list',
  segment: 'friend/:data'
})
@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {
  // 好友列表
  public friendList = [
    {name: '1', img: 'p', state: '12'},
    {name: '2', img: 'gh', state: '32'},
    {name: '3', img: 'u', state: '62'}
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FriendListPage');
  }
  // 调到聊天详情
  goTalkPage(item) {
    this.app.getRootNav().push('talk-detail', {data: item});
  }
  // 添加好友
  goAddFriend () {
    this.app.getRootNav().push('add-friend');
  }

}
