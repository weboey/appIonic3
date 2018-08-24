import { Component , Input} from '@angular/core';

/**
 * Generated class for the FwTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components. tabs 组件 , 暂时不能使用
 */
@Component({
  selector: 'fw-tabs',
  templateUrl: 'fw-tabs.html'
})
export class FwTabsComponent {

  _items: any;
  @Input()
  set items(value: any) {
    this._items = value;
  }
  get items(): any {
      return this._items;
  }
  constructor() {
    console.log('Hello FwTabsComponent Component');
  }

}
