import { Component } from '@angular/core';
import { MoreSettingsPage } from '../more-settings/more-settings'
import { NavController, NavParams, ModalController,  ToastController } from 'ionic-angular';
import { Recipeprovider } from '../../providers/recipeprovider';
import { IngredientsAddPage } from '../ingredients-add/ingredients-add';
import {Http} from '@angular/http';
import { RemarksPage } from '../remarks/remarks';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name:string;
	data:any;
  data2:any;
  userid : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private recipeprovider: Recipeprovider, public toastCtrl: ToastController, private http: Http) {
  this.name=this.navParams.get('name');
  }

  ngOnInit(){
  this.getRecipes();
  this.userid = localStorage.getItem('UserId');
  }

  getRecipes()
  {
    this.recipeprovider.getRecipe().subscribe(res=>{
      this.data = res
      
    });
  }

 

ingredientsAdd(){
  this.navCtrl.push(IngredientsAddPage);
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
