import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {HomeListEditComponent} from './home-list-edit/home-list-edit';
import {HomeListFilterComponent} from "./home-list-filter/home-list-filter";
import {HomeListTipComponent} from './home-list-tip/home-list-tip';
import {HomeBlogCommentsComponent} from './home-blog-comments/home-blog-comments';
import {MeaaageTabComponent} from './meaaage-tab/meaaage-tab';
import {BackBtnComponent} from './back-btn/back-btn';
import {MessageContentComponent} from "./message-content/message-content";

@NgModule({
  declarations: [
    HomeListFilterComponent,
    HomeListEditComponent,
    HomeListTipComponent,
    HomeBlogCommentsComponent,
    MeaaageTabComponent,
    HomeBlogCommentsComponent,
    BackBtnComponent,
    MessageContentComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    HomeListFilterComponent,
    HomeListEditComponent,
    HomeListTipComponent,
    HomeBlogCommentsComponent,
    MeaaageTabComponent,
    HomeBlogCommentsComponent,
    BackBtnComponent,
    HomeBlogCommentsComponent,
    MeaaageTabComponent,
    MessageContentComponent
  ],
  entryComponents: [
    HomeListFilterComponent,
    HomeListEditComponent,
    HomeListTipComponent,
    HomeBlogCommentsComponent,
    MeaaageTabComponent,
    HomeBlogCommentsComponent,
    BackBtnComponent,
    HomeBlogCommentsComponent,
    MeaaageTabComponent,
    MessageContentComponent
  ]
})
export class ComponentsModule {
}
