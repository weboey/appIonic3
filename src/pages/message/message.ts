import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {App} from 'ionic-angular';
import {MessageServer} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  // 判断是否登录
  public isLogin = true;
  // 头部系统信息
  public selectMes = 'mes';
  // 头部tab
  public tabMes = [
    {id: 'sys', name: '通知'},
    {id: 'mes', name: '消息'}
  ];
  // 切换头部页面
  tabValue = '1';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public httpMes: MessageServer
  ) {
  }

  ionViewDidLoad() {
    this.getZan();
  }
  // tab切换
  messageTab(event) {
    if (event) {
      this.tabValue = event;
    } else {
      this.tabValue = '1';
    }
  }
  // 跳转到注册页面
  goResgin () {
    this.app.getRootNav().push('register-page');
  }
  // 跳转到登录页面
  goLoginPage () {
    this.app.getRootNav().push('login-page');
  }
  // 调到好友列表
  goFriendPage (item) {
    this.app.getRootNav().push('friend-list', {data: item});
  }
  // 点赞请求
  getZan () {
    this.httpMes.getZanData().subscribe(res => {
      console.log(res);
    })
  }
}
