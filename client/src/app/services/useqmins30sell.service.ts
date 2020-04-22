import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { useqmins30sell } from './useqmins30sell.model';

@Injectable({
  providedIn: 'root'
})
export class UseqMins30sellService {
  selectedMins30sell: useqmins30sell = {
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

  getMins30sellProfile() {
    return this.http.get(environment.apiBaseUrl + '/uS_30MinSellProfile');
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

  getMins30sellPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var mins30sellPayload = atob(token.split('.')[1]);
      return JSON.parse(mins30sellPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var mins30sellPayload = this.getMins30sellPayload();
    if (mins30sellPayload)
      return mins30sellPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
