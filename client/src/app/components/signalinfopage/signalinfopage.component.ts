import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';
import { SignalinfopageService } from '../../services/signalinfopage.service';
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-signalinfopage',
  templateUrl: './signalinfopage.component.html',
  styleUrls: ['./signalinfopage.component.css']
})
export class SignalinfopageComponent implements OnInit {

  signalTable: string;
  signalID: string;
  signal: any;
  signalDetails: any;
  timeframe: string;
  forecast: string;
  exchange: string;
  currency: string;
  tradeterm: string;
  public show:boolean = false;


  input = {
    _id: this.signalID,
    table: this.signalTable
  };

constructor(public signalinfopageService: SignalinfopageService, 
  public router: Router, public authSerivce:AuthService,
  public flashMessage:FlashMessagesService) { }

  ngOnInit() {

    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
      return;
    }

    this.signalTable = localStorage.getItem('mongoSignalrequestedTable');

    this.signalID = localStorage.getItem('mongoSignalrequestedSignalID');

    this.timeframe = localStorage.getItem('mongoSignaltimeframe');
    
    this.forecast = localStorage.getItem('mongoSignalForecast');

    this.exchange = localStorage.getItem('mongoSignalexchange');
    
    this.currency = localStorage.getItem('mongoSignalcurrency');
    this.tradeterm = localStorage.getItem('mongoSignaltradeterm');

    this.input._id = this.signalID;
    this.input.table = this.signalTable;

    // const input = {
    //   _id: this.signalID,
    //   table: this.signalTable
    // }

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


  this.signalinfopageService.getSignalinfopageProfile(this.input).subscribe(data => {

    this.signalDetails = data;
    console.log(data);

  });



}

addmorelikes(){

  this.show = !this.show;

  console.log("like button is clicked");
  
  this.signalinfopageService.addonemorelike(this.input).subscribe(data => {

    console.log(data);

  });
}



}