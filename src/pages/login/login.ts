import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, ToastController} from 'ionic-angular';
import {UserProvider} from '../../providers';
import {MainPage} from '../index';
import {BaseUI} from "../../common/baseUI.common";
import {ForgetPasswordPage} from "./forget-password/forget-password";
import {RegisterPage} from "./register/register";

@IonicPage({
  name: 'login-page',
  segment: 'login',
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage extends BaseUI {


  // 输入错误次数
  private inputErrorCount = 5;

  public account: { tel: string, password: string } = {
    tel: null,
    password: null
  };

  // 密码输入Input-type
  public passwordType = 'password';

  constructor(private navController: NavController,
              private user: UserProvider,
              private toastCtrl: ToastController,
              private loadingController: LoadingController,
              private alertController: AlertController) {
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
      this.inputErrorCount--;
      if (this.inputErrorCount > 2) {
        super.showToast(this.toastCtrl, '登录失败');
      } else {
        this.tipLoginPasswordError();
      }
    });
  }

  goRegister() {
    this.navController.push(RegisterPage).then();
  }

  goForgetPassword() {
    this.navController.push(ForgetPasswordPage).then()
  }

  dismiss() {
  }

  // 切换密码输入框类型
  switchPasswordInputType() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  // 提示登录密码错误
  tipLoginPasswordError() {
    super.showAlert(this.alertController, null, {
      message: `账户或密码错误，您还可输入${this.inputErrorCount}次，建议您找回密码`,
      buttons: [
        {
          text: '取消',
        },
        {
          text: '找回密码',
          handler: () => {
            this.navController.push(ForgetPasswordPage).then()
          }
        }
      ]
    })
  }

}
