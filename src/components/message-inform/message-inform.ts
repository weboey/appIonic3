import { Component } from '@angular/core';
import {App} from 'ionic-angular';

/**
 * Generated class for the MessageInformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message-inform',
  templateUrl: 'message-inform.html'
})
export class MessageInformComponent {
  public informData = [1,2];

  constructor(
    public app: App
  ) {

  }
  // 进入通知详情页面
  goInformPage (item) {
    this.app.getRootNav().push('inform-detail', {items: item});
  }

}
