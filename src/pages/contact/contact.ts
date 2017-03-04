import { Component } from '@angular/core';
import { MoreSettingsPage } from '../more-settings/more-settings';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Userprovider } from '../../providers/userprovider';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private http: Http, private userprovider: Userprovider) 
  {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    
  }

  ngOnInit(){
  this.getUsers();
  }

  getUsers()
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

}
