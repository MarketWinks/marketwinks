import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { hourlysell } from './hourlysell.model';

@Injectable({
  providedIn: 'root'
})
export class HourlysellService {
  selectedHourlysell: hourlysell = {
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

  getHourlysellProfile() {
    return this.http.get(environment.apiBaseUrl + '/hourlySellProfile');
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

  getHourlysellPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var hourlysellPayload = atob(token.split('.')[1]);
      return JSON.parse(hourlysellPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var hourlysellPayload = this.getHourlysellPayload();
    if (hourlysellPayload)
      return hourlysellPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
