import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import {Http} from '@angular/http';
import { MoreSettingsPage } from '../more-settings/more-settings';

/*
  Generated class for the Editrecipe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editrecipe',
  templateUrl: 'editrecipe.html'
})
export class EditrecipePage {
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController, private http: Http) {
  this.data = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditrecipePage');
  }

  Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

  	submit()
  	{
  	let recipename = this.data.recipename;
    let recipedesc = this.data.recipedesc;
    let recipethumb = this.data.recipethumb;
    let recipeuserid = this.data.recipeuserid;
    let data = JSON.stringify({recipename,recipedesc,recipethumb,recipeuserid});
    let link = "http://localhost/mobAppProj/editrecipe.php";
    this.http.post(link,data)
      .subscribe(data=>{
        this.navCtrl.setRoot(EditrecipePage);
        let toast = this.toastCtrl.create({
          message: 'Recipe Added Successful',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
        console.log("success");
      },error=>{
        let toast = this.toastCtrl.create({
          message: 'Insert failed',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
      });
  	}
}
