import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { BlogProvider, BLOG_TYPE} from '../../../providers';
/**
 * Generated class for the BlogCreateLongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'blog-create-long-page',
    segment: 'blog-create-long'
  })
@Component({
  selector: 'page-blog-create-long',
  templateUrl: 'blog-create-long.html',
})
export class BlogCreateLongPage {
  form: FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public blogProvider: BlogProvider,
              public viewCtrl: ViewController,
              formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: [''],
      // name: ['', Validators.required],
      content: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogCreateLongPage');
  }
  cancel() {
    this.viewCtrl.dismiss();
  }
  done() {
    console.log(this.form.value);
    this.blogProvider.publish(this.form.value, {type: BLOG_TYPE.long})
      .subscribe(data => {
        console.log(data)
      })
  }
}
