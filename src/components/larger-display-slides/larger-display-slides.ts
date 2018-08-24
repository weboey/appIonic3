import {Component, Input} from '@angular/core';
import {ViewController} from "ionic-angular";

/**
 * Generated class for the LargerDisplaySlidesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'larger-display-slides',
  templateUrl: 'larger-display-slides.html'
})
export class LargerDisplaySlidesComponent {

  imageList: Array<string> = [];

  currentIndex: number;

  constructor(public viewCtrl: ViewController) {
    this.imageList = this.viewCtrl.data.item;
    this.currentIndex = this.viewCtrl.data.index;
  }

}
