import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {LoginPage} from './login';
import {RegisterPageModule} from "./register/register.module";
import {ForgetPasswordPageModule} from "./forget-password/forget-password.module";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    ComponentsModule,
    RegisterPageModule,
    ForgetPasswordPageModule,
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    RegisterPageModule,
    ForgetPasswordPageModule,
    LoginPage,
  ],
  entryComponents: [
    LoginPage,
  ]
})
export class LoginPageModule {
}
