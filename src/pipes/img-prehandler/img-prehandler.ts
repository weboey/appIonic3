import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ImgPrehandlerPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'imgPreHandler',
})
export class ImgPreHandlerPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Array<string>, ...args) {
    let a = value.map(item => {
      let o = {};
      o['src'] = item;
      if(item.indexOf('test1') != -1){
        o['type'] = 'h';
      }else{
        o['type'] = 'w';
      }
      return o;
    });
    return a;
  }
}
