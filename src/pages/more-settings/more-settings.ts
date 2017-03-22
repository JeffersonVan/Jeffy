import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StartPage } from '../start/start';
import { Authuser } from '../../providers/authuser';


/*
  Generated class for the MoreSettings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-more-settings',
  templateUrl: 'more-settings.html'
})
export class MoreSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Authuser) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreSettingsPage');
  }

  Modal(){
   this.navCtrl.pop();
  }

Out()
{
  localStorage.clear();
  this.navCtrl.push(StartPage);
}

}
