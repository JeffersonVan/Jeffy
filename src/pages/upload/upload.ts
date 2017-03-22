import { Component } from '@angular/core';
import { MoreSettingsPage } from '../more-settings/more-settings';
import { NavController, NavParams, ModalController, ToastController, ActionSheetController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Camera } from 'ionic-native';

/*
  Generated class for the Upload page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {
  data:any;
  locationId: string;
  username: string; 
  password: string;
  response: any;
  locations: any;
  userid : string;
  public base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,  private http: Http, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController) {
  this.data = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  ngOnInit(){
    this.userid = localStorage.getItem('UserId');
  }

 Modal(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
  	let modal = this.modalCtrl.create(MoreSettingsPage,pass,opts);
  	modal.present();
  	}

   submit(){
    let userid = this.userid;
    let recipename = this.data.recipename;
    let recipedesc = this.data.recipedesc;
    let recipethumb = this.data.recipethumb;
    let data = JSON.stringify({recipename,recipedesc,recipethumb,userid});
    let link = "http://localhost/mobAppProj/recipeAdd.php";
    this.http.post(link,data)
      .subscribe(data=>{
        this.navCtrl.setRoot(UploadPage);
        let toast = this.toastCtrl.create({
          message: 'Recipe Added Successful',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
        console.log("success");
      },error=>{
        let toast = this.toastCtrl.create({
          message: 'Insert failed',
          showCloseButton: true,
          closeButtonText: "X",
          dismissOnPageChange: false,
          duration: 10000,

        });
        toast.present();
      });
  }

  choosePhoto(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Photo',
      buttons: [
        {
          text: 'Take Photo',
          icon: 'aperture',
          handler: () => {
            console.log('Take Photo');
            this.takePhoto();
          }
        },{
          text: 'from Gallery',
          icon: 'folder',
          handler: () => {
            console.log('from Gallery');
            this.fromGallery();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  takePhoto(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 300,
        targetHeight: 200,
        quality: 100,
        encodingType: Camera.EncodingType.JPEG
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

 fromGallery(){
   Camera.getPicture({
     sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: Camera.DestinationType.DATA_URL,
     quality: 100
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }
}
