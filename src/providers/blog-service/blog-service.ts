import { Injectable } from '@angular/core';
import {Api} from "../api/api";
import { Items } from '../../providers';
import {Item} from "../../models/item";
export enum BLOG_TYPE{
  sort = '0', // 短文
  long = '1' // 长文
}
export enum BLOG_STATUS{
  draft = '0', //草稿箱
  publish = '1', //已发布
  delete  = '-1', //已删除
  look = '2' // 审核中
}
interface Blog {
  type?: BLOG_TYPE;
  status?: BLOG_STATUS;
}

@Injectable()
export class BlogProvider{
  // 博文接口 -- 增删改查
  blogUrl = 'http://192.168.1.63:8000/api/v1/first_page/content';
  // 博文接口 -- 博文详情
  blogDetailUrl = 'http://192.168.1.63:8000/api/v1/first_page/article_detail';
  // 博文操作接口 -- 点赞，举报, 收藏
  blogActionUrl = 'http://192.168.1.63:8000/api/v1/first_page/userAction';
  // 评论
  blogCommentUrl = 'http://192.168.1.63:8000/api/v1/first_page/comment';

  blogList = [];
  constructor(private api : Api, public items: Items) {}

  /** 查询博文 list
   * @param
   * @return blog array
   */
  getBlogList(param ?: any) {
    return this.api.get(this.blogUrl, param)
  }
  /** 查询博文详情
   * @param
   * @return blog array
   */
  getBlogDetail(param ?: any) {
    return this.api.get(this.blogDetailUrl, param)
  }
  /** 博文点赞
   * @param
   * @return blog array
   */
  blogThumbs(param ?: any) {
    let params = Object.assign({action_type: '-2'}, param);
    return this.api.post(this.blogActionUrl, params)
  }
  /** 博文举报
   * @param
   * @return blog array
   */
  blogReport(param ?: any) {
    let params = Object.assign({
      action_type: '6',
      type: '0',
      status: '0',
      content: ''
    }, param);
    return this.api.post(this.blogCommentUrl, params)
  }
  /** 博文收藏
   * @param
   * @return blog array
   */
  blogCollection(article_id: string) {
    let params ={
      action_type: '5',
      article_id: article_id,
    };
    return this.api.post(this.blogCommentUrl, params)
  }

  /** 评论接口: 创建，查询，删除
   * @param
   * @return blog array
   */
  blogPushComment(param ?: any) {
    let params = Object.assign({
      'up_comment_i': null,
      'image_url_list': [],
      'status': '1'
    }, param);
    return this.api.post(this.blogCommentUrl, params)
  }
  blogQueryComment(param ?: any) {
    return this.api.get(this.blogCommentUrl, param)
  }
  blogDeleteComment(param ?: any) {
    return this.api.delete(this.blogCommentUrl, param)
  }

  /** 查询博文: mock 接口
   * @param
   * @return blog array
   */
  getBlogListMock(params ?: any) {
    this.blogList = this.items.query();
    if (!params) {
      return this.blogList;
    }
    return this.blogList.filter((item) => {
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

  /** 发表博文
   * @param
   * @return blog array
   */
  publish(param ?: any, blog? :Blog) {
    const body = Object.assign({
      "content": "",
      "image_url_list": [],
      "memo": null,
      "type": BLOG_TYPE.sort,
      "title": "",
      "tag_list": [],
      "status": BLOG_STATUS.publish
    }, param, blog);
    console.log('发表博文');
    console.log(body);
    return this.api.post(this.blogUrl, body)
  }
  /** 删除博文
   * @param
   * @return blog array
   */
  deleteBlogById(param ?: any) {
    console.log('删除博文');
    return this.api.delete(this.blogUrl, param)
  }
}
