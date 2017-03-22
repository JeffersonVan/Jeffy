import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
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
  datasteps:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private ingredientprovider:Ingredientprovide, private steps:Steps, private http:Http ) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }


  ngOnInit(){
  this.getIngredients();
  this.getSteps();
  }

  getIngredients()
  {
    this.ingredientprovider.getIngredient().subscribe(res=>{
      this.data = res
      
    });
  }

 getSteps()
  {
    this.steps.getStep().subscribe(res=>{
      this.datasteps = res

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
