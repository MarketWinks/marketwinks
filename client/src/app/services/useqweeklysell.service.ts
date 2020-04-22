import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { useqweeklysell } from './useqweeklysell.model';

@Injectable({
  providedIn: 'root'
})
export class UseqWeeklysellService {
  selectedWeeklysell: useqweeklysell = {
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

  getWeeklysellProfile() {
    return this.http.get(environment.apiBaseUrl + '/uS_WeeklySellProfile');
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

  getWeeklysellPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var weeklysellPayload = atob(token.split('.')[1]);
      return JSON.parse(weeklysellPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var weeklysellPayload = this.getWeeklysellPayload();
    if (weeklysellPayload)
      return weeklysellPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
