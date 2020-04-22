import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { useqdailybuy } from './useqdailybuy.model';

@Injectable({
  providedIn: 'root'
})
export class UseqDailybuyService {
  selectedDailybuy: useqdailybuy = {
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

  getDailybuyProfile() {
    return this.http.get(environment.apiBaseUrl + '/uS_DailyBuyProfile');
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

  getDailybuyPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var dailybuyPayload = atob(token.split('.')[1]);
      return JSON.parse(dailybuyPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var dailybuyPayload = this.getDailybuyPayload();
    if (dailybuyPayload)
      return dailybuyPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
