import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterSettingPage } from './character-setting';

@NgModule({
  declarations: [
    CharacterSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterSettingPage),
  ],
})
export class CharacterSettingPageModule {}
