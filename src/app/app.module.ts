import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UploadPage } from '../pages/upload/upload';
import { DrawerPage } from '../pages/drawer/drawer';
import { MoreSettingsPage } from '../pages/more-settings/more-settings';
import { LoginPage } from '../pages/login/login';
import { ViewPage } from '../pages/view/view';
import { StartPage } from '../pages/start/start';
import { RegisterPage } from '../pages/register/register';
import { Userprovider } from '../providers/userprovider';
import { Recipeprovider } from '../providers/recipeprovider';
import { Ingredientprovide } from '../providers/ingredientprovider';


  

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    UploadPage,
    DrawerPage,
    MoreSettingsPage,
    LoginPage,
    ViewPage,
    StartPage,
    RegisterPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    UploadPage,
    DrawerPage,
    MoreSettingsPage,
    LoginPage,
    ViewPage,
    StartPage,
    RegisterPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Recipeprovider,Userprovider,Ingredientprovide]
})
export class AppModule {}
