import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BlogForwardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'blog-forward',
  segment: 'forward'
})
@Component({
  selector: 'page-blog-forward',
  templateUrl: 'blog-forward.html',
})
export class BlogForwardPage {
  textContent: string;
  isComment: boolean;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogForwardPage');
  }
  cancel() {
    this.viewCtrl.dismiss();
  }
  done() {
    // this.blogProvider.publish(this.form.value, {type: BLOG_TYPE.long})
    //   .subscribe(data => {
    //     console.log(data)
    //   })
    console.log(this.textContent);
    console.log(this.isComment);
  }
}
