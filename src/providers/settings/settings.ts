import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class Settings {
  private SETTINGS_KEY: string = '_settings';


  public accessToken: string;

  public refreshToken: string;

  public userId: string;

  private theme: BehaviorSubject<string> = new BehaviorSubject('dark-theme');

  settings: any;

  _defaults: any;
  _readyPromise: Promise<any>;

  constructor(public storage: Storage, defaults: any) {
    this._defaults = defaults;
    this.gettoken().then();
  }

  async gettoken() {
    this.accessToken = await this.storage.get('accessToken');
    this.refreshToken = await this.storage.get('refreshToken');
    this.userId = await this.getValue('userId');
  }

  load() {
    console.log('load...._settings');
    return this.storage.get(this.SETTINGS_KEY).then((value) => {
      if (value) {
        this.settings = value;
        return this._mergeDefaults(this._defaults);
      } else {
        return this.setAll(this._defaults).then((val) => {
          this.settings = val;
        })
      }
    });
  }

  _mergeDefaults(defaults: any) {
    for (let k in defaults) {
      if (!(k in this.settings)) {
        this.settings[k] = defaults[k];
      }
    }
    return this.setAll(this.settings);
  }

  merge(settings: any) {
    for (let k in settings) {
      this.settings[k] = settings[k];
    }
    return this.save();
  }

  setValue(key: string, value: any) {
    this.settings[key] = value;
    return this.storage.set(this.SETTINGS_KEY, this.settings);
  }

  setAll(value: any) {
    return this.storage.set(this.SETTINGS_KEY, value);
  }

  getValue(key: string) {
    return this.storage.get(this.SETTINGS_KEY)
      .then(settings => {
        return settings[key];
      });
  }

  save() {
    return this.setAll(this.settings);
  }

  get allSettings() {
    return this.settings;
  }

  // 设置主题类
  setActiveTheme(val) {
    this.theme.next(val);
  }

  // 获取主题类
  getActiveTheme() {
    return this.theme.asObservable();
  }
}
