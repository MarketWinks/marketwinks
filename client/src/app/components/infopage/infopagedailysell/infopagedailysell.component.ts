import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InfopageService } from '../../../services/infopage.service';
import { EncrDecrService } from 'src/app/services/encrdecr.service';


@Component({
  selector: 'app-infopagedailysell',
  templateUrl: './infopagedailysell.component.html',
  styleUrls: ['./infopagedailysell.component.css']
})

export class InfopageDailysellComponent implements OnInit {
  
symbol: string;
symbolDetails: any;

allsignalsfordailysell: any;

exchange:any;



  constructor(public infopageService: InfopageService, public router: Router,
    private EncrDecr: EncrDecrService) { }


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


      this.infopageService.getallsignalsfordailysell(inputforallsignalsalltimes).subscribe(data => {
    
        this.allsignalsfordailysell = data;
    
        console.log("result");
        console.log(this.allsignalsfordailysell);
            
        
          });

        });      




  }

  onLogout() {
    // this.userService.deleteToken();
    this.infopageService.deleteToken();
    this.router.navigate(['/login']);
  }

}
