import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { dailysell } from './dailysell.model';

@Injectable({
  providedIn: 'root'
})
export class DailysellService {
  selectedDailysell: dailysell = {
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

  getDailysellProfile() {
    return this.http.get(environment.apiBaseUrl + '/dailySellProfile');
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

  getDailysellPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var dailysellPayload = atob(token.split('.')[1]);
      return JSON.parse(dailysellPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var dailysellPayload = this.getDailysellPayload();
    if (dailysellPayload)
      return dailysellPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
