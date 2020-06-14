import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InfopageService } from '../../../services/infopage.service';


@Component({
  selector: 'app-infopagemonthlybuy',
  templateUrl: './infopagemonthlybuy.component.html',
  styleUrls: ['./infopagemonthlybuy.component.css']
})

export class InfopageMonthlybuyComponent implements OnInit {
  
symbol: string;
symbolDetails: any;

allsignalsformonthlybuy: any;

exchange:any;



  constructor(public infopageService: InfopageService, public router: Router) { }

  ngOnInit() {

    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
      return;

    }

    

    if(localStorage.getItem('UserCategory') == "NONRENEW"){
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


      this.infopageService.getallsignalsformonthlybuy(inputforallsignalsalltimes).subscribe(data => {
    
        this.allsignalsformonthlybuy = data;
    
        console.log("result");
        console.log(this.allsignalsformonthlybuy);
            
        
          });

        });      




  }

  onLogout() {
    // this.userService.deleteToken();
    this.infopageService.deleteToken();
    this.router.navigate(['/login']);
  }

}
