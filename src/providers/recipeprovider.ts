import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Recipeprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Recipeprovider {

  constructor(public http: Http) {
    console.log('Hello Recipeprovider Provider');
  }

    getRecipe(){
  	return this.http.get('http://localhost/mobAppProj/viewrecipe.php').map(res => res.json());
  }

  searchRecipe(post){
  	return this.http.get('http://localhost/mobAppProj/viewrecipe.php').map(res => res.json());
  }

}
