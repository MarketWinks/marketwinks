import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { WatchlistService } from '../../../services/watchlist.service';


@Component({
  selector: 'app-watchlistmins5sell',
  templateUrl: './watchlistmins5sell.component.html',
  styleUrls: ['./watchlistmins5sell.component.css']
})

export class Watchlist5MinssellComponent implements OnInit {

  symbol: string;
  symbolDetails: any;

  allsignalsfor5minssell: any;

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
      table: "uk_lse_5minsells",
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
        table: "uk_lse_5minsells",
        _id: jsonArrayObject
      }

      console.log(inputforallsignalsalltimes);


      this.watchlistService.getallsignalsfor5minssell(inputforallsignalsalltimes).subscribe(data => {

        this.allsignalsfor5minssell = data;

        console.log("result");
        console.log(this.allsignalsfor5minssell);


      });

    });




  }

  onLogout() {
    // this.userService.deleteToken();
    this.watchlistService.deleteToken();
    this.router.navigate(['/login']);
  }

}