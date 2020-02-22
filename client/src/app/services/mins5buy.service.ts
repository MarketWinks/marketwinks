import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { mins5buy } from './mins5buy.model';

@Injectable({
  providedIn: 'root'
})
export class Mins5buyService {
  selectedMins5buy: mins5buy = {
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

  getMins5buyProfile() {
    return this.http.get(environment.apiBaseUrl + '/mins5BuyProfile');
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

  getMins5buyPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var mins5buyPayload = atob(token.split('.')[1]);
      return JSON.parse(mins5buyPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var mins5buyPayload = this.getMins5buyPayload();
    if (mins5buyPayload)
      return mins5buyPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
