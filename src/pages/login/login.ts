import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import 'rxjs/add/operator/map';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	data : any;
  fetchdata : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  	this.data = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

  	let username = this.data.username;
  	let password = this.data.password;
  	let data = JSON.stringify({username,password});
  	let link = "http://localhost/mobAppProj/login.php";
  	this.http.post(link,data)
      .map(res=>res.json())
  		.subscribe(data=>{
        this.fetchdata = data;
        console.log(this.fetchdata);
        let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  
  			this.navCtrl.setRoot(TabsPage,);
  			let toast = this.toastCtrl.create({
		  		message: 'Log In Successful',
		  		showCloseButton: true,
		  		closeButtonText: "X",
		  		dismissOnPageChange: false,
		  		duration: 10000,

		  	});
		  	toast.present();
  			console.log("success");
  		},error=>{
  			let toast = this.toastCtrl.create({
		  		message: 'Invalid Credentials. Log In Denied',
		  		showCloseButton: true,
		  		closeButtonText: "X",
		  		dismissOnPageChange: false,
		  		duration: 10000,

		  	});
		  	toast.present();
  		});
  }
}
