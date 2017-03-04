import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Userprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Userprovider {

  constructor(public http: Http) {
    console.log('Hello Userprovider Provider');
  }

  getUser(){
  	return this.http.get('http://localhost/mobAppProj/viewprofile.php').map(res => res.json());
  }

  searchUser(post){
  	return this.http.get('http://localhost/mobAppProj/login.php').map(res => res.json());
  }

}
