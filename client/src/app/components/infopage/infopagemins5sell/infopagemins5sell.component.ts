import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InfopageService } from '../../../services/infopage.service';


@Component({
  selector: 'app-infopagemins5sell',
  templateUrl: './infopagemins5sell.component.html',
  styleUrls: ['./infopagemins5sell.component.css']
})

export class Infopage5MinssellComponent implements OnInit {
  
symbol: string;
symbolDetails: any;

allsignalsfor5minssell: any;

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


      this.infopageService.getallsignalsfor5minssell(inputforallsignalsalltimes).subscribe(data => {
    
        this.allsignalsfor5minssell = data;
    
        console.log("result");
        console.log(this.allsignalsfor5minssell);
            
        
          });

        });      




  }

  onLogout() {
    // this.userService.deleteToken();
    this.infopageService.deleteToken();
    this.router.navigate(['/login']);
  }

}
