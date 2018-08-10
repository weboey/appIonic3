import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// let ws = new WebSocket("wss://echo.websocket.org");
let ws = new WebSocket(`ws://192.168.1.220:8000/feed/${1}/${123}`);

/**
 * Generated class for the TalkDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'talk-detail',
  segment: 'talk/:data'
})
@Component({
  selector: 'page-talk-detail',
  templateUrl: 'talk-detail.html',
})
export class TalkDetailPage {
  // 聊天传来信息
  public inData: any;
  // 消息
  public news;
  // 消息界面数据
  public messageData = [
    {
      header: {
        from: '1',
        to: '2',
        send_time: '2018-8-8 23:22:23',
        date: '2018-8-8 10:52:23',
        type: '1'
      },
      body: '456897'
    },
    {
      header: {
        from: '2',
        to: '1',
        send_time: '2018-8-8 13:22:23',
        date: '2018-8-8 8:52:23',
        type: '1'
      },
      body: 'wer'
    }
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams
  ) {
    this.inData = navParams.get('data');
    // console.log(this.inData);
  }

  ionViewDidLoad() {
    // 测试
    console.log(ws);
    ws.onopen = function () {
      ws.send('hellow');
    };
    ws.onmessage = (event) => {
      console.log(event);
      // this.messageData.push(event.data);
      console.log(this.messageData);
    };
    // 测试
  }
  ionViewWillLeave() {
    ws.close = (ev) => {
      console.log(ev);
    };
  }
  // 发送消息
  sendMes () {
    if (this.news) {
      ws.send(this.news);
    }
    // ws.onmessage = (event) => {
    //   console.log(event);
    //   this.messageData.push(event.data);
    //   console.log(this.messageData);
    // };
    // ws.addEventListener('message', function (ev) {
    //   console.log(ev);
    // });
  }

}
