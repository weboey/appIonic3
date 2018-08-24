import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MyCollectRecordPage} from './my-collect-record';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    MyCollectRecordPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MyCollectRecordPage),
  ],
  exports: [
    MyCollectRecordPage,
  ],
  entryComponents: [
    MyCollectRecordPage,
  ]
})
export class MyCollectRecordPageModule {
}
