import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { signalinfopage } from './signalinfopage.model';

@Injectable({
  providedIn: 'root'
})
export class SignalinfopageService {
  selectedSignalinfopage: signalinfopage = {
  symbol: '',
  title: '',
  content: '',
	time: '',
	url: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(public http: HttpClient) { }

  //HttpMethods

  getSignalinfopageProfile() {
    return this.http.get(environment.apiBaseUrl + '/signalinfopageProfile');
  }

  // getLivePrice(){
  //   return this.http.get('http://localhost:8085/baseURL/LSEDailyMarketFeedPriceService/KAZ');

  // }
  //Helper Methods

  // setToken(token: string) {
  //   localStorage.setItem('token', token);
  // }

  getToken() {
    return localStorage.getItem('token');
  }

  // deleteToken() {
  //   localStorage.removeItem('token');
  // }

  getSignalinfopagePayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var signalinfopagePayload = atob(token.split('.')[1]);
      return JSON.parse(signalinfopagePayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var signalinfopagePayload = this.getSignalinfopagePayload();
    if (signalinfopagePayload)
      return signalinfopagePayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
