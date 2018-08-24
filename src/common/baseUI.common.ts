import {
  ActionSheet, ActionSheetController, ActionSheetOptions,
  Alert, AlertController, AlertOptions,
  Loading, LoadingController, LoadingOptions, Modal, ModalController, ModalOptions,
  Toast, ToastController, ToastOptions
} from "ionic-angular";
import {Component} from "../../node_modules/@angular/core/src/metadata/directives";

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
  protected showLoading(loadingCrl: LoadingController, content: string, config: LoadingOptions = {}): Loading {
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
  protected showToast(toastCrl: ToastController, message: string, config: ToastOptions = {}): Toast {
    const options = Object.assign({duration: 2000, position: 'middle',}, {message}, config);
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
  protected showAlert(alertCrl: AlertController, title: string, config: AlertOptions = {}): Alert {
    const options = Object.assign({}, {title}, config);
    const alert = alertCrl.create(options);
    alert.present().then();
    return alert;
  }

  /**
   * @author 王宜明
   * @param actionSheetCrl
   * @param title
   * @param config
   * @return ActionSheet
   */
  protected showActionSheet(actionSheetCrl: ActionSheetController, title: string, config: ActionSheetOptions = {}): ActionSheet {
    const options = Object.assign({}, {title}, config);
    const actionSheet = actionSheetCrl.create(options);
    actionSheet.present().then();
    return actionSheet;
  }

  /**
   * @author 王宜明
   * @param modalCrl
   * @param component
   * @param data
   * @param options
   */
  protected showModal(modalCrl: ModalController, component: any, data: any = {}, options: ModalOptions = {}): Modal {
    const modal = modalCrl.create(component, data, options);
    modal.present().then();
    return modal;
  }
}
