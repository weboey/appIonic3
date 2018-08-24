import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MyCommentRecordPage} from './my-comment-record';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    MyCommentRecordPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MyCommentRecordPage),
  ],
  exports: [
    MyCommentRecordPage,
  ],
  entryComponents: [
    MyCommentRecordPage,
  ]
})
export class MyCommentRecordPageModule {
}
