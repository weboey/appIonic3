import { Component } from '@angular/core';
import {
  ActionSheetController,
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  Platform,
  normalizeURL,
  ToastController
} from 'ionic-angular';
import {Item} from "../../../../models/item";
import {Items} from "../../../../providers";
import {File} from "@ionic-native/file"
import {Transfer, TransferObject} from "@ionic-native/transfer";
import {FilePath} from "@ionic-native/file-path";
import {Camera} from "@ionic-native/camera";
import {BaseUI} from "../../../../common/baseUI.common";
declare var cordova: any;
/**
 * Generated class for the CharacterSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'CharacterSetting'
  }
)
@Component({
  selector: 'page-character-setting',
  templateUrl: 'character-setting.html',
})
export class CharacterSettingPage extends BaseUI {
  currentItems: Item[];
  lastImage: string = null;
  imageUrl = '../../../../assets/icon/favicon.ico';
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public items: Items,
              public actionSheetCtrl: ActionSheetController,
              public file: File,
              public transfer: Transfer,
              public transferObject: TransferObject,
              public filePath: FilePath,
              public camera: Camera,
              public platform: Platform,
              public toastCtrl: ToastController
  ) {
    super();
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterSettingPage');
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create(
      {
        buttons: [
          {
            text: '从图片库中选择',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          },
          {
            text: '使用相机',
            role: 'destructive',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.CAMERA);
            }
          },
          {
            text: '取消',
            role: 'cancel'
          }
        ]
      }
    )
    actionSheet.present();
  }
  takePicture(sourceType) {
    // 定义相机的一些参数
    const options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: true, // 是否保存拍摄的照片到相册中
      correctOrientation: true
    };
    // 获取图片的方法
    this.camera.getPicture(options).then((imagePath) => {
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath) // 获取安卓path
          .then(filePath => {
            this.imageUrl  = normalizeURL(filePath) + '.png';
            // 获取正确的路径
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/')+1);
              // 获取正确的文件名
            let currentPath = filePath.substring(imagePath.lastIndexOf('/')+1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentPath, this.createFileName())
          })
      } else {
        // 获取正确的路径
        let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/')+1);
        // 获取正确的文件名
        let currentPath = imagePath.substr(imagePath.lastIndexOf('/')+1);
        this.copyFileToLocalDir(correctPath, currentPath, this.createFileName())
      }
    },(err) => {
        super.showToast(this.toastCtrl, '选择图片出现错误, 请在App中 操作访问相机和图片的权限')
    })
  }
  // 获取图片或者相机进行另存为
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;

    }, error => {
      super.showToast(this.toastCtrl, "存储图片到本地图库出现错误。");
    });
  }
  //为文件生成一个新的文件名
  createFileName() {
    const d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg"; //拼接文件名
    return newFileName;
  }
  //处理图片的路径为可以上传的路径
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return normalizeURL(cordova.file.dataDirectory + img);
    }
  }
}
