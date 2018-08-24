import {Component} from '@angular/core';

/**
 * Generated class for the ArticleAbstractComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'article-abstract',
  templateUrl: 'article-abstract.html'
})
export class ArticleAbstractComponent {

  text: string;

  constructor() {
    console.log('Hello ArticleAbstractComponent Component');
    this.text = 'Hello World';
  }

  goArticlePage() {

  }
}
