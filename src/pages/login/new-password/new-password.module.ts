import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NewPasswordPage} from './new-password';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    NewPasswordPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NewPasswordPage),
  ],
  exports: [
    NewPasswordPage
  ],
  entryComponents: [
    NewPasswordPage
  ]
})
export class NewPasswordPageModule {
}
