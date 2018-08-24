import { Component, Input, ElementRef, Renderer2,  OnInit} from '@angular/core';
import { normalizeURL, Platform } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
declare var cordova: any; //导入第三方的库定义到 TS 项目中

/**
 * Generated class for the ImageViewerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components. 显示图片组件
 */
@Component({
  selector: 'image-viewer',
  template: `<img class="img-view" src="{{src}}" alt="{{alt}}" (click)="show($event)">`
})
export class ImageViewerComponent implements OnInit{
  _src:string;
  @Input() public alt:string;
  @Input() public width:string;
  @Input() public height:string;
  @Input()
  set src(v: string){
    this._src = this._fixedUrl(v);
  }
  get src(): string{
    return this._src;
  }
  constructor(
    private elementRef: ElementRef,
    public platform: Platform,
    private renderer: Renderer2,
    private photoViewer: PhotoViewer) {
  }
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.width + 'px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.height + 'px');
  }
  //处理图片的路径为可以上传的路径
  _pathForImage(img) {
    if(!this.platform.is('android') && !this.platform.is('ios')){
      return '';
    }
    console.error('浏览器平台');
    if (img === null) {
      return '';
    } else {
      // return normalizeURL(cordova.file.dataDirectory + img);
      // return '';
    }
  }
  _fixedUrl(str) {
    return str.replace(/^file:\/\//, '');
  }

  show(ev) {
    ev.stopPropagation();
    console.log('放大图片显示');
    this.photoViewer.show(this.src, PhotoViewer.getPluginInstallName(), {share: false});
    console.log();
  }
}
