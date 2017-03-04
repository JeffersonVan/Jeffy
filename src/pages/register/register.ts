import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {Http} from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import { StartPage } from '../start/start';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
	select:any;
  	data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public toastCtrl: ToastController) {
  	this.data = {};
  	this.select = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  submit(){
  	let username = this.data.username;
  	let password = this.data.password;
  	let firstName = this.data.fname;
  	let middleName = this.data.mname;
  	let lastName = this.data.lname;
	let email = this.data.email;
  	let contact = this.data.contact;
  	let bio = this.data.bio;
  	let birthDate = this.data.bday;
    let gender = this.select.gender;
  	let data = JSON.stringify({username,password,firstName,middleName,lastName,email,contact,bio,birthDate,gender});
  	let link = "http://localhost/mobAppProj/register.php";
  	this.http.post(link,data)
  		.subscribe(data=>{
  			this.navCtrl.setRoot(StartPage);
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

cancel()
{
  this.navCtrl.push(StartPage);
}

 /* genderChange(){
    this.data.plate = this.select.plate; 
    var gender = document.getElementById("gender");
    gender.innerHTML = "";
  } */
}
