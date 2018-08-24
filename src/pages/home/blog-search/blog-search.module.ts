import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogSearchPage } from './blog-search';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    BlogSearchPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BlogSearchPage),
  ],
})
export class BlogSearchPageModule {}
