import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../models/item";
import {AlertController, ModalController, PopoverController} from "ionic-angular";
import {ArticleEditComponent} from "../article-edit/article-edit";
import {BaseUI} from "../../common/baseUI.common";
import {ForgetPasswordPage} from "../../pages/login/forget-password/forget-password";

/**
 * Generated class for the DraftItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'draft-item',
  templateUrl: 'draft-item.html'
})
export class DraftItemComponent extends BaseUI{

  currentItems: Item[];

  @Output()
  private removeArticleOperation: EventEmitter<{id: number}> = new EventEmitter();

  @Input()
  set items(value: any) {
    this.currentItems = value;
  }

  get items(): any {
    return this.currentItems;
  }

  constructor(
    private popoverController: PopoverController,
    private modalController: ModalController,
    private alertController: AlertController,
    ) {
    super();
  }

  editArticle(event, id) {
    const popover = this.popoverController.create(ArticleEditComponent, {id});
    popover.present({
      animate: true,
      ev: event
    }).then();
    popover.onDidDismiss((data: { type: 'edit' | 'delete' }) => {
      if (data && data.type === 'edit') {
        this.goArticleEditPage(id);
      } else if (data && data.type === 'delete') {
        this.deleteArticle(id);
      }
    })
  }


  goArticleEditPage(id) {
    super.showModal(this.modalController, 'blog-edit-page', {blogId: id})
  }

  deleteArticle(id) {
    super.showAlert(this.alertController, '是否确认删除?', {
      buttons: [
        {
          text: '确定',
          handler: () => {
            this.removeArticleOperation.emit({id});
          }
        },
        {
          text: '取消',
        }
      ]
    });
  }
}
