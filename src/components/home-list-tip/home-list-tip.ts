import { Component } from '@angular/core';

/**
 * Generated class for the HomeListTipComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-list-tip',
  templateUrl: 'home-list-tip.html'
})
export class HomeListTipComponent {

  text: string;

  constructor() {
    console.log('Hello HomeListTipComponent Component');
    this.text = 'Hello World';
  }

}
