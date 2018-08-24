import {Component} from '@angular/core';
import {AlertController, ViewController, ToastController, ModalController} from 'ionic-angular';
import {BaseUI} from "../../common/baseUI.common";
import {BlogProvider, BLOG_TYPE} from "../../providers";
enum eOptionStatus {
  Self = 1,
  AlreadyFollow = 2,
  UnFollow = 3
}

@Component({
  selector: 'home-blog-operate',
  templateUrl: 'home-blog-operate.html'
})
export class HomeBlogOperateComponent extends BaseUI {

  type = eOptionStatus.UnFollow;
  blog : any;

  constructor(public alertCtrl: AlertController,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public toastCtrl: ToastController,
              public blogProvider: BlogProvider) {
    super();
    console.log('Hello HomeListEditComponent Component');
    console.log(this);
    console.log(this.viewCtrl);
    this.type = this.viewCtrl.data.type;
    this.blog = this.viewCtrl.data.blog;
  }

  remove() {
    this.showConfirm();
  }
  deleteBlog(){
    this.blogProvider.deleteBlogById({id: this.blog.id}).subscribe(resp => {
      // this.showToast(this.toastCtrl, '已删除');
      this.viewCtrl.dismiss();
    })
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '确定删除这条微博?',
      message: '',
      buttons: [
        {
          text: '取消',
          handler: () => {console.log('取消');}
        },
        {
          text: '确定',
          handler: () => {this.deleteBlog();}
        }
      ]
    });
    confirm.present();
  }

  // 收藏
  collection() {
    this.blogProvider.blogCollection(this.blog.id).subscribe((resp: any) => {
      console.log(resp);
      this.showToast(this.toastCtrl, '已收藏');
      this.viewCtrl.dismiss();
    })
  }

  // 举报
  report() {
    this.blogProvider.blogReport({id: this.blog.id}).subscribe(()=>{
      this.showToast(this.toastCtrl, '已举报');
      this.viewCtrl.dismiss();
    });
  }
  //编辑
  edit() {
    if(this.blog.type == BLOG_TYPE.sort){
      console.log('短文编辑');
      this.openModal('blog-edit-page', {blogId: this.blog.id});
    } else if(this.blog.type == BLOG_TYPE.long) {
      console.log('长文编辑');
      this.openModal('blog-edit-long-page', {blogId: this.blog.id});
    }
  }
  // 发布断文
  createBlog() {
    this.openModal('blog-create-page', null);
  }
  // 发布长文
  createBlogOfLong() {
    this.openModal('blog-create-long-page', null);
  }

  private openModal(page: string, data) {
    let addModal = this.modalCtrl.create(page, data);
    addModal.onDidDismiss(item => {
      if (item) {
        console.error(item)
      }
    });
    addModal.present().then(() => {
      this.viewCtrl.dismiss();
    });
  }
}
