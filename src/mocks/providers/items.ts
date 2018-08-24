import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];
  //id 文章id
  // userName
  // profilePic: 用户头像
  // date: 创建时间
  // content: 内容
  // thumbsCount: 点赞数量, commentCount: 评论数量， redoCount：转发数量
  constructor() {
    let items = [
      {
        "id":1,
        creator:{
          id: '2',
          name: "我是特朗普总统",
          image_url: "assets/img/speakers/bear.jpg"
        },
        "create_time": "2018-08-21",
        "content": '据中央纪委国家监委网站客户端消息,吉林省纪委监委坚决贯彻落实中央领导指示精神和省委部署,高度关注长春长生生物科技有限责任公司疫苗事件,要求对疫苗事件涉及到的责任者',
        "thumbs_count": 134,
        "content_html": "",
        "comment_count": 165,
        "type": '0',
        "forward_num": 888,
        "image_url_list": [
          "assets/img/speakers/bear.jpg",
          "assets/img/speakers/cheetah.jpg",
          "assets/img/speakers/duck.jpg",
          "assets/img/speakers/eagle.jpg",
          "assets/img/speakers/elephant.jpg",
          "assets/img/speakers/puppy.jpg",
          "assets/img/speakers/mouse.jpg",
          "assets/img/test1.png",
        ]
      },{
        "id":2,
        creator:{
          id: '2',
          name: "亚索",
          image_url: "assets/img/speakers/elephant.jpg"
        },
        "create_time": "2018-08-21",
        "content": '据中央纪委国家监委网站客户端消息,吉林省纪委监委坚决贯彻落实中央领导指示精神和省委部署,高度关注长春长生生物科技有限责任公司疫苗事件,要求对疫苗事件涉及到的责任者',
        "content_html": "",
        "thumbs_count": 134,
        "comment_count": 165,
        "type": '0',
        "forward_num": 888,
        "image_url_list": [
          "assets/img/test1.png",
        ]
      },{
        "id":3,
        creator:{
          id: '2',
          name: "亚瑟",
          image_url: "assets/img/speakers/mouse.jpg"
        },
        "create_time": "2018-08-21",
        "content": '据中央纪委国家监委网站客户端消息,吉林省纪委监委坚决贯彻落实中央领导指示精神和省委部署,高度关注长春长生生物科技有限责任公司疫苗事件,要求对疫苗事件涉及到的责任者',
        "thumbs_count": 134,
        "content_html": "",
        "comment_count": 165,
        "type": '0',
        "forward_num": 888,
        "image_url_list": [
          "assets/img/badu-live.png",
        ]
      },
      {
        "id":4,
        creator:{
          id: '2',
          name: "阿离",
          image_url: "assets/img/speakers/duck.jpg"
        },
        "create_time": "2018-08-16",
        "content": '据中央纪委国家监委网站客户端消息,吉林省纪委监委坚决贯彻落实中央领导指示精神和省委部署,高度关注长春长生生物科技有限责任公司疫苗事件,要求对疫苗事件涉及到的责任者',
        "thumbs_count": 134,
        "content_html": "",
        "comment_count": 165,
        "type": '1',
        "forward_num": 888,
        "image_url_list": [
          "assets/img/speakers/bear.jpg",
          "assets/img/speakers/cheetah.jpg",
        ]
      },
      {
        "id":5,
        creator:{
          id: '3',
          name: "test",
          image_url: "assets/img/speakers/cheetah.jpg",
        },
        "create_time": "2018-08-16",
        "content": '据中央纪委国家监委网站客户端消息,吉林省纪委监委坚决贯彻落实中央领导指示精神和省委部署,高度关注长春长生生物科技有限责任公司疫苗事件,要求对疫苗事件涉及到的责任者',
        "thumbs_count": 134,
        "content_html": "",
        "comment_count": 165,
        "type": '1',
        "forward_num": 888,
        "image_url_list": [
          "assets/img/speakers/bear.jpg",
          "assets/img/speakers/cheetah.jpg",
          "assets/img/speakers/duck.jpg",
          "assets/img/speakers/eagle.jpg",
          "assets/img/speakers/elephant.jpg",
        ]
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
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
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
