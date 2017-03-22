import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { MoreSettingsPage } from '../more-settings/more-settings';
import {Http} from '@angular/http';
/*
  Generated class for the Editsteps page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editsteps',
  templateUrl: 'editsteps.html'
})
export class EditstepsPage {
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController, private http: Http) {
  this.data = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditstepsPage');
  }

   Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

 ingredientsEdit(){
 let Name = this.data.ingredients;
 let Desc = this.data.description;
 let Qty = this.data.qty;
 let data = JSON.stringify({Name,Desc,Qty});
    let link = "http://localhost/mobAppProj/ingredientsedit.php";
    this.http.post(link,data)
      .subscribe(data=>{
        this.navCtrl.setRoot(EditstepsPage);
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


 stepsEdit(){
 let steps = this.data.steps;
 let data = JSON.stringify({steps});
    let link = "http://localhost/mobAppProj/stepsedit.php";
    this.http.post(link,data)
      .subscribe(data=>{
        this.navCtrl.setRoot(EditstepsPage);
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
