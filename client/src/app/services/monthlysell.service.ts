import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { monthlysell } from './monthlysell.model';

@Injectable({
  providedIn: 'root'
})
export class MonthlysellService {
  selectedMonthlysell: monthlysell = {
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

  getMonthlysellProfile() {
    return this.http.get(environment.apiBaseUrl + '/monthlySellProfile');
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

  getMonthlysellPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var monthlysellPayload = atob(token.split('.')[1]);
      return JSON.parse(monthlysellPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var monthlysellPayload = this.getMonthlysellPayload();
    if (monthlysellPayload)
      return monthlysellPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
