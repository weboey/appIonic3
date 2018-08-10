import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'forget-password-page',
  segment: 'forgetPassword'
})
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {

  // 验证码图片URL
  public verificationGraphURL: string;

  // 手机号码
  public tel: number;

  // 图形验证码
  public GraphVerificationCode: string;

  // 验证码
  public verificationCode: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
  }


  // 刷新图片验证码
  refreshGraphVerification() {

  }

  // 获取验证码
  getVerification() {

  }

}
