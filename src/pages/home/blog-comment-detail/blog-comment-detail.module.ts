import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogCommentDetailPage } from './blog-comment-detail';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    BlogCommentDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BlogCommentDetailPage),
  ],
})
export class BlogCommentDetailPageModule {}
