import { Component } from '@angular/core';

/**
 * Generated class for the MessageActicleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message-acticle',
  templateUrl: 'message-acticle.html'
})
export class MessageActicleComponent {

  text: string;

  constructor() {
    console.log('Hello MessageActicleComponent Component');
    this.text = 'Hello World';
  }

}
