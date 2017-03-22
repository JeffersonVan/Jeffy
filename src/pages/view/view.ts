import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { Ingredientprovide } from '../../providers/ingredientprovider';
import { Steps } from '../../providers/steps';
import {Http} from '@angular/http';

/*
  Generated class for the View page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})

export class ViewPage {
  name:string;
  data:any;
  data2:any;
  datasteps:any;
  id:any;
  fetchdata:any;
  fetchdata2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private ingredientprovider:Ingredientprovide, private steps:Steps, private http:Http, private toastCtrl: ToastController ) {
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }


  ngOnInit(){
  this.getIngredients();
  this.getSteps();
  console.log(this.fetchdata);
  console.log(this.fetchdata2);
  }

  getIngredients()
  {
    let id = this.id
    let data = JSON.stringify({id});
    let link = "http://localhost/mobAppProj/ingredientsSpec.php";
    this.http.post(link,data)
      .map(res=>res.json())
      .subscribe(data=>{
        this.fetchdata = data;
        console.log(this.fetchdata);
        let toast = this.toastCtrl.create({
          message: 'Successful',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,
        });
        toast.present();
        console.log("success");
      },error=>{
        let toast = this.toastCtrl.create({
          message: 'Ingredients Error',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
      });
  }

 getSteps()
  {
    let id = this.id
    let data2 = JSON.stringify({id});
    let link2 = "http://localhost/mobAppProj/stepsSpec.php";
    this.http.post(link2,data2)
      .map(res=>res.json())
      .subscribe(data2=>{
        this.fetchdata2 = data2;
        console.log(this.fetchdata2);
        let toast = this.toastCtrl.create({
          message: 'Successful',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,
        });
        toast.present();
        console.log("success");
      },error=>{
        let toast = this.toastCtrl.create({
          message: 'Steps Error',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
      });
  }

  actionSheet(){
  let actionSheet = this.actionSheetCtrl.create({
     title: 'Record',
     buttons: [
       {
         text: 'Update',
         
         handler: () => {
           console.log('Update clicked');
         }
       },
       {
         text: 'Deactivate',
         handler: () => {
           console.log('Deactivate clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }
}
