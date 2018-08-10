import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {App} from 'ionic-angular';

/**
 * Generated class for the MessageContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message-content',
  templateUrl: 'message-content.html'
})
export class MessageContentComponent {
  contentList = [
    {pic: '图1', name: 'a', time: '8:30', mes: 'qwe', tip: 3},
    {pic: '图9', name: 'b', time: '9:30', mes: 'yui', tip: 9}
  ];

  text: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App
  ) {
    console.log('Hello MessageContentComponent Component');
    this.text = 'Hello World';
  }
  // 调到聊天详情
  goTalkPage(item) {
    this.app.getRootNav().push('talk-detail', {data: item})
  }

}
