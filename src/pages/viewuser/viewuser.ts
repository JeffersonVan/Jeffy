import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { MoreSettingsPage } from '../more-settings/more-settings';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
/*
  Generated class for the Viewuser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viewuser',
  templateUrl: 'viewuser.html'
})
export class ViewuserPage {
  id : string;
  fetchdata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController, private http:Http) {
  this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewuserPage');
  }

  ngOnInit(){
    this.getUserprof();
  }

getUserprof(){
    let id = this.id;
    let data = JSON.stringify({id});
    let link = "http://localhost/mobAppProj/viewuserprof.php";
    this.http.post(link,data)
      .map(res=>res.json())
      .subscribe(data=>{
        this.fetchdata = data;
        console.log(this.fetchdata);

        let toast = this.toastCtrl.create({
          message: 'Users View',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
        console.log("this.fetchdata");
      },error=>{
        let toast = this.toastCtrl.create({
          message: 'Users Failed',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
      });
}

 Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

}
