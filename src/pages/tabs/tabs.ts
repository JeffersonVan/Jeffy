import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { UploadPage } from '../upload/upload';
import { DrawerPage } from '../drawer/drawer';
import { ViewPage } from '../view/view';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = UserPage;
  tab3Root: any = ContactPage;
  tab4Root : any = UploadPage;
  tab5Root : any = DrawerPage;
  parameter1: string;

  constructor(private navController: NavController, private navParams: NavParams) {
    this.parameter1 = navParams.get('param1'); 
  } 


}
