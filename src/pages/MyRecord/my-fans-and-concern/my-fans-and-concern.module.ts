import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFansAndConcernPage } from './my-fans-and-concern';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    MyFansAndConcernPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MyFansAndConcernPage),
  ],
  exports: [
    MyFansAndConcernPage,
  ],
  entryComponents: [
    MyFansAndConcernPage,
  ]
})
export class MyFansAndConcernPageModule {}
