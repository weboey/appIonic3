import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';

import {HomeRoot, MessageRoot, UserRoot} from '../';

@IonicPage({
  segment: 'tabs'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomeRoot;
  tab2Root: any = MessageRoot;
  tab3Root: any = UserRoot;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  constructor() {
    this.tab1Title = '首页';
    this.tab2Title = '消息';
    this.tab3Title = '我的';
  }
}
