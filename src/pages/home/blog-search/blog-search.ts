import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Items, Settings} from "../../../providers";
import { BlogProvider, BLOG_TYPE} from '../../../providers';
import { BaseUI} from "../../../common/baseUI.common";
@IonicPage()
@Component({
  selector: 'page-blog-search',
  templateUrl: 'blog-search.html',
})
export class BlogSearchPage extends BaseUI{
  displayHistory = [];
  _searchHistory = [];
  set searchHistory(value: any) {
    this._searchHistory = value;
    this.displayHistory = value;
  }
  get searchHistory(): any {
    return this._searchHistory;
  }
  blogList = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public items: Items,
              public settings:Settings,
              public loadingCtrl: LoadingController,
              public viewCtrl: ViewController,
              public blogProvider: BlogProvider) {
    super();
  }
  @ViewChild('searchRef') searchRef: any;
  ionViewDidEnter() {
    console.log('ionViewDidLoad BlogSearchPage');
    setTimeout(()=>{this.searchRef.setFocus();},0);
    this.settings.getValue('blogSearchHistoryList').then(v=>{
      if(v==null){
        this.searchHistory = [];
      }else{
        this.searchHistory = v;
      }
    });
  }
  onInput(val) {
    console.log(val);
    if (val=='') {
      this.blogList = [];
    }
    this.highLightText(val);
  }
  private highLightText(val) {
    let reg = new RegExp(val, 'gi');
    this.displayHistory = this.searchHistory.map(item => {
      return item.replace(reg, (str)=>{
        return '<span class="high-light-text">' + str + '</span>'
      })
    })
  }
  close() {
    this.viewCtrl.dismiss();
  }

  onSearchKeyUp(event, searchVal) {
    if("Enter"==event.key){
      console.log('开始搜索');
      this.loadData(searchVal);
      this.searchHistory.unshift(searchVal);
      this.searchHistory = this.searchHistory.slice(0);
      this.settings.setValue('blogSearchHistoryList', this.searchHistory)
    }
  }
  loadData(searchStr: string = '', refreshRef?: any){
    // let loading = super.showLoading(this.loadingCtrl, "加载中...");
    this.blogList = this.items.query();
    setTimeout(()=>{
      this.blogProvider.getBlogList({key_words: searchStr}).subscribe(data => {
        console.log('搜索结果');
        if(refreshRef && refreshRef.complete) {
          this.blogList = this.blogList.concat(this.blogList);
          refreshRef.complete()
        }
      });
    }, 1000)
  }
  trashLocalHistory() {
    this.searchHistory = [];
  }

  doRefresh(refresher) {
    this.loadData(this.searchHistory.shift(), refresher);
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.loadData(this.searchHistory.shift(), infiniteScroll);
  }

  isShowSearchHistory() {
    return !this.blogList.length || !this.searchRef.value.length
  }

}
