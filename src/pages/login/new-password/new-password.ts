import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BaseUI} from "../../../common/baseUI.common";
import {MainPage} from "../../index";

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
export class NewPasswordPage extends BaseUI {
  public passwordType = 'password';

  // 新密码
  newPassword: string;

  // 确认密码
  confirmPassword: string;

  constructor(public navController: NavController, public navParams: NavParams) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPasswordPage');
  }

  // 切换密码输入框类型
  switchPasswordInputType() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  // 修改密码
  changePassword() {
    this.navController.push(MainPage).then();
  }
}
