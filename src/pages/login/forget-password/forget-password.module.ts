import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ForgetPasswordPage} from './forget-password';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    ForgetPasswordPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ForgetPasswordPage),
  ],
  exports: [
    ForgetPasswordPage,
  ],
  entryComponents: [
    ForgetPasswordPage,
  ]
})
export class ForgetPasswordPageModule {
}
