import {Component, Input} from '@angular/core';

/**
 * Generated class for the BackBtnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'back-btn',
  templateUrl: 'back-btn.html'
})
export class BackBtnComponent {

  @Input()
  public backBtnText = '返回';


  @Input()
  public iconType = 'ios-arrow-back';

  @Input()
  public textColor = '#aab5bd';

  constructor() {
  }

}
