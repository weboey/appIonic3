import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the FwRefreshDataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components. 数据加载组件：上拉刷新 and 下拉刷新
 */
@Component({
  selector: 'fw-refresh-data',
  templateUrl: 'fw-refresh-data.html'
})
export class FwRefreshDataComponent {
  @Output()
  ionRefresh: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  ionInfinite: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  doRefresh(refresher) {
    console.log('加载数据1');
    // setTimeout(() => {refresher.complete();}, 2500);
    this.ionRefresh.emit(refresher);
  }
  doInfinite(infiniteScroll) {
    console.log('加载数据2');
    // setTimeout(() => {infiniteScroll.complete();}, 2500);
    this.ionInfinite.emit(infiniteScroll);
  }
}
