import {Alert, AlertController, Loading, LoadingController, Toast, ToastController} from "ionic-angular";

export abstract class BaseUI {
  protected constructor() {
  }

  /**
   * @author 王宜明
   * @param loadingCrl
   * @param content
   * @param config
   * @return Loading
   */
  protected showLoading(loadingCrl: LoadingController, content: string, config = {}): Loading {
    const options = Object.assign({dismissOnPageChange: true,}, {content}, config);
    const loader = loadingCrl.create(options);
    loader.present().then();
    return loader;
  }

  /**
   * @author 王宜明
   * @param toastCrl
   * @param message
   * @param config
   * @return Toast
   */
  protected showToast(toastCrl: ToastController, message: string, config = {}): Toast {
    const options = Object.assign({duration: 3000, position: 'bottom',}, {message}, config);
    const toast = toastCrl.create(options);
    toast.present().then();
    return toast;
  }

  /**
   * @author 王宜明
   * @param alertCrl
   * @param title
   * @param config
   * @return Alert
   */
  protected showAlert(alertCrl: AlertController, title: string, config = {}): Alert {
    const options = Object.assign({}, {title}, config);
    const alert = alertCrl.create(options);
    alert.present().then();
    return alert;
  }
}
