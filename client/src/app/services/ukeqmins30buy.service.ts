import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ukeqmins30buy } from './ukeqmins30buy.model';

@Injectable({
  providedIn: 'root'
})
export class UkeqMins30buyService {
  selectedMins30buy: ukeqmins30buy = {
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

  getMins30buyProfile() {
    return this.http.get(environment.apiBaseUrl + '/uK_LSE_30MinBuyProfile');
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

  getMins30buyPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var mins30buyPayload = atob(token.split('.')[1]);
      return JSON.parse(mins30buyPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var mins30buyPayload = this.getMins30buyPayload();
    if (mins30buyPayload)
      return mins30buyPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
