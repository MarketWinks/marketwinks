import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InfopageService } from '../../../services/infopage.service';
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-infopagemins5buy',
  templateUrl: './infopagemins5buy.component.html',
  styleUrls: ['./infopagemins5buy.component.css']
})

export class Infopage5MinsbuyComponent implements OnInit {
  
symbol: string;
symbolDetails: any;

allsignalsfor5minsbuy: any;

exchange:any;



  constructor(public infopageService: InfopageService, public router: Router, private EncrDecr: EncrDecrService) { }

  ngOnInit() {

    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
      return;

    }

    

    if(this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "NONRENEW"){
      this.router.navigate(['/cart']);
      return;

    }

    
    this.symbol = localStorage.getItem('searchsymbol');

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

        });      




  }

  onLogout() {
    // this.userService.deleteToken();
    this.infopageService.deleteToken();
    this.router.navigate(['/login']);
  }

}
