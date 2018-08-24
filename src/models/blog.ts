/**
 * 博文，模型
 */
export class Blog {
  public id: "5b73c2859dc6d6303023f5f4";
  public title: "我是标题";
  public content: "我是内容";
  public content_html: "我是内容";
  public thumbs_count: 14; // 点赞数
  public comment_count: 3;  // 品论数
  public forward_num: 20;  // 转发数
  public reports_num: 15; // 举报数
  public red_count: 20; //阅读数
  public collection_number: 13; //收藏数
  public memo: null;
  public creator: { 'id': "自己猜", 'name' : "陈运生" };
  public type: "1";
  public status: "1";
  public update_time: "2018-08-10";
  public create_time: "2018-08-10";
  public image_url_list: Array<any>;
  public tag_list: Array<any>; // 文章标签
  public is_read: any; // 是否读
  public is_thumb: any; // 是否点赞
  public is_comment: any; // 是否品论
  public is_forward: any; // 是否转发
  constructor(fields: any) {
    this.image_url_list = [];
    this.tag_list = [];
    this.creator = {'id': "自己猜", 'name' : "陈运生" };
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

