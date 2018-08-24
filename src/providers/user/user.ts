import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share'
import { Injectable } from '@angular/core';
import {Api} from "..";

@Injectable()
export class UserProvider {
  _user: any;

  userActionUrl: 'http://192.168.1.63:8000/api/v1/first_page/userAction';
  constructor(public api: Api) { }

  /*
  * 用户关注
  * */
  followMe(uid: string) {
    let params = {
      'action_type': '-1',
      'concerned_person_id': uid
    };
    return this.api.post(this.userActionUrl, params)
  }


  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo); // .share()

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  _loggedIn(resp) {
    this._user = resp.user;
  }
}
