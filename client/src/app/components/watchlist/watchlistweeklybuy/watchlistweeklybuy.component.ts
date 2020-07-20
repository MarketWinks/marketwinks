import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { WatchlistService } from '../../../services/watchlist.service';
import { AuthService } from "../../../services/auth.service";
import { EncrDecrService } from 'src/app/services/encrdecr.service';


@Component({
  selector: 'app-watchlistweeklybuy',
  templateUrl: './watchlistweeklybuy.component.html',
  styleUrls: ['./watchlistweeklybuy.component.css']
})

export class WatchlistWeeklybuyComponent implements OnInit {

  symbolDetails: any;

  allsignalsforweeklybuy: any;

  exchange: any;
  outputdata: any;
  outputextract: any;
  user: string;


  constructor(public watchlistService: WatchlistService,
    public authSerivce: AuthService,
    public router: Router,
    private EncrDecr: EncrDecrService) { }

  ngOnInit() {

    if (!localStorage.getItem('id_token')) {
      this.router.navigate(['/login']);
      return;

    }



    if (localStorage.getItem('UserCategory') == "NONRENEW") {
      this.router.navigate(['/cart']);
      return;

    }

    this.user = this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_p0_'));


    const input = {
      user: this.user,
      table: "uk_lse_weeklybuys",
      status: "ACTIVE"
    }

    this.watchlistService.getWatchlistProfile(input).subscribe((data: any[]) => {
      console.log(data);
      this.outputdata = data;

      let jsonArrayObject = [];

      for (var i = 0; i < this.outputdata.length; i++) {

        this.outputextract = Array.from(new Set(this.outputdata.map(a => a.id)))
          .map(id => {
            return this.outputdata.find(a => a.id === id)
          });


        jsonArrayObject.push(this.outputextract[i].id);
      }

      console.log(jsonArrayObject);

      const inputforallsignalsalltimes = {
        table: "uk_lse_weeklybuys",
        _id: jsonArrayObject
      }

      console.log(inputforallsignalsalltimes);

      this.watchlistService.getallsignalsforweeklybuy(inputforallsignalsalltimes).subscribe(data => {

        this.allsignalsforweeklybuy = data;

        console.log("result");
        console.log(this.allsignalsforweeklybuy);


      });

    });




  }

  onLogout() {
    // this.userService.deleteToken();
    this.watchlistService.deleteToken();
    this.router.navigate(['/login']);
  }

}
