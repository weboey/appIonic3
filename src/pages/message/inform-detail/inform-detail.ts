import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {App} from 'ionic-angular';

@IonicPage({
  name: 'inform-detail',
  segment: 'inform/:items'
})
@Component({
  selector: 'page-inform-detail',
  templateUrl: 'inform-detail.html',
})
export class InformDetailPage {
  // 父组件参数
  public informFilter;
  // 标题头部
  public titleText;
  // 消息内容
  public informCom = [
    {name: '定过房水电费', time: '2018-8-18 18:00'},
    {name: '水电费就开始', time: '2018-8-20 19:00'}
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App
  ) {
    this.informFilter = this.navParams.get('items');
    this.judgeTitle(this.informFilter);
  }

  ionViewDidLoad() {

  }
  // 判断标题
  judgeTitle (item) {
    if (item === '1') {
      this.titleText = '重要通知';
    } else if (item === '2') {
      this.titleText = '系统通知';
    } else if (item === '3') {
      this.titleText = '关注消息';
    }
  }
  // 重要通知页面
  goPointInform (item) {
    this.app.getRootNav().push('point-inform', {data: item})
  }

}
