import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Ingredientprovide } from '../../providers/ingredientprovider';

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

  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private ingredientprovider:Ingredientprovide) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }


  ngOnInit(){
  this.getIngredients();
  }

  getIngredients()
  {
    this.ingredientprovider.getIngredient().subscribe(res=>{
      this.data = res
      
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
