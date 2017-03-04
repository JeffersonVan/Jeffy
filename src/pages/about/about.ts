import { Component } from '@angular/core';
import { MoreSettingsPage } from '../more-settings/more-settings'
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Recipeprovider } from '../../providers/recipeprovider';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private recipeprovider: Recipeprovider) {

  }

  ngOnInit(){
  this.getRecipes();
  }

  getRecipes()
  {
    this.recipeprovider.getRecipe().subscribe(res=>{
      this.data = res
      
    });
  }


Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

}
