import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the NewPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'new-password-page',
  segment: 'newPassword',
})
@Component({
  selector: 'page-new-password',
  templateUrl: 'new-password.html',
})
export class NewPasswordPage {
  public passwordType = 'password';

  // 新密码
  newPassword: string;

  // 确认密码
  confirmPassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPasswordPage');
  }

  // 切换密码输入框类型
  switchPasswordInputType() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

}
