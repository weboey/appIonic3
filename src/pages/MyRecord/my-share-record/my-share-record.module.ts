import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyShareRecordPage } from './my-share-record';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    MyShareRecordPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MyShareRecordPage),
  ],
})
export class MyShareRecordPageModule {}
