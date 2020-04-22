import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UseqMonthlybuyService } from '../../../services/useqmonthlybuy.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-useqmonthlybuy',
  templateUrl: './useqmonthlybuy.component.html',
  styleUrls: ['./useqmonthlybuy.component.css']
})

export class UseqMonthlybuyComponent implements OnInit {
  //userDetails;
  monthlybuyDetails;
  monthlybuyDetailsUnique;
  monthlybuyDetailsUniqueforTransitWork;
  monthlybuyDetails_length;
  public searchString: string;
  monthlybuyDetailsTransit;
  monthlybuyDetailsTransit_length;
  monthlybuyDetailsUniqueComparitor: any;

  //constructor(public userService: UserService, public router: Router) { }
  constructor(public monthlybuyService: UseqMonthlybuyService, public router: Router) { }

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

    this.monthlybuyService.getMonthlybuyProfile().
      subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);

        console.log("RESPONSE_LENGTH");
        console.log(res.length);

        console.log("RESPONSE UNIQUE");


        this.monthlybuyDetailsUnique = res;



        for (var i = 0; i < this.monthlybuyDetailsUnique.length; i++) {

          if (this.monthlybuyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("null found completed");


            console.log("before SPLICE");
            console.log(this.monthlybuyDetailsUnique.length);

            this.monthlybuyDetailsUnique.splice(i, 1);

            i = 0;

            console.log("after SPLICE");
            console.log(this.monthlybuyDetailsUnique.length);



          }

        }

        console.log("dry run");
        for (var i = 0; i < this.monthlybuyDetailsUnique.length; i++) {

          if (this.monthlybuyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("dry run found bug");


          }

        }

        console.log("AFTER SPLICE");
        console.log(this.monthlybuyDetailsUnique);


        this.monthlybuyDetailsUnique.sort((obj1, obj2) => {

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
        this.monthlybuyDetailsUniqueComparitor = this.monthlybuyDetailsUnique;

        for (var i = 0, counter = 0; i < this.monthlybuyDetailsUniqueComparitor.length; i++) {

          for (var j = this.monthlybuyDetailsUnique.length - 1; j >= 0; j--) {

            if (this.monthlybuyDetailsUniqueComparitor[i].company == this.monthlybuyDetailsUnique[j].company) {
              counter++;

              if (counter > 1) {
                this.monthlybuyDetailsUnique.splice(j, 1);
                console.log("splicing for uniqueness");
                counter = 0;
                j = this.monthlybuyDetailsUnique.length;
              }


            }
          }
          counter = 0;
        }



        console.log(this.monthlybuyDetailsUnique);


        console.log("RESPONSE unique new LENGTH");
        console.log(this.monthlybuyDetailsUnique.length);








        this.monthlybuyDetails_length = this.monthlybuyDetailsUnique.length;
        this.monthlybuyDetails = this.monthlybuyDetailsUnique.reverse();
        this.monthlybuyDetailsUniqueforTransitWork = this.monthlybuyDetailsUnique;




      },
        err => {
          console.log(err);

        }
      );
  }

  OnSubmit() {
    console.log("search string is:")
    console.log(this.searchString);

    this.monthlybuyDetailsTransit = [];



    for (var i = 0; i < this.monthlybuyDetailsUniqueforTransitWork.length; i++) {



      if (this.monthlybuyDetailsUniqueforTransitWork[i].company.toString().toLocaleUpperCase() === this.searchString.toString().toLocaleUpperCase()) {

        this.monthlybuyDetailsTransit[this.monthlybuyDetailsTransit.length] = this.monthlybuyDetailsUniqueforTransitWork[i];

      }

    }

    console.log(this.monthlybuyDetailsTransit);
    this.monthlybuyDetailsTransit_length = this.monthlybuyDetailsTransit.length;

    // this.monthlybuyDetails_length = this.monthlybuyDetailsTransit.length;
    // this.monthlybuyDetails = this.monthlybuyDetailsTransit;

    document.getElementById('display').innerHTML = this.monthlybuyDetailsTransit[this.monthlybuyDetailsTransit.length - 1].company
      + " had a monthly buy signal with a confidence level of " + this.monthlybuyDetailsTransit[this.monthlybuyDetailsTransit.length - 1].confidence_level
      + " on " +
      this.monthlybuyDetailsTransit[this.monthlybuyDetailsTransit.length - 1].lastBuyEvent;

  }

  onLogout() {
    // this.userService.deleteToken();
    this.monthlybuyService.deleteToken();
    this.router.navigate(['/login']);
  }

}
