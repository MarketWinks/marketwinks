import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchlistService } from '../../../services/watchlist.service';


@Component({
  selector: 'app-watchlistdailysell',
  templateUrl: './watchlistdailysell.component.html',
  styleUrls: ['./watchlistdailysell.component.css']
})

export class WatchlistDailysellComponent implements OnInit {

  symbol: string;
  symbolDetails: any;

  allsignalsfordailysell: any;

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



    if (localStorage.getItem('UserCategory') == 'NONRENEW') {
      this.router.navigate(['/cart']);
      return;

    }


    this.user = localStorage.getItem('user');

    const input = {
      user: this.user,
      table: 'uk_lse_dailysells',
      status: 'ACTIVE'
    };

    this.watchlistService.getWatchlistProfile(input).subscribe(data => {

      this.watchlistService.getWatchlistProfile(input).subscribe((data: any[]) => {
        console.log(data);
        this.outputdata = data;

        const jsonArrayObject = [];

        for (let i = 0; i < this.outputdata.length; i++) {

          this.outputextract = Array.from(new Set(this.outputdata.map(a => a.id)))
            .map(id => {
              return this.outputdata.find(a => a.id === id);
            });


          jsonArrayObject.push(this.outputextract[i].id);
        }

        console.log(jsonArrayObject);

        const inputforallsignalsalltimes = {
          table: 'uk_lse_dailysells',
          _id: jsonArrayObject
        };

        console.log(inputforallsignalsalltimes);



        this.watchlistService.getallsignalsfordailysell(inputforallsignalsalltimes).subscribe(data => {

          this.allsignalsfordailysell = data;

          console.log('result');
          console.log(this.allsignalsfordailysell);

        });

      });




    });
  }

  onLogout() {
    // this.userService.deleteToken();
    this.watchlistService.deleteToken();
    this.router.navigate(['/login']);
  }

}