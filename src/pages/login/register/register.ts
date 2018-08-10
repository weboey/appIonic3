import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'register-page',
  segment: 'register'
})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public passwordType = 'password';

  // 验证码图片URL
  public verificationGraphURL: string;

  // 手机号码
  public tel: number;

  // 密码
  public password: string;

  // 图形验证码
  public GraphVerificationCode: string;

  // 验证码
  public verificationCode: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doRegister() {

  }

  // 刷新图片验证码
  refreshGraphVerification() {

  }

  // 获取验证码
  getVerification() {

  }

  // 切换密码输入框类型
  switchPasswordInputType() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

}
