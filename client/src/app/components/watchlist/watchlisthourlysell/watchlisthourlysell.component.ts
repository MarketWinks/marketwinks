import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { WatchlistService } from '../../../services/watchlist.service';


@Component({
  selector: 'app-watchlisthourlysell',
  templateUrl: './watchlisthourlysell.component.html',
  styleUrls: ['./watchlisthourlysell.component.css']
})

export class WatchlistHourlysellComponent implements OnInit {

  symbolDetails: any;

  allsignalsforhourlysell: any;

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
      table: "uk_lse_hourlysells",
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
        table: "uk_lse_hourlysells",
        _id: jsonArrayObject
      }

      console.log(inputforallsignalsalltimes);

      this.watchlistService.getallsignalsforhourlysell(inputforallsignalsalltimes).subscribe(data => {

        this.allsignalsforhourlysell = data;

        console.log("result");
        console.log(this.allsignalsforhourlysell);


      });

    });




  }

  onLogout() {
    // this.userService.deleteToken();
    this.watchlistService.deleteToken();
    this.router.navigate(['/login']);
  }

}
