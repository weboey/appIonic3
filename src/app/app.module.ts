import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings, User, Api, UtilProvider } from '../providers';
import { MyApp } from './app.component';
import {ComponentsModule} from "../components/components.module";
import {LoginPageModule} from "../pages/login/login.module";
import {BlogComments} from "../mocks/providers/comments";
import {File} from "@ionic-native/file"
import {Transfer, TransferObject} from "@ionic-native/transfer";
import {FilePath} from "@ionic-native/file-path";
export function provideSettings(storage: Storage) {
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      backButtonText: '返回',
    }),
    ComponentsModule,
    LoginPageModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Api,
    Items,
    BlogComments,
    User,
    Camera,
    ImagePicker,
    SplashScreen,
    UtilProvider,
    StatusBar,
    File,
    Transfer,
    TransferObject,
    FilePath,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
