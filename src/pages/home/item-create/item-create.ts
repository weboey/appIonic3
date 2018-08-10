import { Component, ViewChild ,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { IonicPage, NavController, ViewController, ActionSheetController } from 'ionic-angular';

const IMAGE_SIZE = 96;
const QUALITY_SIZE = 80;
@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;
  @ViewChild('textAreaRef') textAreaRef: ElementRef;

  isReadyToSave: boolean;
  imageList = [];
  item: any;
  form: FormGroup;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              formBuilder: FormBuilder,
              public camera: Camera,
              private imagePicker: ImagePicker,
              public actionsheetCtrl: ActionSheetController) {
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      about: ['']
    });
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {}
  ionViewDidEnter() {
    console.log('ionViewDidEnter 钩子');
    console.log(this.textAreaRef);
    // setTimeout(()=>{this.textAreaRef.nativeElement.focus();},0);
  }
  openSheets() {
    let actionSheet = this.actionsheetCtrl.create({
      buttons: [
        {
          text: '拍照',
          role: 'destructive',
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: '相册',
          handler: () => {
            this.pickerPicture();
          }
        }
      ]
    });
    actionSheet.present();
  }
  getPicture() {
    console.log('888888');
    debugger;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL, // If it's base64 (DATA_URL):
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        // this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
        this.imageList.push('data:image/jpg;base64,' + data);
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      // this.fileInput.nativeElement.click();
      this.imageList.push('data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAlMAAAFkCAYAAAAE1r5gAAAgAElEQVR4nOS96bMkuZEn5nFkvqOOrmafbDbJuXZWGpPZmmlHNl9k+7+v6ZNMWtNodo3LGVLNbpLNvuqud+YRoXAHHHB4OBDIfK+qSQllrzIzAjccjp87HI5md3M9Xl6+gaffP4Pnz5/D5voG+r6HVbeGtm2hb1fQdR00TQPjOMLYAH1vmhGGYYDd9hZub2/h5uYGdrvd9LyDYYoH0Lt00AK0HXRTPphv2/aUHvOm/HsXDwPm104pZJBxXR3Sd9A24Tv+YV5UTx9xmP44rRVfBkyDcXX58nMPY6iTTq9/y3w5tDCKtrjn+JvrvN/vQ904P+wXfo/pSwH7F+NhGs5Dtmnw6XW7dOC0nBePFdeH66Tzkn0v2x3iiOrLuNwnXD+dNjdesg6unUOSPjdG8r0ci1z+Mm6p/6zxS8r32fE8in21T+iv6bswLzDP8G4PZl1lna3yS2lkYLrRaWJe9tgTZctxH3R5bmxafNwMxTroseFnAz3rkjo1XZukYVoNfQdjSmdjq/on0gv+IY3zuLixjGMi');
    }
  }
  /*
  * 删除当前拍照图片
  * */
  removeCurImg(item) {
    this.imageList.splice(this.imageList.indexOf(item), 1);
  }
  /*
  * 从手机中选择图片
  * */
  pickerPicture() {
    // 设置选项
    const options: ImagePickerOptions = {
      outputType: 1,
      maximumImagesCount: 9 - this.imageList.length,
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      quality: QUALITY_SIZE
    };
    if(ImagePicker['installed']){
      // 获取图片
      this.imagePicker.getPictures(options).then((results) => {
        console.log('Image URI: ' + results);
        this.imageList= this.imageList.concat([...results.map(item => 'data:image/jpg;base64,' + item)]);
      }, (err) => {
        console.log('获取图片失败');
      });
    }
  }
  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle(value) {
    return 'url(' + value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}
