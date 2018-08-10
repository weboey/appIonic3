import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import {ItemListPage} from "./item-list/item-list";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    HomePage,
    ItemListPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule { }
