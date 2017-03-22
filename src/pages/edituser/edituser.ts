import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Userprovider } from '../../providers/userprovider';
import { MoreSettingsPage } from '../more-settings/more-settings';
import { TabsPage } from '../tabs/tabs';
import {Http} from '@angular/http';

/*
  Generated class for the Edituser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html'
})
export class EdituserPage {
data:any;
select:any;
userid : string;
username : string;
password : string;
firstname : string;
middlename : string;
lastname : string;
email : string;
contact : string;
birth : string;
gender : string;
bio : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController, private userprovider: Userprovider, private http: Http) {
  this.data = {};
  this.select = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdituserPage');
  }

  ngOnInit(){
  this.getUser();
  this.userSession();
  }

userSession()
  {
    this.username = localStorage.getItem('Username');
    this.password = localStorage.getItem('Password');
    this.userid = localStorage.getItem('UserId');
    this.firstname = localStorage.getItem('FirstName');
    this.middlename = localStorage.getItem('MiddleName');
    this.lastname = localStorage.getItem('LastName');
    this.firstname = localStorage.getItem('FirstName');
    this.email = localStorage.getItem('Email');
    this.contact = localStorage.getItem('Contact');
    this.birth = localStorage.getItem('Birth');
    this.gender = localStorage.getItem('Gender');
    this.bio = localStorage.getItem('Bio');
  }

  getUser()
  {
    this.userprovider.getUser().subscribe(res=>{
      this.data = res
      
    });
  }

  Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

    submit()
    {
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
    let userid = this.userid;
    let data = JSON.stringify({username,password,firstName,middleName,lastName,email,contact,bio,birthDate,gender,userid});
    let link = "http://localhost/mobAppProj/edituser.php";
    this.http.post(link,data)
      .subscribe(data=>{
        this.navCtrl.setRoot(TabsPage);
        let toast = this.toastCtrl.create({
          message: 'Update Successful',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
        console.log("success");
      },error=>{
        let toast = this.toastCtrl.create({
          message: 'Update Failed',
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
      this.navCtrl.push(TabsPage);
    }
}
