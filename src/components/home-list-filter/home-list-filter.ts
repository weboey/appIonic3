import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'home-list-filter',
  templateUrl: 'home-list-filter.html'
})
export class HomeListFilterComponent {
  selectedFilter: any;
  text: string;

  @Output()
  blogFilterTabChange: EventEmitter<any> = new EventEmitter<any>();
  items = [
    {'id': 1, 'title': '关注'},
    {'id': 2, 'title': '推荐'},
    {'id': 3, 'title': '最热'}
  ];
  constructor() {
    console.log('Hello ItemFilterComponent Component');
    this.text = 'Hello World';
    this.selectedFilter = '1';
    console.log(this);
  }
  segmentChanged(ev){
    console.log(ev);
    console.log(this.selectedFilter);
    this.blogFilterTabChange.emit(this.selectedFilter);
  }
}
