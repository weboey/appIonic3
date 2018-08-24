import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {HomeBlogOperateComponent} from './home-blog-operate/home-blog-operate';
import {HomeListFilterComponent} from "./home-list-filter/home-list-filter";
import {HomeListTipComponent} from './home-list-tip/home-list-tip';
import {HomeBlogCommentsComponent} from './home-blog-comments/home-blog-comments';
import {MeaaageTabComponent} from './meaaage-tab/meaaage-tab';
import {BackBtnComponent} from './back-btn/back-btn';
import {MessageContentComponent} from "./message-content/message-content";
import {ImageViewerComponent} from './shared/image-viewer/image-viewer';
import {FwTabsComponent} from './shared/fw-tabs/fw-tabs';
import {FwFollowBtnComponent} from './shared/fw-follow-btn/fw-follow-btn';
import {FwUserListComponent} from './shared/fw-user-list/fw-user-list';
import {HomeBlogListComponent} from './home-blog-list/home-blog-list';
import {FwWritePanelComponent} from './shared/fw-write-panel/fw-write-panel';
import {CommentShowComponent} from './comment-show/comment-show';
import {ArticleAbstractComponent} from './article-abstract/article-abstract';
import {GetPhotoComponent} from './get-photo/get-photo';
import {DraftItemComponent} from './draft-item/draft-item';
import {MessageCommentComponent} from './message-comment/message-comment';
import {MessagePraiseComponent} from './message-praise/message-praise';
import {MessageInformComponent} from './message-inform/message-inform';
import {ArticleEditComponent} from './article-edit/article-edit';
import {PipesModule} from "../pipes/pipes.module";
import {LargerDisplaySlidesComponent} from './larger-display-slides/larger-display-slides';
import { MessageActicleComponent } from './message-acticle/message-acticle';
import { FwRefreshDataComponent } from './shared/fw-refresh-data/fw-refresh-data';
import { FwShowBlogContentComponent } from './shared/fw-show-blog-content/fw-show-blog-content';

@NgModule({
  declarations: [
    HomeListFilterComponent,
    HomeBlogOperateComponent,
    HomeListTipComponent,
    MeaaageTabComponent,
    HomeBlogCommentsComponent,
    BackBtnComponent,
    MessageContentComponent,
    ImageViewerComponent,
    FwFollowBtnComponent,
    FwUserListComponent,
    CommentShowComponent,
    ArticleAbstractComponent,
    GetPhotoComponent,
    DraftItemComponent,
    FwTabsComponent,
    MessageCommentComponent,
    MessagePraiseComponent,
    MessageInformComponent,
    FwWritePanelComponent,
    HomeBlogListComponent,
    ArticleEditComponent,
    LargerDisplaySlidesComponent,
    MessageActicleComponent,
    FwRefreshDataComponent,
    FwShowBlogContentComponent,
  ],
  imports: [
    IonicModule,
    PipesModule
  ],
  exports: [
    HomeListFilterComponent,
    HomeBlogOperateComponent,
    HomeListTipComponent,
    BackBtnComponent,
    HomeBlogCommentsComponent,
    MeaaageTabComponent,
    MessageContentComponent,
    ImageViewerComponent,
    FwFollowBtnComponent,
    FwUserListComponent,
    HomeBlogListComponent,
    CommentShowComponent,
    ArticleAbstractComponent,
    GetPhotoComponent,
    DraftItemComponent,
    FwWritePanelComponent,
    FwTabsComponent,
    MessageCommentComponent,
    MessagePraiseComponent,
    MessageInformComponent,
    ArticleEditComponent,
    LargerDisplaySlidesComponent,
    MessageActicleComponent,
    FwRefreshDataComponent,
    FwShowBlogContentComponent,
  ],
  entryComponents: [
    HomeListFilterComponent,
    HomeBlogOperateComponent,
    HomeListTipComponent,
    BackBtnComponent,
    HomeBlogCommentsComponent,
    MeaaageTabComponent,
    MessageContentComponent,
    ImageViewerComponent,
    FwFollowBtnComponent,
    FwUserListComponent,
    FwWritePanelComponent,
    HomeBlogListComponent,
    FwTabsComponent,
    MessageCommentComponent,
    MessagePraiseComponent,
    MessageInformComponent,
    DraftItemComponent,
    ArticleEditComponent,
    LargerDisplaySlidesComponent,
    FwRefreshDataComponent,
    FwShowBlogContentComponent
  ]
})

export class ComponentsModule {
}
