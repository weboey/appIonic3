import { Component ,ViewChild } from '@angular/core';
import { TextInput, ViewController } from 'ionic-angular'
/**
 * Generated class for the FwWritePanelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components. 输入文字面板组件
 */
@Component({
  selector: 'fw-write-panel',
  templateUrl: 'fw-write-panel.html'
})
export class FwWritePanelComponent {
  textContent: string = '';
  maxWordCount = 140;
  @ViewChild('textAreaRef') textAreaRef: TextInput ;
  constructor(
    public viewCtrl: ViewController,
  ) {
    console.log('Hello FwWritePanelComponent Component');
  }
  ionViewDidEnter() {
    setTimeout(()=>{this.textAreaRef.setFocus();},0);
  }
  send(ev) {
    ev.stopPropagation();
    console.log(this.textContent);
    this.viewCtrl.dismiss({content: this.textContent});
  }

  validMaxWord(ev) {

  }
}
