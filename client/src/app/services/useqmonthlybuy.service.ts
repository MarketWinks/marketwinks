import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { useqmonthlybuy } from './useqmonthlybuy.model';

@Injectable({
  providedIn: 'root'
})
export class UseqMonthlybuyService {
  selectedMonthlybuy: useqmonthlybuy = {
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

  getMonthlybuyProfile() {
    return this.http.get(environment.apiBaseUrl + '/uS_MonthlyBuyProfile');
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

  getMonthlybuyPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var monthlybuyPayload = atob(token.split('.')[1]);
      return JSON.parse(monthlybuyPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var monthlybuyPayload = this.getMonthlybuyPayload();
    if (monthlybuyPayload)
      return monthlybuyPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
