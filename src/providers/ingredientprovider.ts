import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Ingredientprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Ingredientprovide {

  constructor(public http: Http) {
    console.log('Hello Ingredientprovider Provider');
  }


   getIngredient(){
  	return this.http.get('http://localhost/mobAppProj/viewingredient.php').map(res => res.json());
  }

  searchIngredient(post){
  	return this.http.get('http://localhost/mobAppProj/viewingredient.php').map(res => res.json());
  }
}
