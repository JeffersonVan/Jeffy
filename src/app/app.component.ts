import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { StartPage } from '../pages/start/start';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { IngredientsAddPage } from '../pages/ingredients-add/ingredients-add';
import { EdituserPage } from '../pages/edituser/edituser';
import { EditrecipePage } from '../pages/editrecipe/editrecipe';
import { EditstepsPage } from '../pages/editsteps/editsteps';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
