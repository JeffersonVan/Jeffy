import { Component } from '@angular/core';
import { MoreSettingsPage } from '../more-settings/more-settings';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the Upload page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,  private http: Http, public toastCtrl: ToastController) {
  this.data = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

 Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

   submit(){
    let recipename = this.data.recipename;
    let recipedesc = this.data.recipedesc;
    let recipethumb = this.data.recipethumb;
    let recipeuserid = this.data.recipeuserid;
    let data = JSON.stringify({recipename,recipedesc,recipethumb,recipeuserid});
    let link = "http://localhost/mobAppProj/recipeAdd.php";
    this.http.post(link,data)
      .subscribe(data=>{
        this.navCtrl.setRoot(UploadPage);
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
