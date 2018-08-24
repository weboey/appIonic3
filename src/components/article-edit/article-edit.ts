import {Component, Input} from '@angular/core';
import {ViewController} from "ionic-angular";

/**
 * Generated class for the ArticleEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'article-edit',
  templateUrl: 'article-edit.html'
})
export class ArticleEditComponent {
  constructor(private viewController: ViewController) {
  }

  // 跳转到文章编辑页面
  editOperation() {
    this.viewController.dismiss({type: 'edit'}).then();
  }

  deleteOperation() {
    this.viewController.dismiss({type: 'delete'}).then();
  }
}
