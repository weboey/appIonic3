import {Component, Input, Output, EventEmitter} from '@angular/core';
import {
  ActionSheetController,
  ModalController,
  NavController,
  Platform,
  ToastController
} from "ionic-angular";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {FilePath} from "@ionic-native/file-path";
import {File} from "@ionic-native/file";
import {BaseUI} from "../../common/baseUI.common";
import {LargerDisplaySlidesComponent} from "../larger-display-slides/larger-display-slides";

declare const cordova: any; //导入第三方的库定义到 TS 项目中

/**
 * Generated class for the GetPhotoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'get-photo',
  templateUrl: 'get-photo.html'
})
export class GetPhotoComponent extends BaseUI {
  _imageList = [];
  @Input()
  set imageList(value: any) {
    this._imageList = value;
    this.imageListChange.emit(value);
  }
  get imageList(): any {
      return this._imageList;
  }
  @Output() imageListChange = new EventEmitter();

  @Output()
  changeImageLIst: EventEmitter<{type, data: Array<string>}> = new EventEmitter();

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private camera: Camera,
    private platform: Platform,
    private filePath: FilePath,
    private file: File,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
  ) {
    super();
  }

  openSheets() {
    let actionSheet = this.actionSheetController.create({
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
          text: '从相册选择',
          icon: 'ios-images-outline',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }
      ]
    });
    actionSheet.present().then();
  }

  getPicture(sourceType) {
    // 定义相机的一些参数
    const options: CameraOptions = {
      quality: 100,
      saveToPhotoAlbum: false, //是否保存拍摄的照片到相册中去
      correctOrientation: true, //是否纠正拍摄的照片的方向
      sourceType,
    };
    this.camera.getPicture(options).then((imagePath) => {
      //特别处理 android 平台的文件路径问题
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
    }, () => {
      super.showToast(this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
    })
  }

  /**
   * 将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用
   * @param namePath
   * @param currentName
   * @param newFileName
   */
  copyFileToLocalDir(namePath, currentName, newFileName): void {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      const nativeURL = this.normalizeURL(success.nativeURL);
      this.imageList.push(nativeURL);
      this.changeImageLIst.emit({type: 'add', data: this.imageList});
    }, () => {
      super.showToast(this.toastCtrl, "存储图片到本地图库出现错误。");
    });
  }

  //为文件生成一个新的文件名
  createFileName() {
    const d = new Date();
    const n = d.getTime();
    return n + ".jpg"; //拼接文件名
  }

  /**
   * 重写本地资源路径
   * @param str
   * @return string
   */
  normalizeURL(str): string {
    return str.replace(/^file:[\\\/]{2}/, '');
  }

  /*
* 删除当前拍照图片
* */
  removeCurImg(item) {
    const image = this.imageList.splice(this.imageList.indexOf(item), 1);
    this.changeImageLIst.emit({type: 'remove', data: image});
  }

  // 大图显示
  largerDisplay(i) {
    this.modalController.create(LargerDisplaySlidesComponent, {item: this.imageList, index: i}).present().then();
  }
}
