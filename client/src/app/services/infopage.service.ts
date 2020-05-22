import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { infopage } from './infopage.model';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {
  selectedInfopage: infopage = {
  symbol: '',
  title: '',
  content: '',
	time: '',
	url: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(public http: HttpClient) { }

  //HttpMethods

  getInfopageProfile(input) {
    return this.http.post(environment.apiBaseUrl + '/getSymbolDetailsProfile', input);
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

  getInfopagePayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var infopagePayload = atob(token.split('.')[1]);
      return JSON.parse(infopagePayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var infopagePayload = this.getInfopagePayload();
    if (infopagePayload)
      return infopagePayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
