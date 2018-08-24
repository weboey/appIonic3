import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TransformTimePipe pipe.
 *
 * 时间转换管道, eg : 2018-08-15 ---> 6天前
 */
@Pipe({
  name: 'transformTime',
})
export class TransformTimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let format = args[0] || 'yyyy-MM-dd';
    return this._getDateDiff(value, format);
  }

  _getDateDiff(startTime, format='yyyy-MM-dd', endTime=new Date()['format'](format), diffType='day') {
    startTime = startTime.replace(/\-/g, "/");
    endTime = endTime.replace(/\-/g, "/");
    diffType = diffType.toLowerCase();
    if(format.toLowerCase().indexOf('hh')>=0){
      diffType = 'hour';
    }
    const sTime =new Date(startTime); //开始时间
    const eTime =new Date(endTime); //结束时间
    //作为除数的数字
    let timeType =1;
    let timeSuffix = '';
    switch (diffType) {
      case"second":
        timeType =1000;
        break;
      case"minute":
        timeType =1000*60;
        break;
      case"hour":
        timeType =1000*3600;
        timeSuffix = '时前';
        break;
      case"day":
        timeType =1000*3600*24;
        timeSuffix = '天前';
        break;
      default:
        break;
    }
    let result = Math.ceil((eTime.getTime() - sTime.getTime()) / timeType);
    if(result == 1) {
      return '刚刚'
    }
    return result + timeSuffix;
  }
}
