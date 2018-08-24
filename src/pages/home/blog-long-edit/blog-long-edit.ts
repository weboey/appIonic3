import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BlogProvider } from "../../../providers";
import { Blog } from "../../../models/blog";

@IonicPage({
  name: 'blog-edit-long-page',
  segment: 'blog-edit-l'
})
@Component({
  selector: 'page-blog-long-edit',
  templateUrl: 'blog-long-edit.html',
})
export class BlogLongEditPage {
  form: FormGroup;
  blog: Blog;
  isReadyToSave = true;
  bakInitFormValue: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public blogProvider: BlogProvider,
              formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
    this.blog = new Blog({});
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.compaire(this.bakInitFormValue, this.form.value);
    });
  }
  cancel() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log(this.viewCtrl.data.blogId);
    this.blog.id =  this.viewCtrl.data.blogId;
    this.getCurrentBlog(this.blog.id);
    console.log(this.blog);
    console.error('ionViewDidLoad BlogSortEditPage');
    console.log(this.form.value);
    setTimeout(()=>{
      this.bakInitFormValue = Object.assign({}, this.form.value);
    }, 0)
  }
  getCurrentBlog(id: string) {
    this.blog = (<any>this.blogProvider.getBlogListMock({id}))[0]
  }
  compaire(a, b) {
    console.log('compaire', JSON.stringify(a), JSON.stringify(b));
    return JSON.stringify(a) !== JSON.stringify(b);
  }
}
