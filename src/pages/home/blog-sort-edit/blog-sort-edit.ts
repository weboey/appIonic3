import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Blog } from '../../../models/blog';
import { BlogProvider, BLOG_TYPE} from '../../../providers';
@IonicPage({
  name: 'blog-edit-page',
  segment: 'blog-edit'
})
@Component({
  selector: 'page-blog-sort-edit',
  templateUrl: 'blog-sort-edit.html',
})
export class BlogSortEditPage {
  form: FormGroup;
  blog: Blog;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public blogProvider: BlogProvider,
              formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      image_url_list: formBuilder.array([]),
      // name: ['', Validators.required],
      content: [''],
    });
    this.blog = new Blog({})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogSortEditPage');
    console.log(this.viewCtrl.data.blogId);
    this.blog.id =  this.viewCtrl.data.blogId;
    this.getCurrentBlog(this.blog.id);
     console.log(this.blog);

  }

  getCurrentBlog(id: string) {
    this.blog = (<any>this.blogProvider.getBlogListMock({id}))[0]
  }
  cancel() {
    this.viewCtrl.dismiss();
  }
  done() {
    console.log(this.form.value);
    // this.blogProvider.publish(this.form.value, {type: BLOG_TYPE.long})
    //   .subscribe(data => {
    //     console.log(data)
    //   })
  }
}
