import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { rssfeedNewsArticle } from './rssfeedNewsArticle.model';

@Injectable({
  providedIn: 'root'
})
export class RssfeedNewsArticleService {
  selectedRssfeedNewsArticle: rssfeedNewsArticle = {
  symbol: '',
  title: '',
  content: '',
	time: '',
	url: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(public http: HttpClient) { }

  //HttpMethods

  getRssfeedNewsArticleProfile() {
    return this.http.get(environment.apiBaseUrl + '/rssfeedNewsArticleProfile');
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

  getRssfeedNewsArticlePayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var rssfeedNewsArticlePayload = atob(token.split('.')[1]);
      return JSON.parse(rssfeedNewsArticlePayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var rssfeedNewsArticlePayload = this.getRssfeedNewsArticlePayload();
    if (rssfeedNewsArticlePayload)
      return rssfeedNewsArticlePayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
