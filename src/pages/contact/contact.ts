import { Component } from '@angular/core';
import { MoreSettingsPage } from '../more-settings/more-settings';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Userprovider } from '../../providers/userprovider';
import { Pinned } from '../../providers/pinned';
import { EdituserPage } from '../edituser/edituser';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	data : any;
 	info : any;
 	select : any;
  fetchdata : any;
  datasss : any;
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
  userid : string;
  public tap: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private http: Http, private userprovider: Userprovider, private pinned: Pinned) 
  {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    
  }

  ngOnInit(){
  this.getUsers();
  this.getPin();
  this.userSession();
  }

  getUsers()
  {
    this.userprovider.getUser().subscribe(res=>{
      this.data = res

    });
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

  getPin()
  {
    this.pinned.getPinned().subscribe(res=>{
      this.fetchdata = res
    });
  }

  tapEvent(e) {
    this.tap++;
  }


editUser()
{
  this.navCtrl.push(EdituserPage);
}

 Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

}
