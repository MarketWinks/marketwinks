import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { mins15sell } from './mins15sell.model';

@Injectable({
  providedIn: 'root'
})
export class Mins15sellService {
  selectedMins15sell: mins15sell = {
  month: '',
  year: '',
  company: '',
	indicator: '',
	confidence_level: '',
	lastSellEvent: '',
	lastSellPrice: '',
	lastEvent: '',
	isLastEventSell: '',
	lastEventPrice: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(public http: HttpClient) { }

  //HttpMethods

  getMins15sellProfile() {
    return this.http.get(environment.apiBaseUrl + '/mins15SellProfile');
  }

  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getMins15sellPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var mins15sellPayload = atob(token.split('.')[1]);
      return JSON.parse(mins15sellPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var mins15sellPayload = this.getMins15sellPayload();
    if (mins15sellPayload)
      return mins15sellPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
