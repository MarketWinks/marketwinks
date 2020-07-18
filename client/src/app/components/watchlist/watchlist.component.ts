import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';
import { WatchlistService } from '../../services/watchlist.service';

declare const TradingView: any;

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})


export class WatchlistComponent implements OnInit {

  symbol: string;
symbolDetails: any;

allsignalsfor5minsbuy: any;
allsignalsfor15minsbuy: any;
allsignalsfor30minsbuy: any;
allsignalsforhourlybuy: any;
allsignalsfordailybuy: any;
allsignalsforweeklybuy: any;
allsignalsformonthlybuy: any;


allsignalsfor5minssell: any;
allsignalsfor15minssell: any;
allsignalsfor30minssell: any;
allsignalsforhourlysell: any;
allsignalsfordailysell: any;
allsignalsforweeklysell: any;
allsignalsformonthlysell: any;

exchange:any;

constructor(public watchlistService: WatchlistService, 
  public router: Router, public authSerivce:AuthService,
  public flashMessage:FlashMessagesService) { }

  ngOnInit() {
  
    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
      return;
    }

   // this.symbol = localStorage.getItem('searchsymbol');

  //   this.authSerivce.getSymbolDetails(this.email.toString()).subscribe((data: any[]) =>{
  //   this.profile = data[0];

  //   console.log(data[0]);

  //   this._id = this.profile._id;
  //   this.name = this.profile.name;
  //   this.location = this.profile.location;
  //   this.mobile =  this.profile.mobile;
  //   this.dateOfBirth =  this.profile.dateOfBirth;
  //   this.occupation =  this.profile.occupation;
    
  // })

  
//   const input = {
//     symbol: this.symbol
//   }

//   this.watchlistService.getWatchlistProfile(input).subscribe(data => {

// console.log(input);
//     this.symbolDetails = data[0];
//     this.exchange = data[0].exchange;
//     console.log("sending this othe her yu go");
//     console.log(this.exchange.toString());











//   });




}


}