import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Authuser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Authuser {

url: string;
user: any;

  constructor(public http: Http) {
    console.log('Hello Authuser Provider');
    this.url = 'http://localhost/mobAppProj/authuser.php';
  }


checkAuth(username, password){
  	var arr = {'username': username,
  				'password': password};

  	var data = JSON.stringify(arr);

  	return this.http.post(this.url, data)
  		.map(res => res.json());
  }

logout()
{
  localStorage.clear();
}
}
