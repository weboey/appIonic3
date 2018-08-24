import {Component, Input} from '@angular/core';

/**
 * Generated class for the CommentShowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'comment-show',
  templateUrl: 'comment-show.html'
})
export class CommentShowComponent {

  currentItems: any[];

  @Input()
  set items(value: any) {
    this.currentItems = value;
  }

  get items(): any {
    return this.currentItems;
  }

  text: string;

  constructor() {
    console.log('Hello CommentShowComponent Component');
    this.text = 'Hello World';
  }
}

interface commentDataModal {
  userAvatar: string;
  userName: string;
  update: string;
  commentContent: string;
  article: commentArticleDataModal;
}

interface commentArticleDataModal {
  thumbnail: string;
  title: string;
  abstract: string;
  comment: {
    userName: string;
    userAvatar: string;
    userId: string;
  }
}
