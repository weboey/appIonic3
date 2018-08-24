import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Camera} from '@ionic-native/camera';
import {ImagePicker} from '@ionic-native/image-picker';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {IonicStorageModule, Storage} from '@ionic/storage';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {Items} from '../mocks/providers/items';
import {Settings, UserProvider, Api, UtilProvider, HttpRequestProvider} from '../providers';
import {MyApp} from './app.component';
import {ComponentsModule} from "../components/components.module";
import {LoginPageModule} from "../pages/login/login.module";
import {MyStarRecordPageModule} from "../pages/MyRecord/my-star-record/my-star-record.module";
import {BlogComments} from "../mocks/providers/comments";
import {File} from "@ionic-native/file"
import {Transfer, TransferObject} from "@ionic-native/transfer";
import {FilePath} from "@ionic-native/file-path";
import {JWTInterceptor} from "../providers/api/JWT.Interceptor";
import {PhotoViewer} from '@ionic-native/photo-viewer';
import {DraftListPageModule} from "../pages/MyRecord/draft-list/draft-list.module";
import {BlogProvider} from '../providers';
import { FunctionModule } from '../common/function';
import {MessageServer} from "../providers";

export function provideSettings(storage: Storage) {
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    userId: '5b7a93055f627daf7241498d',
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
    FunctionModule,
    IonicModule.forRoot(MyApp, {
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
    MyStarRecordPageModule,
    DraftListPageModule,
    IonicStorageModule.forRoot({
      name: '__mydb2',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Api,
    Items,
    BlogComments,
    UserProvider,
    Camera,
    ImagePicker,
    SplashScreen,
    PhotoViewer,
    UtilProvider,
    StatusBar,
    BlogProvider,
    File,
    Transfer,
    TransferObject,
    FilePath,
    MessageServer,
    {provide: Settings, useFactory: provideSettings, deps: [Storage]},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true},
    HttpRequestProvider
  ]
})
export class AppModule {
}
