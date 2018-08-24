import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

/*
  Generated class for the HttpRequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpRequestProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello HttpRequestProvider Provider');
  }

  /*get请求*/
  public get(url: string, params: any = {}, options = {}): Observable<ResponseModal> {
    options = Object.assign({}, {params}, options);
    return this.httpClient.get(url, options).do(this.disposeNoLogin).catch(this.handleError);
  }

  // post请求
  public post(url: string, params: any, options = {}): Observable<ResponseModal> {
    return this.httpClient.post(url, params, options).do(this.disposeNoLogin).catch(this.handleError);
  }

  // put请求
  public put(url: string, params: any, options = {}): Observable<ResponseModal> {
    return this.httpClient.put(url, params, options).do(this.disposeNoLogin).catch(this.handleError);
  }

  // patch请求
  public patch(url: string, params: any, options = {}): Observable<ResponseModal> {
    return this.httpClient.patch(url, params, options).do(this.disposeNoLogin).catch(this.handleError);
  }

  // delete请求
  public delete(url: string, params: any = {}, options = {}): Observable<ResponseModal> {
    options = Object.assign({}, {params}, options);
    return this.httpClient.delete(url, options).do(this.disposeNoLogin).catch(this.handleError);
  }

  private disposeNoLogin(): void {
  }

  private handleError(error) {
    return Observable.throw(error);
  }

}

interface ResponseModal {
  // 返回码
  code: string;

  // 返回消息
  message: string;

  // 返回内容
  results: any;
}
