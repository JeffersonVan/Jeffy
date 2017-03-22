import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Pinned provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Pinned {

  constructor(public http: Http) {
    console.log('Hello Pinned Provider');
  }

getPinned(){
  	return this.http.get('http://localhost/mobAppProj/viewpinned.php').map(res => res.json());
  }

  searchPinned(post){
  	return this.http.get('http://localhost/mobAppProj/viewpinned.php').map(res => res.json());
  }
}
