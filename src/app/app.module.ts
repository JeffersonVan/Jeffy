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
import { IngredientsAddPage } from '../pages/ingredients-add/ingredients-add';
import { RemarksPage } from '../pages/remarks/remarks';
import { Steps } from '../providers/steps';  
import { Pinned } from '../providers/pinned';
import { EdituserPage } from '../pages/edituser/edituser';
import { EditrecipePage } from '../pages/editrecipe/editrecipe';
import { EditstepsPage } from '../pages/editsteps/editsteps';
import { Authuser } from '../providers/authuser';

 
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
    IngredientsAddPage,
    RemarksPage,
    EdituserPage,
    EditrecipePage,
    EditstepsPage,
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
    IngredientsAddPage,
    RemarksPage,
    EdituserPage,
    EditrecipePage,
    EditstepsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Recipeprovider,Userprovider,Ingredientprovide,Steps,Pinned,Authuser],
  
})
export class AppModule {}
