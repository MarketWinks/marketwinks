import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { WatchlistService } from '../../../services/watchlist.service';
import { AuthService } from "../../../services/auth.service";
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-watchlistmonthlybuy',
  templateUrl: './watchlistmonthlybuy.component.html',
  styleUrls: ['./watchlistmonthlybuy.component.css']
})

export class WatchlistMonthlybuyComponent implements OnInit {
  
symbolDetails: any;

allsignalsformonthlybuy: any;

exchange:any;
outputdata:any;
outputextract:any;
user: string;


  constructor(public watchlistService: WatchlistService, 
    public authSerivce:AuthService,
    public router: Router,
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

    this.user = this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_p0_'));
    
    
    const input = {
      user: this.user,
      table: "uk_lse_monthlybuys",
      status: "ACTIVE"
    }

    this.watchlistService.getWatchlistProfile(input).subscribe((data: any[]) => {
      console.log(data);
      this.outputdata = data;

      let jsonArrayObject = [];

      for(var i=0;i<this.outputdata.length;i++){
      
        this.outputextract = Array.from(new Set(this.outputdata.map(a => a.id)))
      .map(id => {
        return this.outputdata.find(a => a.id === id)
      });


        jsonArrayObject.push(this.outputextract[i].id);
      }

      console.log(jsonArrayObject);
        
    const inputforallsignalsalltimes = {
      table: "uk_lse_monthlybuys",
      _id: jsonArrayObject
    }

console.log(inputforallsignalsalltimes);

      this.watchlistService.getallsignalsformonthlybuy(inputforallsignalsalltimes).subscribe(data => {
    
        this.allsignalsformonthlybuy = data;
    
        console.log("result");
        console.log(this.allsignalsformonthlybuy);
            
        
          });

        });      

      


  }

  onLogout() {
    // this.userService.deleteToken();
    this.watchlistService.deleteToken();
    this.router.navigate(['/login']);
  }

}
