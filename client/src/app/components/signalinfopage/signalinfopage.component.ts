import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';
import { SignalinfopageService } from '../../services/signalinfopage.service';
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { EncrDecrService } from 'src/app/services/encrdecr.service';

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
  public show: boolean = false;
  public addshow: boolean = false;


  input = {
    _id: this.signalID,
    table: this.signalTable
  };

  watchlistitem = {
    _id: this.signalID,
    table: this.signalTable,
    user: null,
    status: null

  };

  constructor(public signalinfopageService: SignalinfopageService,
    public router: Router, public authSerivce: AuthService,
    public flashMessage: FlashMessagesService,
    private EncrDecr: EncrDecrService) { }

  ngOnInit() {

    if (!localStorage.getItem('id_token')) {
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

  addmorelikes() {

    this.show = !this.show;

    console.log("like button is clicked");

    this.signalinfopageService.addonemorelike(this.input).subscribe(data => {

      console.log(data);

    });
  }

  addtowatchlist() {

    this.addshow = !this.addshow;


    this.watchlistitem._id = this.signalID;
    this.watchlistitem.table = this.signalTable;
    this.watchlistitem.user = this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_p0_'));

    this.watchlistitem.status = "ACTIVE";

    console.log("watchlist item is built");
    console.log(this.watchlistitem);


    this.signalinfopageService.additemtowatchlist(this.watchlistitem).subscribe(data => {

      console.log(data);

    });


  }


}