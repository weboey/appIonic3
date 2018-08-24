import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MyStarRecordPage} from './my-star-record';
import {ComponentsModule} from "../../../components/components.module";
import {MyArticlePageModule} from "../my-article/my-article.module";
import {MyCollectRecordPageModule} from "../my-collect-record/my-collect-record.module";
import {MyCommentRecordPageModule} from "../my-comment-record/my-comment-record.module";
import {MyFansAndConcernPageModule} from "../my-fans-and-concern/my-fans-and-concern.module";
import {DraftListPageModule} from "../draft-list/draft-list.module";

@NgModule({
  declarations: [
    MyStarRecordPage,
  ],
  imports: [
    ComponentsModule,
    MyArticlePageModule,
    MyCollectRecordPageModule,
    MyCommentRecordPageModule,
    MyFansAndConcernPageModule,
    DraftListPageModule,
    IonicPageModule.forChild(MyStarRecordPage),
  ],
  exports: [
    MyStarRecordPage,
    MyArticlePageModule,
    MyCollectRecordPageModule,
    MyCommentRecordPageModule,
    MyFansAndConcernPageModule,
    DraftListPageModule,
  ],
  entryComponents: [
    MyStarRecordPage,
  ]
})
export class MyStarRecordPageModule {
}
