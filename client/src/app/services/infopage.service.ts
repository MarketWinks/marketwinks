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


  
  getallsignalsfor5minsbuy(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_5minbuys",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }

  
  getallsignalsfor15minsbuy(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_15minbuys",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }


  
  getallsignalsfor30minsbuy(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_30minbuys",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }


  
  getallsignalsforhourlybuy(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_hourlybuys",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }


  
  getallsignalsfordailybuy(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_dailybuys",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }
  getallsignalsforweeklybuy(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_weeklybuys",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }
  
  getallsignalsformonthlybuy(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_monthlybuys",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }







  
  getallsignalsfor5minssell(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_5minsells",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }

  
  getallsignalsfor15minssell(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_15minsells",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }


  
  getallsignalsfor30minssell(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_30minsells",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }


  
  getallsignalsforhourlysell(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_hourlysells",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }


  
  getallsignalsfordailysell(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_dailysells",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }
  getallsignalsforweeklysell(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_weeklysells",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

  }
  
  getallsignalsformonthlysell(input){

    console.log("reached service point");
    if (input.exchange == "LSE"){

      const tableinput = {
        table: "uk_lse_monthlysells",
        symbol: input.symbol
      }
    
    return this.http.post(environment.apiBaseUrl + '/getAllSignalsForSymbolDetailsProfile', tableinput);
  }

  

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

  deleteToken() {
    localStorage.removeItem('token');
  }


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
