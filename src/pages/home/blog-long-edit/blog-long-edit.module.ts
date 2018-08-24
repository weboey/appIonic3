import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogLongEditPage } from './blog-long-edit';

@NgModule({
  declarations: [
    BlogLongEditPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogLongEditPage),
  ],
})
export class BlogLongEditPageModule {}
