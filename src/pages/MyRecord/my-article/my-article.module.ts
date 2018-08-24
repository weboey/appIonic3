import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MyArticlePage} from './my-article';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    MyArticlePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MyArticlePage),
  ],
  exports: [
    MyArticlePage,
  ],
  entryComponents: [
    MyArticlePage,
  ]
})
export class MyArticlePageModule {
}
