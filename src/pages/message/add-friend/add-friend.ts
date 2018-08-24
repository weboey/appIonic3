import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'add-friend'
})
@Component({
  selector: 'page-add-friend',
  templateUrl: 'add-friend.html',
})
export class AddFriendPage {
  public searchName;
  // 好友列表
  public addList = [
    {name: '1', img: 'p', state: '12'},
    {name: '2', img: 'gh', state: '32'},
    {name: '3', img: 'u', state: '62'}
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {

  }
  onInput(event) {
    console.log(event);
  }
  onSearchKeyUp(event) {
    if("Enter"==event.key){
      //function
      console.log('开始搜索');
    }
  }
  close() {
    // this.viewCtrl.dismiss();
    this.searchName = '';
  }
  goFocus (x) {}

}
