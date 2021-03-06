import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Steps provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Steps {

  constructor(public http: Http) {
    console.log('Hello Steps Provider');
  }


getStep(){
  	return this.http.get('http://localhost/mobAppProj/viewsteps.php').map(res => res.json());
  }

  searchStep(post){
  	return this.http.get('http://localhost/mobAppProj/viewsteps.php').map(res => res.json());
  }
}
