import { Component } from '@angular/core';
import { MoreSettingsPage } from '../more-settings/more-settings';
import { NavController, NavParams, ModalController } from 'ionic-angular';

/*
  Generated class for the Drawer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-drawer',
  templateUrl: 'drawer.html'
})
export class DrawerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrawerPage');
  }

 Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

}
