import { Component } from '@angular/core';
import { MoreSettingsPage } from '../more-settings/more-settings';
import { NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {

  }

 
  Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

view(){
  this.navCtrl.push(ViewPage);
} 

 }