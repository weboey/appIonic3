import {Injectable} from '@angular/core';
import {HttpRequestProvider} from "../../providers/http-request/http-request";

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  private url = 'http://192.168.1.133:9999';

  constructor(private api: HttpRequestProvider) {
  }

  // 注册
  register(param, options = {}) {
    return this.api.post(this.url + '/auth/register', param, options)
  }

  // 登录
  login(param) {
  }

  // 获取图片验证码
  getGraphVerification() {
  }

  // 获取验证码
  getVerification() {
  }

  // 修改密码
  modifiedPasssword() {

  }
}
