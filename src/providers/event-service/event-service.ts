import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the EventServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventServiceProvider {

  apiUrl: string;
  constructor(public http: Http) {
    this.apiUrl = 'http://api.cursodeionic.com.br';
  }

  getEvents() {
    //console.info(this.apiUrl + '/events');
    return this.http.get( this.apiUrl + '/events')
        .map(res => res.json())
        .catch((error: any) => Observable.throw(error.json.error) )
        ;
  }

}
