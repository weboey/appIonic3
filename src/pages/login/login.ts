import {Component} from '@angular/core';
import {App, IonicPage, LoadingController, NavController, ToastController} from 'ionic-angular';
import {User} from '../../providers';
import {MainPage} from '../index';
import {BaseUI} from "../../common/baseUI.common";

@IonicPage({
  name: 'login-page',
  segment: 'login',
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage extends BaseUI {

  public account: { tel: string, password: string } = {
    tel: null,
    password: null
  };

  // 密码输入Input-type
  public passwordType = 'password';

  constructor(private navController: NavController,
              private user: User,
              private toastCtrl: ToastController,
              private loadingController: LoadingController,
              private app: App) {
    super();
  }

  doLogin() {
    const loading = super.showLoading(this.loadingController, '登录中...');
    this.user.login(this.account).subscribe(() => {
      loading.dismiss().then();
      this.navController.push(MainPage).then();
      super.showToast(this.toastCtrl, '登录成功');
    }, () => {
      loading.dismiss().then();
      super.showToast(this.toastCtrl, '登录失败');
    });
  }

  goRegister() {
    this.app.getRootNavs()[0].push('register-page').then();
  }

  goForgetPassword() {
    this.app.getRootNavs()[0].push('forget-password-page').then()
  }

  dismiss() {
  }

  // 切换密码输入框类型
  switchPasswordInputType() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
