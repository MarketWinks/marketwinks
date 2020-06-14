import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';
import { InfopageService } from '../../services/infopage.service';

declare const TradingView: any;

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.css']
})


export class InfopageComponent implements OnInit {

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

constructor(public infopageService: InfopageService, 
  public router: Router, public authSerivce:AuthService,
  public flashMessage:FlashMessagesService) { }

  ngOnInit() {
  
    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
      return;
    }

    this.symbol = localStorage.getItem('searchsymbol');

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

  
  const input = {
    symbol: this.symbol
  }

  this.infopageService.getInfopageProfile(input).subscribe(data => {

console.log(input);
    this.symbolDetails = data[0];
    this.exchange = data[0].exchange;
    console.log("sending this othe her yu go");
    console.log(this.exchange.toString());




      //setTimeout(function() {
  // tslint:disable-next-line: no-unused-expression
  new TradingView.widget(
    {
    "autosize": true,
    "symbol": this.exchange.toString()+":"+this.symbol.toString(),
    "interval": "5",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "withdateranges": true,
    "hide_side_toolbar": false,
    "details": true,
    "calendar": true,
    "news": [
      "stocktwits",
      "headlines"
    ],
    "container_id": "tradingview_24050",
    "id": "tradingview_24050"
  }
    );
//}, 1000);







  });




}


}