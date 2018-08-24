import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {LoginPage} from './login';
import {RegisterPageModule} from "./register/register.module";
import {ForgetPasswordPageModule} from "./forget-password/forget-password.module";
import {ComponentsModule} from "../../components/components.module";
import {LoginProvider} from "./login.service";
import {NewPasswordPageModule} from "./new-password/new-password.module";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    ComponentsModule,
    RegisterPageModule,
    ForgetPasswordPageModule,
    NewPasswordPageModule,
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    RegisterPageModule,
    ForgetPasswordPageModule,
    NewPasswordPageModule,
    LoginPage,
  ],
  entryComponents: [
    LoginPage,
  ],
  providers: [
    LoginProvider,
  ]
})
export class LoginPageModule {
}
