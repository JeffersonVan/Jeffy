import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { MoreSettingsPage } from '../more-settings/more-settings';
import {Http} from '@angular/http';
/*
  Generated class for the IngredientsAdd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ingredients-add',
  templateUrl: 'ingredients-add.html'
})
export class IngredientsAddPage {
	data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController, private http: Http) {
  	this.data = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientsAddPage');
  }

 Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

 ingredientsAdd(){

 }

 stepsAdd(){
 let Name = this.data.ingredients;
 let Desc = this.data.description;
 let Qty = this.data.qty;
 let data = JSON.stringify({Name,Desc,Qty});
    let link = "http://localhost/mobAppProj/ingredientsadd.php";
    this.http.post(link,data)
      .subscribe(data=>{
        this.navCtrl.setRoot(IngredientsAddPage);
        let toast = this.toastCtrl.create({
          message: 'Insert Successful',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
        console.log("success");
      },error=>{
        let toast = this.toastCtrl.create({
          message: 'Insert Failed',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
      });

 let steps = this.data.steps;
 let data2 = JSON.stringify({steps});
    let link2 = "http://localhost/mobAppProj/stepsadd.php";
    this.http.post(link2,data2)
      .subscribe(data=>{
        this.navCtrl.setRoot(IngredientsAddPage);
        let toast = this.toastCtrl.create({
          message: 'Insert Successful',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
        console.log("success");
      },error=>{
        let toast = this.toastCtrl.create({
          message: 'Insert Failed',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
      });
 }
}
