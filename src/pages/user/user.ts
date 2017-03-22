import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { MoreSettingsPage } from '../more-settings/more-settings';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { ViewuserPage } from '../viewuser/viewuser';

/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  userid:any;
  fetchdata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController, private http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

ngOnInit(){
 this.userid = localStorage.getItem('UserId');
 this.getUsers();
 console.log(this.fetchdata);
}

getUsers(){
    let id = this.userid;
    let data = JSON.stringify({id});
    let link = "http://localhost/mobAppProj/viewusers.php";
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

View(id){
  this.navCtrl.push(ViewuserPage,{id});
}
}
