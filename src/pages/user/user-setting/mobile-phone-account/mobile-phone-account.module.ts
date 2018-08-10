import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobilePhoneAccountPage } from './mobile-phone-account';

@NgModule({
  declarations: [
    MobilePhoneAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(MobilePhoneAccountPage),
  ],
})
export class MobilePhoneAccountPageModule {}
