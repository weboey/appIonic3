import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FeedbackPage} from './feedback';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    FeedbackPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FeedbackPage),
  ],
})
export class FeedbackPageModule {
}
