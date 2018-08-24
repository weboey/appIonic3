import {Injectable} from '@angular/core';
import {Api} from '../api/api';

@Injectable()
export class MessageServer {
  mesHttp = 'http://192.168.1.63:8000/api/v1/first_page/thumb_list';
  constructor(
    private api: Api
  ) {}
  // 消息点赞
  getZanData () {
    return this.api.get(this.mesHttp, {});
  }
}
