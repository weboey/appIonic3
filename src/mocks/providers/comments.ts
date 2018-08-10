import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class BlogComments {
  commentItems: Item[] = [];

  constructor() {
    let items = [
      {
        "commentId":1,
        "uid": 1,
        "userName": '四十大神兽',
        "desc": "美国总统快来救救我们吧",
        "profilePic": "assets/img/speakers/bear.jpg",
        "date": "7-30 21:09"
      },
      {
        "commentId":2,
        "uid": 2,
        "userName": '小猪佩奇',
        "desc": "国家鼓励大家买买买...",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "date": "7-30 21:09"
      },
      {
        "commentId":3,
        "uid": 3,
        "userName": '小猪佩奇，我配你',
        "desc": "先打一拳在说",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "date": "7-30 21:09"
      },
      {
        "commentId":4,
        "uid": 4,
        "userName": '三胖',
        "desc": "唐三藏",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "date": "7-30 21:09"
      }
    ];

    for (let item of items) {
      this.commentItems.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.commentItems;
    }

    return this.commentItems.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.commentItems.push(item);
  }

  delete(item: Item) {
    this.commentItems.splice(this.commentItems.indexOf(item), 1);
  }
}
