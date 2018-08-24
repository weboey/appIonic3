import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the MeaaageTabComponent component.
 *消息页面头部tab切换
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'meaaage-tab',
  templateUrl: 'meaaage-tab.html'
})
export class MeaaageTabComponent {
  @Output() messageTabValue = new EventEmitter();
  selectValue: any;
  text: string;
  tabList = [
    {id:'1', name: '聊天'},
    {id:'2', name: '评论'},
    {id:'3', name: '赞'}
  ];

  constructor() {
    this.selectValue = '1';
    this.messageTabValue.emit(this.selectValue);
  }
  segChange(event) {
    this.messageTabValue.emit(this.selectValue);
  }

}
