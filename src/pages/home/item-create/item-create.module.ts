import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemCreatePage } from './item-create';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    ItemCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreatePage),
    ComponentsModule
  ],
  exports: [
    ItemCreatePage
  ]
})
export class ItemCreatePageModule { }
