import { Component } from '@angular/core';
import { MoreSettingsPage } from '../more-settings/more-settings';
import { NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { AboutPage } from '../about/about';
import { Recipeprovider } from '../../providers/recipeprovider';
import {Http} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data : any; 
  recipes : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController, private recipe: Recipeprovider, private http:Http) {
  this.data = {}; 
  }


ngOnInit(){
  this.getRecipes();
}
 
getRecipes()
{
  this.recipe.getRecipe2().subscribe(res=>{
      this.data = res
      this.recipes = this.data;
    });
}

  Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

view(id,name,desc,username){
  console.log(id);
  console.log(name);
  this.navCtrl.push(AboutPage ,{id,name,desc,username});
} 

 }