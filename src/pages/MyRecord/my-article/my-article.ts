import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Items} from "../../../mocks/providers/items";

/**
 * Generated class for the MyArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'myArticle',
  segment: 'myArticlePage'
})
@Component({
  selector: 'page-my-article',
  templateUrl: 'my-article.html',
})
export class MyArticlePage {

  public currentItems;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private items: Items) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyArticlePage');
    this.currentItems = this.items.query();
  }

}
