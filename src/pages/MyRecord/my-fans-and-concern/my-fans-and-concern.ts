import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MyFansAndConcernPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'myFansAndConcernPage',
  segment: 'myFansAndConcern'
})
@Component({
  selector: 'page-my-fans-and-concern',
  templateUrl: 'my-fans-and-concern.html',
})
export class MyFansAndConcernPage {
  type: string = 'fans';

  public mockData = [
    {
      src: 'assets/imgs/testHeadPortraitsUrl.png',
      nickname: '李白'
    },
    {
      src: 'assets/imgs/testHeadPortraitsUrl.png',
      nickname: '白居易'
    },
    {
      src: 'assets/imgs/testHeadPortraitsUrl.png',
      nickname: '杜浦'
    },
    {
      src: 'assets/imgs/testHeadPortraitsUrl.png',
      nickname: '王维'
    },
    {
      src: 'assets/imgs/testHeadPortraitsUrl.png',
      nickname: '骆宾王'
    },
    {
      src: 'assets/imgs/testHeadPortraitsUrl.png',
      nickname: '纳兰性德'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const data = this.navParams.data;
    this.type = data.type;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeFansAndConcernPage');
  }

  clickFollowHandler(item) {
    console.log(item);
  }

}
