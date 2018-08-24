import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the FwShowBlogContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
const MAX_WORD_COUNT = 140;
@Component({
  selector: 'fw-show-blog-content',
  templateUrl: 'fw-show-blog-content.html'
})
export class FwShowBlogContentComponent implements OnInit{

  isMaxWord = false;
  @Input() showAll = false;
  @Input() title : string;
  _content: string;
  @Input()
  set content(value: any) {
    if(this.title != null) {
      value = `【${this.title}】` + value;
    }
    if(!this.showAll && value.length > MAX_WORD_COUNT){
      this.isMaxWord = true;
      this._content = value.substr(0,MAX_WORD_COUNT);
    }else{
      this.isMaxWord = false;
      this._content = value
    }
  }
  get content(): any {
    return this._content;
  }

  ngOnInit(): void {


  }

  ionViewDidLoad() {
    console.error('组件没有 ionViewDidLoad......')
  }
  constructor() {

  }

}
