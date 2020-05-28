import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UkeqDailybuyService } from '../../../services/ukeqdailybuy.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-ukeqdailybuy',
  templateUrl: './ukeqdailybuy.component.html',
  styleUrls: ['./ukeqdailybuy.component.css']
})

export class UkeqDailybuyComponent implements OnInit {
  //userDetails;
  dailybuyDetails;
  dailybuyDetailsUnique;
  dailybuyDetailsUniqueforTransitWork;
  dailybuyDetails_length;
  public searchString: string;
  dailybuyDetailsTransit;
  dailybuyDetailsTransit_length;
  dailybuyDetailsUniqueComparitor: any;

  //constructor(public userService: UserService, public router: Router) { }
  constructor(public dailybuyService: UkeqDailybuyService, public router: Router) { }

  ngOnInit() {

    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
      return;

    }
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

    

    if(localStorage.getItem('UserCategory') == "NONRENEW"){
      this.router.navigate(['/cart']);
      return;

    }

    this.dailybuyService.getDailybuyProfile().
      subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);

        console.log("RESPONSE_LENGTH");
        console.log(res.length);

        console.log("RESPONSE UNIQUE");


        this.dailybuyDetailsUnique = res;



        for (var i = 0; i < this.dailybuyDetailsUnique.length; i++) {

          if (this.dailybuyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("null found completed");


            console.log("before SPLICE");
            console.log(this.dailybuyDetailsUnique.length);

            this.dailybuyDetailsUnique.splice(i, 1);

            i = 0;

            console.log("after SPLICE");
            console.log(this.dailybuyDetailsUnique.length);



          }

        }

        console.log("dry run");
        for (var i = 0; i < this.dailybuyDetailsUnique.length; i++) {

          if (this.dailybuyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("dry run found bug");


          }

        }

        console.log("AFTER SPLICE");
        console.log(this.dailybuyDetailsUnique);


        this.dailybuyDetailsUnique.sort((obj1, obj2) => {

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
        this.dailybuyDetailsUniqueComparitor = this.dailybuyDetailsUnique;

        for (var i = 0, counter = 0; i < this.dailybuyDetailsUniqueComparitor.length; i++) {

          for (var j = this.dailybuyDetailsUnique.length - 1; j >= 0; j--) {

            if (this.dailybuyDetailsUniqueComparitor[i].company == this.dailybuyDetailsUnique[j].company) {
              counter++;

              if (counter > 1) {
                this.dailybuyDetailsUnique.splice(j, 1);
                console.log("splicing for uniqueness");
                counter = 0;
                j = this.dailybuyDetailsUnique.length;
              }


            }
          }
          counter = 0;
        }



        console.log(this.dailybuyDetailsUnique);


        console.log("RESPONSE unique new LENGTH");
        console.log(this.dailybuyDetailsUnique.length);








        this.dailybuyDetails_length = this.dailybuyDetailsUnique.length;
        this.dailybuyDetails = this.dailybuyDetailsUnique.reverse();
        this.dailybuyDetailsUniqueforTransitWork = this.dailybuyDetailsUnique;

        if(localStorage.getItem('UserCategory') == "TRIAL"){
          this.dailybuyDetails = this.dailybuyDetails.slice(0,3);

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

    this.dailybuyDetailsTransit = [];



    for (var i = 0; i < this.dailybuyDetailsUniqueforTransitWork.length; i++) {



      if (this.dailybuyDetailsUniqueforTransitWork[i].company.toString().toLocaleUpperCase() === this.searchString.toString().toLocaleUpperCase()) {

        this.dailybuyDetailsTransit[this.dailybuyDetailsTransit.length] = this.dailybuyDetailsUniqueforTransitWork[i];

      }

    }

    console.log(this.dailybuyDetailsTransit);
    this.dailybuyDetailsTransit_length = this.dailybuyDetailsTransit.length;

    // this.dailybuyDetails_length = this.dailybuyDetailsTransit.length;
    // this.dailybuyDetails = this.dailybuyDetailsTransit;

    document.getElementById('display').innerHTML = this.dailybuyDetailsTransit[this.dailybuyDetailsTransit.length - 1].company
      + " had a daily buy signal with a confidence level of " + this.dailybuyDetailsTransit[this.dailybuyDetailsTransit.length - 1].confidence_level
      + " on " +
      this.dailybuyDetailsTransit[this.dailybuyDetailsTransit.length - 1].lastBuyEvent;

  }

  onLogout() {
    // this.userService.deleteToken();
    this.dailybuyService.deleteToken();
    this.router.navigate(['/login']);
  }

}
