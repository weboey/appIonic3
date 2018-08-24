import { Component, Input } from '@angular/core';

/**
 * Generated class for the FwUserListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components. 显示用户列表组件, eg: 点赞用户列表
 */
@Component({
  selector: 'fw-user-list',
  templateUrl: 'fw-user-list.html'
})
export class FwUserListComponent {

  _items: any;
  @Input()
  set items(value: any) {
    this._items = value;
  }
  get items(): any {
    return this._items;
  }
  constructor() {
    console.log('Hello FwUserListComponent Component');
  }

}
