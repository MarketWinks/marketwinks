import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { useqmins5sell } from './useqmins5sell.model';

@Injectable({
  providedIn: 'root'
})
export class UseqMins5sellService {
  selectedMins5sell: useqmins5sell = {
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

  getMins5sellProfile() {
    return this.http.get(environment.apiBaseUrl + '/uS_5MinSellProfile');
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

  getMins5sellPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var mins5sellPayload = atob(token.split('.')[1]);
      return JSON.parse(mins5sellPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var mins5sellPayload = this.getMins5sellPayload();
    if (mins5sellPayload)
      return mins5sellPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
