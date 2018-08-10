import { Component } from '@angular/core';
import { BlogComments } from '../../providers';
/**
 * Generated class for the HomeBlogCommentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components. 博文评论列表组件
 */
@Component({
  selector: 'home-blog-comments',
  templateUrl: 'home-blog-comments.html'
})
export class HomeBlogCommentsComponent {

  commentList = [];
  constructor(private blogComments: BlogComments) {
    console.log('Hello HomeBlogCommentsComponent Component');
    this.commentList = this.blogComments.query();
    console.log(this.commentList );
  }

}
