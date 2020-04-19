import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ukeqweeklybuy } from './ukeqweeklybuy.model';

@Injectable({
  providedIn: 'root'
})
export class UkeqWeeklybuyService {
  selectedWeeklybuy: ukeqweeklybuy = {
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

  getWeeklybuyProfile() {
    return this.http.get(environment.apiBaseUrl + '/uK_LSE_WeeklyBuyProfile');
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

  getWeeklybuyPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var weeklybuyPayload = atob(token.split('.')[1]);
      return JSON.parse(weeklybuyPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var weeklybuyPayload = this.getWeeklybuyPayload();
    if (weeklybuyPayload)
      return weeklybuyPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
