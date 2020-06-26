import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { signalinfopage } from './signalinfopage.model';
import { Http, Headers } from "@angular/http";
// import "rxjs/add/operator/map";
// import "rxjs/Rx";
import { map } from 'rxjs/operators';


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

  getSignalinfopageProfile(input) {
    console.log("sending this");
    console.log(input);
    console.log(environment.apiBaseUrl + '/getFullSignalDetailsProfile');
    return this.http.post(environment.apiBaseUrl + '/getFullSignalDetailsProfile', input);


  }

  
  
  addonemorelike(input) {
    console.log("sending this");
    console.log(input);
    console.log(environment.apiBaseUrl + '/addonemorelike');
    console.log(this.http.post(environment.apiBaseUrl + '/addonemorelike', input));
    return this.http.post(environment.apiBaseUrl + '/addonemorelike', input);


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
