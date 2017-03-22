import { Component } from '@angular/core';
import { MoreSettingsPage } from '../more-settings/more-settings'
import { NavController, NavParams, ModalController,  ToastController } from 'ionic-angular';
import { Recipeprovider } from '../../providers/recipeprovider';
import { IngredientsAddPage } from '../ingredients-add/ingredients-add';
import {Http} from '@angular/http';
import { RemarksPage } from '../remarks/remarks';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  recipeid:string;
  recipename:string;
  recipeName:string;
  recipedesc:string;
  username:string;
	data:any;
  data2:any;
  userid : string;
  fetchdata : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private recipeprovider: Recipeprovider, public toastCtrl: ToastController, private http: Http) {
  this.recipeid=this.navParams.get('id');
  this.recipename = this.navParams.get('name');
  this.recipedesc = this.navParams.get('desc');
  this.username = this.navParams.get('username');
  }

  ngOnInit(){

  this.getRecipes();
  this.userid = localStorage.getItem('recipeid');
  console.log(this.recipeid);
  console.log(this.recipename);
  console.log(this.recipedesc);
  console.log(this.username);
  }

  getRecipes()
  {
    let recipeid = this.recipeid;
    let data = JSON.stringify({recipeid});
    let link = "http://localhost/mobAppProj/viewrecipe.php";
    this.http.post(link,data)
      .map(res=>res.json())
      .subscribe(data=>{
        this.fetchdata = data;
        this.recipeName = this.recipename;
        console.log(this.recipeName);
        console.log(this.fetchdata);
        
    },error=>{
        let toast = this.toastCtrl.create({
          message: 'Error',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
      });
  }

 

View(id: string){
  this.navCtrl.push(ViewPage, {id});
}

Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

pin(){
    let userid = this.userid;
    let user = this.data.user;
    let data = JSON.stringify({user,userid});
    let link = "http://localhost/mobAppProj/pin.php";
    this.http.post(link,data)
      .subscribe(data=>{
        this.navCtrl.setRoot(AboutPage);
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


remarks(){
  this.navCtrl.push(RemarksPage);
}
}
