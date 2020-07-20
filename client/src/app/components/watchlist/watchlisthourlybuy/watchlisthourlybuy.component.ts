import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { WatchlistService } from '../../../services/watchlist.service';
import { AuthService } from "../../../services/auth.service";
import { EncrDecrService } from 'src/app/services/encrdecr.service';





@Component({
  selector: 'app-watchlisthourlybuy',
  templateUrl: './watchlisthourlybuy.component.html',
  styleUrls: ['./watchlisthourlybuy.component.css']
})

export class WatchlistHourlybuyComponent implements OnInit {

  symbolDetails: any;

  allsignalsforhourlybuy: any;

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



    if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "NONRENEW") {
      this.router.navigate(['/cart']);
      return;

    }

    this.user = this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_p0_'));

    const input = {
      user: this.user,
      table: "uk_lse_hourlybuys",
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
        table: "uk_lse_hourlybuys",
        _id: jsonArrayObject
      }

      console.log(inputforallsignalsalltimes);

      this.watchlistService.getallsignalsforhourlybuy(inputforallsignalsalltimes).subscribe(data => {

        this.allsignalsforhourlybuy = data;

        console.log("result");
        console.log(this.allsignalsforhourlybuy);


      });

    });




  }

  onLogout() {
    // this.userService.deleteToken();
    this.watchlistService.deleteToken();
    this.router.navigate(['/login']);
  }

}
