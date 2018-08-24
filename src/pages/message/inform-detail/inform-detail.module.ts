import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformDetailPage } from './inform-detail';

@NgModule({
  declarations: [
    InformDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InformDetailPage),
  ],
})
export class InformDetailPageModule {}
