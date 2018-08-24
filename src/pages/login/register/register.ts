import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginProvider} from "../login.service";
import {BaseUI} from "../../../common/baseUI.common";
import {Storage} from "@ionic/storage";
import {MainPage} from "../../index";
import {Settings} from "../../../providers";
import {LoginPage} from "../login";


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
export class RegisterPage extends BaseUI {
  public passwordType = 'password';

  // 是否同意注册协议
  public isGVRP: boolean;

  // 验证码图片URL
  public verificationGraphURL = 'assets/imgs/testGraphVerification.png';

  // 手机号码
  public phone: number;

  // 密码
  public password: string;

  // 图形验证码
  public GraphVerificationCode: string;

  // 验证码
  public verificationCode: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private storage: Storage,
    private loginProvider: LoginProvider,
    private settings: Settings,
  ) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async doRegister() {
    const loading = super.showLoading(this.loadingController, '注册中...');
    this.loginProvider.register({registered_phone: this.phone, password: this.password}).subscribe(async x => {
      loading.dismiss().then();
      if (x.code === '200') {
        const {access_token, refresh_token, user_info} = x.results;
        this.settings.accessToken = access_token;
        this.settings.refreshToken = refresh_token;
        this.storage.set('accessToken', access_token).then();
        this.storage.set('refreshToken', refresh_token).then();
        this.settings.setValue('userId', user_info.id).then();
        this.settings.setValue('userPhone', user_info.registered_phone).then();
        this.navCtrl.push(MainPage).then();
      }
      else {
        super.showToast(this.toastController, x.message);
      }
    })
  }

// 刷新图片验证码
  refreshGraphVerification() {
    this.loginProvider.getGraphVerification();
  }

// 获取验证码
  getVerification() {
    this.loginProvider.getVerification();
  }

  goLogin() {
    this.navCtrl.push(LoginPage).then();
  }

// 切换密码输入框类型
  switchPasswordInputType() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
