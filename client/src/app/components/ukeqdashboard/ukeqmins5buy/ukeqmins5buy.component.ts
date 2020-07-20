import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UkeqMins5buyService } from '../../../services/ukeqmins5buy.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { environment } from 'src/environments/environment';

import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-ukeqmins5buy',
  templateUrl: './ukeqmins5buy.component.html',
  styleUrls: ['./ukeqmins5buy.component.css']
})

export class UkeqMins5buyComponent implements OnInit {
  //userDetails;
  mins5buyDetails;
  mins5buyDetailsUnique;
  mins5buyDetailsUniqueforTransitWork;
  mins5buyDetails_length;
  public searchString: string;
  mins5buyDetailsTransit;
  mins5buyDetailsTransit_length;
  mins5buyDetailsUniqueComparitor: any;

  //constructor(public userService: UserService, public router: Router, private EncrDecr: EncrDecrService) { }
  constructor(public mins5buyService: UkeqMins5buyService, public router: Router, private EncrDecr: EncrDecrService) { }

  ngOnInit() {
    // this.userService.getUserProfile().subscribe(
    //   res => {
    //   console.log("RESPONSE");
    //     console.log(res['user']);
    //     this.userDetails = res['user'];
    //   },
    //   err => { 
    //     console.log(err);

    //   }
    //  ),

    
    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
      return;

    }

    if(this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "NONRENEW"){
      this.router.navigate(['/cart']);
      return;

    }
    this.mins5buyService.getMins5buyProfile().
      subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);

        console.log("RESPONSE_LENGTH");
        console.log(res.length);

        console.log("RESPONSE UNIQUE");


        this.mins5buyDetailsUnique = res;



        for (var i = 0; i < this.mins5buyDetailsUnique.length; i++) {

          if (this.mins5buyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("null found completed");


            console.log("before SPLICE");
            console.log(this.mins5buyDetailsUnique.length);

            this.mins5buyDetailsUnique.splice(i, 1);

            i = 0;

            console.log("after SPLICE");
            console.log(this.mins5buyDetailsUnique.length);



          }

        }

        console.log("dry run");
        for (var i = 0; i < this.mins5buyDetailsUnique.length; i++) {

          if (this.mins5buyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("dry run found bug");


          }

        }

        console.log("AFTER SPLICE");
        console.log(this.mins5buyDetailsUnique);


        this.mins5buyDetailsUnique.sort((obj1, obj2) => {

          if (new Date(obj1.lastBuyEvent.toString()).getTime() > new Date(obj2.lastBuyEvent.toString())
            .getTime()) {
            return 1;
          }

          if (new Date(obj1.lastBuyEvent.toString()).getTime() < new Date(obj2.lastBuyEvent.toString())
            .getTime()) {
            return -1;
          }

          return 0;
        });

        // //removal of duplicates
        this.mins5buyDetailsUniqueComparitor = this.mins5buyDetailsUnique;

        for (var i = 0, counter = 0; i < this.mins5buyDetailsUniqueComparitor.length; i++) {

          for (var j = this.mins5buyDetailsUnique.length - 1; j >= 0; j--) {

            if (this.mins5buyDetailsUniqueComparitor[i].company == this.mins5buyDetailsUnique[j].company) {
              counter++;

              if (counter > 1) {
                this.mins5buyDetailsUnique.splice(j, 1);
                console.log("splicing for uniqueness");
                counter = 0;
                j = this.mins5buyDetailsUnique.length;
              }


            }
          }
          counter = 0;
        }



        console.log(this.mins5buyDetailsUnique);


        console.log("RESPONSE unique new LENGTH");
        console.log(this.mins5buyDetailsUnique.length);








        this.mins5buyDetails_length = this.mins5buyDetailsUnique.length;
        this.mins5buyDetails = this.mins5buyDetailsUnique.reverse();
        this.mins5buyDetailsUniqueforTransitWork = this.mins5buyDetailsUnique;


        if(this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "TRIAL"){
          this.mins5buyDetails = this.mins5buyDetails.slice(0,3);

        }
        



      },
        err => {
          console.log(err);

        }
      );
  }

  OnSubmit() {
    console.log("search string is:")
    console.log(this.searchString);

    this.mins5buyDetailsTransit = [];



    for (var i = 0; i < this.mins5buyDetailsUniqueforTransitWork.length; i++) {



      if (this.mins5buyDetailsUniqueforTransitWork[i].company.toString().toLocaleUpperCase() === this.searchString.toString().toLocaleUpperCase()) {

        this.mins5buyDetailsTransit[this.mins5buyDetailsTransit.length] = this.mins5buyDetailsUniqueforTransitWork[i];

      }

    }

    console.log(this.mins5buyDetailsTransit);
    this.mins5buyDetailsTransit_length = this.mins5buyDetailsTransit.length;

    // this.mins5buyDetails_length = this.mins5buyDetailsTransit.length;
    // this.mins5buyDetails = this.mins5buyDetailsTransit;

    document.getElementById('display').innerHTML = this.mins5buyDetailsTransit[this.mins5buyDetailsTransit.length - 1].company
      + " had a mins5 buy signal with a confidence level of " + this.mins5buyDetailsTransit[this.mins5buyDetailsTransit.length - 1].confidence_level
      + " on " +
      this.mins5buyDetailsTransit[this.mins5buyDetailsTransit.length - 1].lastBuyEvent;

  }

  onLogout() {
    // this.userService.deleteToken();
    this.mins5buyService.deleteToken();
    this.router.navigate(['/login']);
  }


  navigateToSignalInfoPage(mins5buyDetails_idparameter){
    
    localStorage.setItem('mongoSignaltimeframe', "5 Mins");
    
    localStorage.setItem('mongoSignalForecast', "BUY/LONG");

    localStorage.setItem('mongoSignalexchange', "UK : LSE : EQ");

    
    localStorage.setItem('mongoSignalcurrency', "GBX");

    localStorage.setItem('mongoSignaltradeterm', "Short Term");
    localStorage.setItem('mongoSignalrequestedTable', "uk_lse_5minbuys");
    localStorage.setItem('mongoSignalrequestedSignalID', mins5buyDetails_idparameter);
    this.router.navigate(['/signalinfopage']);
  }

}
