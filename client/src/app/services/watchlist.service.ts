import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { watchlist } from './watchlist.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  selectedWatchlist: watchlist = {
    user: '',
    table: '',
    id: '',
    status: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(public http: HttpClient) { }

  //HttpMethods

  getWatchlistProfile(input) {
    return this.http.post(environment.apiBaseUrl + '/getlistofWatchlistIDs', input);
  }



  getallsignalsfor5minsbuy(input) {

    if (input.table == "uk_lse_5minbuys") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }


  }


  getallsignalsfor15minsbuy(input) {

    if (input.table == "uk_lse_15minbuys") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }


  }



  getallsignalsfor30minsbuy(input) {

    if (input.table == "uk_lse_30minbuys") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }


  }



  getallsignalsforhourlybuy(input) {
    if (input.table == "uk_lse_hourlybuys") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }


  }



  getallsignalsfordailybuy(input) {

    if (input.table == "uk_lse_dailybuys") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }



  }
  getallsignalsforweeklybuy(input) {

    if (input.table == "uk_lse_weeklybuys") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }


  }

  getallsignalsformonthlybuy(input) {
    if (input.table == "uk_lse_monthlybuys") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }



  }








  getallsignalsfor5minssell(input) {
    if (input.table == "uk_lse_5minsells") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }



  }


  getallsignalsfor15minssell(input) {

    if (input.table == "uk_lse_15minsells") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }

  }



  getallsignalsfor30minssell(input) {

    if (input.table == "uk_lse_30minsells") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }


  }



  getallsignalsforhourlysell(input) {

    if (input.table == "uk_lse_hourlysells") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }


  }



  getallsignalsfordailysell(input) {

    if (input.table == "uk_lse_dailysells") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }

  }
  getallsignalsforweeklysell(input) {

    if (input.table == "uk_lse_weeklysells") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }


  }

  getallsignalsformonthlysell(input) {

    if (input.table == "uk_lse_monthlysells") {
      const tableinput = {
        table: input.table,
        _id: input._id
      }

      return this.http.post(environment.apiBaseUrl + '/getAllSignalsForAllIDsProfile', tableinput);
    }

  }





  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }


  getWatchlistPayload() {
    var token = this.getToken();
    console.log("Here is the token:");
    console.log(token);
    if (token) {
      var watchlistPayload = atob(token.split('.')[1]);
      return JSON.parse(watchlistPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var watchlistPayload = this.getWatchlistPayload();
    if (watchlistPayload)
      return watchlistPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
