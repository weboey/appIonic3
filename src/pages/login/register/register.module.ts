import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(RegisterPage),
  ],
  exports: [
    RegisterPage
  ],
  entryComponents: [
    RegisterPage,
  ]
})
export class RegisterPageModule {}
