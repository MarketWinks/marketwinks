import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';
import { InfopageService } from '../../services/infopage.service';


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


    const inputforallsignalsalltimes = {
      symbol: this.symbol,
      exchange: this.exchange.toString()
    }
    
  this.infopageService.getallsignalsfor5minsbuy(inputforallsignalsalltimes).subscribe(data => {
    
    this.allsignalsfor5minsbuy = data;

    console.log("result");
    console.log(this.allsignalsfor5minsbuy);
        
    
      });

      
  this.infopageService.getallsignalsfor15minsbuy(inputforallsignalsalltimes).subscribe(data => {
    
    this.allsignalsfor15minsbuy = data;

    console.log("result");
    console.log(this.allsignalsfor15minsbuy);
        
    
      });



      this.infopageService.getallsignalsfor30minsbuy(inputforallsignalsalltimes).subscribe(data => {
    
        this.allsignalsfor30minsbuy = data;
    
        console.log("result");
        console.log(this.allsignalsfor30minsbuy);
            
        
          });

          
  this.infopageService.getallsignalsforhourlybuy(inputforallsignalsalltimes).subscribe(data => {
    
    this.allsignalsforhourlybuy = data;

    console.log("result");
    console.log(this.allsignalsforhourlybuy);
        
    
      });


      this.infopageService.getallsignalsfordailybuy(inputforallsignalsalltimes).subscribe(data => {
    
        this.allsignalsfordailybuy = data;
    
        console.log("result");
        console.log(this.allsignalsfordailybuy);
            
        
          });

          
  this.infopageService.getallsignalsforweeklybuy(inputforallsignalsalltimes).subscribe(data => {
    
    this.allsignalsforweeklybuy = data;

    console.log("result");
    console.log(this.allsignalsforweeklybuy);
        
    
      });

      
  this.infopageService.getallsignalsformonthlybuy(inputforallsignalsalltimes).subscribe(data => {
    
    this.allsignalsformonthlybuy = data;

    console.log("result");
    console.log(this.allsignalsformonthlybuy);
        
    
      });





      
  this.infopageService.getallsignalsfor5minssell(inputforallsignalsalltimes).subscribe(data => {
    
    this.allsignalsfor5minssell = data;

    console.log("result");
    console.log(this.allsignalsfor5minssell);
        
    
      });

      
  this.infopageService.getallsignalsfor15minssell(inputforallsignalsalltimes).subscribe(data => {
    
    this.allsignalsfor15minssell = data;

    console.log("result");
    console.log(this.allsignalsfor15minssell);
        
    
      });



      this.infopageService.getallsignalsfor30minssell(inputforallsignalsalltimes).subscribe(data => {
    
        this.allsignalsfor30minssell = data;
    
        console.log("result");
        console.log(this.allsignalsfor30minssell);
            
        
          });

          
  this.infopageService.getallsignalsforhourlysell(inputforallsignalsalltimes).subscribe(data => {
    
    this.allsignalsforhourlysell = data;

    console.log("result");
    console.log(this.allsignalsforhourlysell);
        
    
      });


      this.infopageService.getallsignalsfordailysell(inputforallsignalsalltimes).subscribe(data => {
    
        this.allsignalsfordailysell = data;
    
        console.log("result");
        console.log(this.allsignalsfordailysell);
            
        
          });

          
  this.infopageService.getallsignalsforweeklysell(inputforallsignalsalltimes).subscribe(data => {
    
    this.allsignalsforweeklysell = data;

    console.log("result");
    console.log(this.allsignalsforweeklysell);
        
    
      });

      
  this.infopageService.getallsignalsformonthlysell(inputforallsignalsalltimes).subscribe(data => {
    
    this.allsignalsformonthlysell = data;

    console.log("result");
    console.log(this.allsignalsformonthlysell);
        
    
      });





  });




}


}