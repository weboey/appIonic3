import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'home-list-edit',
  templateUrl: 'home-list-edit.html'
})
export class HomeListEditComponent {

  text: string;

  constructor(public alertCtrl: AlertController) {
    console.log('Hello HomeListEditComponent Component');
    this.text = 'Hello World';
  }
  delete() {
    console.log('remove');
    this.showConfirm();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '确定删除这条微博?',
      message: '',
      buttons: [
        {
          text: '确定',
          handler: () => {
            console.log('确定');
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('取消');
          }
        }
      ]
    });
    confirm.present();
  }
}
