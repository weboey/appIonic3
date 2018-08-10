import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  items = [];

  constructor(
    private nacCrl: NavController,
    public modalCtrl: ModalController
    ) {

    this.items = [
      {
        'title': '用户主页',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': '我的',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#aee649'
      },
      {
        'title': '设置',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#54e666'
      },
      {
        'title': '文章',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#e685ca'
      },
      {
        'title': '关注',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#30e69d'
      },
      {
        'title': '粉丝',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#4185e6'
      },
      {
        'title': '好友',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#644ae6'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  goLogin() {
    this.nacCrl.push(LoginPage).then();
  }
  presentModal() {
    this.nacCrl.push('UserSetting', null);
  }
}
