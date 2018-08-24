import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogCommentThumbsDetailPage } from './blog-comment-thumbs-detail';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    BlogCommentThumbsDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BlogCommentThumbsDetailPage),
  ],
})
export class BlogCommentThumbsDetailPageModule {}
