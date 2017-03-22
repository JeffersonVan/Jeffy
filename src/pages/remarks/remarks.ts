import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { MoreSettingsPage } from '../more-settings/more-settings';
import {Http} from '@angular/http';

/*
  Generated class for the Remarks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-remarks',
  templateUrl: 'remarks.html'
})
export class RemarksPage {
  data: any;
  userid : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController, private http: Http) {
  this.data = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemarksPage');
  }

ngOnInit(){
  this.userid = localStorage.getItem('UserId');
}

Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

remarks(){
    
    let userid = this.userid;
    let rate = this.data.rate;
    let comment = this.data.comment;
    let data = JSON.stringify({rate,comment,userid});
    let link = "http://localhost/mobAppProj/remarks.php";
    this.http.post(link,data)
      .subscribe(data=>{
        this.navCtrl.setRoot(RemarksPage);
        let toast = this.toastCtrl.create({
          message: 'Register Successful',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
        console.log("success");
      },error=>{
        let toast = this.toastCtrl.create({
          message: 'Register Failed',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
      });
  
}
}
