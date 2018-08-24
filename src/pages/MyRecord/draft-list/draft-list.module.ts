import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DraftListPage } from './draft-list';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    DraftListPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DraftListPage),
  ],
  exports: [
    DraftListPage,
  ],
  entryComponents: [
    DraftListPage
  ]
})
export class DraftListPageModule {}
