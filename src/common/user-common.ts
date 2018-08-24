import {} from "ionic-angular";

export abstract class UserCommon {

  /** 判断是否当前登录用户：判断参数id 是否为登录用户id
   * @param: id
   * @return blog array
   */
  isSelf(id: string) {
    return id === '1'
  }

}
