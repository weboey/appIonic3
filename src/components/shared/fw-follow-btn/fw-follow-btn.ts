import { Component, Input, Output, EventEmitter } from '@angular/core';
import {UserProvider} from "../../../providers";
import {Settings} from "../../../providers";

/**
 * Generated class for the FwFollowBtnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components. 关注按钮
 */
@Component({
  selector: 'fw-follow-btn',
  templateUrl: 'fw-follow-btn.html'
})
export class FwFollowBtnComponent {

  @Input() show = true;
  _uid: string;
  @Input()
  set uid(value: string) {
    if(!!value) {
      this._uid = value;
      this.isSelf();
    }
  }
  get uid(): string {
      return this._uid;
  }
  @Output()
  followHandler: EventEmitter<any> = new EventEmitter<any>();
  constructor(private userProvider: UserProvider,
              private settings: Settings) {}

  doFollowMe(ev){
    ev.stopPropagation();
    if (!this.uid) {
      console.error('uid is null');
    }else {
      this.userProvider.followMe(this.uid)
    }
  }

  isSelf() {
    this.settings.getValue('userId').then(result => {
      this.show = result != this.uid
    })
  }
}
