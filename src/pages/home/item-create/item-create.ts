import { Component, ViewChild ,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { IonicPage, NavController, ViewController, ActionSheetController, Platform, normalizeURL } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Api } from '../../../providers';
import { BlogProvider } from '../../../providers';
const IMAGE_SIZE = 96;
const QUALITY_SIZE = 100;
declare var cordova: any; //导入第三方的库定义到 TS 项目中
@IonicPage({
  name: 'blog-create-page',
  segment: 'blog-create'
})
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
  userId: string;
  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              formBuilder: FormBuilder,
              public camera: Camera,
              public platform: Platform,
              public filePath: FilePath,
              public transfer: Transfer,
              public blogProvider: BlogProvider,
              public file: File,
              public api:Api,
              private imagePicker: ImagePicker,
              public actionsheetCtrl: ActionSheetController) {
    this.form = formBuilder.group({
      image_url_list: formBuilder.array([]),
      // name: ['', Validators.required],
      content: [''],
    });
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {}
  ionViewDidEnter() {
    this.userId = '888899';
    console.log('ionViewDidEnter 钩子');
    console.log(this.textAreaRef);
    // setTimeout(()=>{this.textAreaRef.nativeElement.focus();},0);
  }
  get formImgList() {
    return this.form.get('image_url_list') as FormArray;
  }
  openSheets() {
    let actionSheet = this.actionsheetCtrl.create({
      buttons: [
        {
          text: '拍摄',
          icon: 'ios-camera',
          role: 'destructive',
          handler: () => {

            this.getPicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: '从相册选择', // ios-images-outline
          icon: 'ios-images-outline',
          handler: () => {
            // this.pickerPicture();
            this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }
      ]
    });
    actionSheet.present();
  }
  getPicture(sourceType) {
    console.log('开始选择图片', sourceType);
    // 定义相机的一些参数
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 96,
      targetHeight: 96,
      sourceType: sourceType,
    };
    if (Camera['installed']()) {
      this.camera.getPicture(options).then((imagePath) => {
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath) //获取 android 平台下的真实路径
            .then(filePath => {
              //获取正确的路径
              let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
              //获取正确的文件名
              let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
              this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            });
        } else {
          //获取正确的路径
          let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          //获取正确的文件名
          let currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
      }, (err) => {
        alert('选择图片出现错误，请检查app是否具有相机权限');
      })
    } else {
      // this.fileInput.nativeElement.click();
      this.imageList.push('data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAlMAAAFkCAYAAAAE1r5gAAAgAElEQVR4nOS96bMkuZEn5nFkvqOOrmafbDbJuXZWGpPZmmlHNl9k+7+v6ZNMWtNodo3LGVLNbpLNvuqud+YRoXAHHHB4OBDIfK+qSQllrzIzAjccjp87HI5md3M9Xl6+gaffP4Pnz5/D5voG+r6HVbeGtm2hb1fQdR00TQPjOMLYAH1vmhGGYYDd9hZub2/h5uYGdrvd9LyDYYoH0Lt00AK0HXRTPphv2/aUHvOm/HsXDwPm104pZJBxXR3Sd9A24Tv+YV5UTx9xmP44rRVfBkyDcXX58nMPY6iTTq9/y3w5tDCKtrjn+JvrvN/vQ904P+wXfo/pSwH7F+NhGs5Dtmnw6XW7dOC0nBePFdeH66Tzkn0v2x3iiOrLuNwnXD+dNjdesg6unUOSPjdG8r0ci1z+Mm6p/6zxS8r32fE8in21T+iv6bswLzDP8G4PZl1lna3yS2lkYLrRaWJe9tgTZctxH3R5bmxafNwMxTroseFnAz3rkjo1XZukYVoNfQdjSmdjq/on0gv+IY3zuLixjGMi');
    }
  }
  //将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.imageList.push(newFileName);
      this.uploadImage(newFileName);
    }, error => {
      alert('存储图片到本地图库出现错误');
    });
  }
  //为文件生成一个新的文件名
  createFileName() {
    const d = new Date();
    const n = d.getTime();
    return n + ".jpg"; //拼接文件名
  }
  //处理图片的路径为可以上传的路径
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return normalizeURL(cordova.file.dataDirectory + img);
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

  uploadImage(img) {
    const url = 'http://192.168.1.63:8000/api/v1/first_page/upImage';
    const targetPath = this.pathForImage(img);
    const filename = this.userId + '.jpg'; //定义上传后的文件名
    //fileTransfer 上传的参数
    const options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: { 'file': filename }
    };
    const fileTransfer: TransferObject = this.transfer.create();
    //开始正式地上传
    fileTransfer.upload(targetPath, url, options).then((data: any) => {
      debugger;
      alert('图片上传成功');
      //在用户看清弹窗提示后进行页面的关闭
      // this.form.patchValue({ 'image_url_list':[data.results.path]});
      if(data.results){
        this.formImgList.push(data.results.path);
      }
    }, err => {
      alert('图片上传发生错误，请重试......');
    });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    console.log(this.form.value);
    this.submit();
    // this.uploadImage();
    // if (!this.form.valid) { return; }
    // this.viewCtrl.dismiss(this.form.value);
  }

  submit() {
    this.blogProvider.publish(this.form.value)
      .subscribe(resp => {
      console.log(resp);
      alert('发布成功');
    }, err=> {
      alert('发布失败'+err);
    });
  }
}
