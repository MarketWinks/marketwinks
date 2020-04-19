import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ukeqhourlybuy } from './ukeqhourlybuy.model';

@Injectable({
  providedIn: 'root'
})
export class UkeqHourlybuyService {
  selectedHourlybuy: ukeqhourlybuy = {
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

  getHourlybuyProfile() {
    return this.http.get(environment.apiBaseUrl + '/uK_LSE_HourlyBuyProfile');
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

  getHourlybuyPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var hourlybuyPayload = atob(token.split('.')[1]);
      return JSON.parse(hourlybuyPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var hourlybuyPayload = this.getHourlybuyPayload();
    if (hourlybuyPayload)
      return hourlybuyPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
