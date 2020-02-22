import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { mins15buy } from './mins15buy.model';

@Injectable({
  providedIn: 'root'
})
export class Mins15buyService {
  selectedMins15buy: mins15buy = {
  month: '',
  year: '',
  company: '',
	indicator: '',
	confidence_level: '',
	lastBuyEvent: '',
	lastBuyPrice: '',
	lastEvent: '',
	isLastEventBuy: '',
	lastEventPrice: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(public http: HttpClient) { }

  //HttpMethods

  getMins15buyProfile() {
    return this.http.get(environment.apiBaseUrl + '/mins15BuyProfile');
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

  getMins15buyPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var mins15buyPayload = atob(token.split('.')[1]);
      return JSON.parse(mins15buyPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var mins15buyPayload = this.getMins15buyPayload();
    if (mins15buyPayload)
      return mins15buyPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
