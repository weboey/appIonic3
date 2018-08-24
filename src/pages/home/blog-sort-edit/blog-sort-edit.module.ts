import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogSortEditPage } from './blog-sort-edit';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    BlogSortEditPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BlogSortEditPage),
  ],
})
export class BlogSortEditPageModule {}
