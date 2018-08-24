import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {ToastController} from 'ionic-angular';

interface ResponseModal {
  // 返回码
  code: string;
  // 返回消息
  message: string;
  // 返回内容
  results: any;
}

/**
 * 后端api rest服务交行的统一接口, 包括错误处理
 */
@Injectable()
export class Api {

  constructor(private httpClient: HttpClient, private toastCtrl: ToastController) {
  }

  /*get请求*/
  public get(url: string, params: any = {}, options = {}, handleResponse?) {
    options = Object.assign({}, {params}, options);
    return this.httpClient.get(url, options)
      .do(this.disposeNoLogin)
      .map(handleResponse ? handleResponse : this.handleResponse.bind(this))
      .catch(this.handleError.bind(this))
  }

  // post请求
  public post(url: string, params: any, options = {}, handleResponse?) {
    return this.httpClient.post(url, params, options)
      .do(this.disposeNoLogin)
      .map(handleResponse ? handleResponse : this.handleResponse.bind(this))
      .catch(this.handleError.bind(this))
  }

  // put请求
  public put(url: string, params: any, options = {}, handleResponse?): Observable<any> {
    return this.httpClient.put(url, params, options)
      .do(this.disposeNoLogin)
      .map(handleResponse ? handleResponse : this.handleResponse.bind(this))
      .catch(this.handleError.bind(this))
  }

  // patch请求
  public patch(url: string, params: any, options = {}, handleResponse?): Observable<any> {
    return this.httpClient.patch(url, params, options)
      .do(this.disposeNoLogin)
      .map(handleResponse ? handleResponse : this.handleResponse.bind(this))
      .catch(this.handleError.bind(this))
  }

  // delete请求
  public delete(url: string, params: any = {}, options = {}, handleResponse?): Observable<any> {
    options = Object.assign({}, {params}, options);
    console.error('delete 请求');
    return this.httpClient.delete(url, options)
      .do(this.disposeNoLogin)
      .map(handleResponse ? handleResponse : this.handleResponse.bind(this))
      .catch(this.handleError.bind(this))
  }

  private disposeNoLogin(): void {

  }

  private handleError(error) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body['error'] || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    this.alertMsg('系统繁忙，请稍后再试！');
    console.error(errMsg);
    return Observable.of(errMsg);
  }

  private handleResponse(resp: ResponseModal) {
    const reg = /^2.*/;
    if (reg.test(resp.code)) {
      return resp.results;
    } else {
      this.alertMsg(resp.message);
      return {};
    }
  }

  private alertMsg(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });
    toast.present().then();
  }
}
