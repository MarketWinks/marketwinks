import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { WatchlistService } from '../../../services/watchlist.service';


@Component({
  selector: 'app-watchlistmins15sell',
  templateUrl: './watchlistmins15sell.component.html',
  styleUrls: ['./watchlistmins15sell.component.css']
})

export class Watchlist15MinssellComponent implements OnInit {

  symbol: string;
  symbolDetails: any;

  allsignalsfor15minssell: any;

  exchange: any;
  outputdata: any;
  outputextract: any;
  user: string;





  constructor(public watchlistService: WatchlistService, public router: Router) { }

  ngOnInit() {

    if (!localStorage.getItem('id_token')) {
      this.router.navigate(['/login']);
      return;

    }



    if (localStorage.getItem('UserCategory') == "NONRENEW") {
      this.router.navigate(['/cart']);
      return;

    }


    this.user = localStorage.getItem('user');

    const input = {
      user: this.user,
      table: "uk_lse_15minsells",
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
        table: "uk_lse_15minsells",
        _id: jsonArrayObject
      }

      console.log(inputforallsignalsalltimes);


      this.watchlistService.getallsignalsfor15minssell(inputforallsignalsalltimes).subscribe(data => {

        this.allsignalsfor15minssell = data;

        console.log("result");
        console.log(this.allsignalsfor15minssell);


      });

    });




  }

  onLogout() {
    // this.userService.deleteToken();
    this.watchlistService.deleteToken();
    this.router.navigate(['/login']);
  }

}
