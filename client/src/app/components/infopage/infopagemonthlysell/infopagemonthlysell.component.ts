import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InfopageService } from '../../../services/infopage.service';
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-infopagemonthlysell',
  templateUrl: './infopagemonthlysell.component.html',
  styleUrls: ['./infopagemonthlysell.component.css']
})

export class InfopageMonthlysellComponent implements OnInit {
  
symbol: string;
symbolDetails: any;

allsignalsformonthlysell: any;

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


      this.infopageService.getallsignalsformonthlysell(inputforallsignalsalltimes).subscribe(data => {
    
        this.allsignalsformonthlysell = data;
    
        console.log("result");
        console.log(this.allsignalsformonthlysell);
            
        
          });

        });      




  }

  onLogout() {
    // this.userService.deleteToken();
    this.infopageService.deleteToken();
    this.router.navigate(['/login']);
  }

}
