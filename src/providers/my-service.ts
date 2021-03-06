import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyService {

  constructor(public http: Http) {
    console.log('Hello MyService Provider');
  }

  getJsonData(){
  	return this.http.get('http://localhost/mobAppProj/login.php').map(res => res.json());
  }

}
