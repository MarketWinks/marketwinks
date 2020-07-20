import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UseqHourlybuyService } from '../../../services/useqhourlybuy.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

import { environment } from 'src/environments/environment';
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-useqhourlybuy',
  templateUrl: './useqhourlybuy.component.html',
  styleUrls: ['./useqhourlybuy.component.css']
})

export class UseqHourlybuyComponent implements OnInit {
  //userDetails;
  hourlybuyDetails;
  hourlybuyDetailsUnique;
  hourlybuyDetailsUniqueforTransitWork;
  hourlybuyDetails_length;
  public searchString: string;
  hourlybuyDetailsTransit;
  hourlybuyDetailsTransit_length;
  hourlybuyDetailsUniqueComparitor: any;

  //constructor(public userService: UserService, public router: Router, private EncrDecr: EncrDecrService) { }
  constructor(public hourlybuyService: UseqHourlybuyService, public router: Router, private EncrDecr: EncrDecrService) { }

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

    this.hourlybuyService.getHourlybuyProfile().
      subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);

        console.log("RESPONSE_LENGTH");
        console.log(res.length);

        console.log("RESPONSE UNIQUE");


        this.hourlybuyDetailsUnique = res;



        for (var i = 0; i < this.hourlybuyDetailsUnique.length; i++) {

          if (this.hourlybuyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("null found completed");


            console.log("before SPLICE");
            console.log(this.hourlybuyDetailsUnique.length);

            this.hourlybuyDetailsUnique.splice(i, 1);

            i = 0;

            console.log("after SPLICE");
            console.log(this.hourlybuyDetailsUnique.length);



          }

        }

        console.log("dry run");
        for (var i = 0; i < this.hourlybuyDetailsUnique.length; i++) {

          if (this.hourlybuyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("dry run found bug");


          }

        }

        console.log("AFTER SPLICE");
        console.log(this.hourlybuyDetailsUnique);


        this.hourlybuyDetailsUnique.sort((obj1, obj2) => {

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
        this.hourlybuyDetailsUniqueComparitor = this.hourlybuyDetailsUnique;

        for (var i = 0, counter = 0; i < this.hourlybuyDetailsUniqueComparitor.length; i++) {

          for (var j = this.hourlybuyDetailsUnique.length - 1; j >= 0; j--) {

            if (this.hourlybuyDetailsUniqueComparitor[i].company == this.hourlybuyDetailsUnique[j].company) {
              counter++;

              if (counter > 1) {
                this.hourlybuyDetailsUnique.splice(j, 1);
                console.log("splicing for uniqueness");
                counter = 0;
                j = this.hourlybuyDetailsUnique.length;
              }


            }
          }
          counter = 0;
        }



        console.log(this.hourlybuyDetailsUnique);


        console.log("RESPONSE unique new LENGTH");
        console.log(this.hourlybuyDetailsUnique.length);








        this.hourlybuyDetails_length = this.hourlybuyDetailsUnique.length;
        this.hourlybuyDetails = this.hourlybuyDetailsUnique.reverse();
        this.hourlybuyDetailsUniqueforTransitWork = this.hourlybuyDetailsUnique;




      },
        err => {
          console.log(err);

        }
      );
  }

  OnSubmit() {
    console.log("search string is:")
    console.log(this.searchString);

    this.hourlybuyDetailsTransit = [];



    for (var i = 0; i < this.hourlybuyDetailsUniqueforTransitWork.length; i++) {



      if (this.hourlybuyDetailsUniqueforTransitWork[i].company.toString().toLocaleUpperCase() === this.searchString.toString().toLocaleUpperCase()) {

        this.hourlybuyDetailsTransit[this.hourlybuyDetailsTransit.length] = this.hourlybuyDetailsUniqueforTransitWork[i];

      }

    }

    console.log(this.hourlybuyDetailsTransit);
    this.hourlybuyDetailsTransit_length = this.hourlybuyDetailsTransit.length;

    // this.hourlybuyDetails_length = this.hourlybuyDetailsTransit.length;
    // this.hourlybuyDetails = this.hourlybuyDetailsTransit;

    document.getElementById('display').innerHTML = this.hourlybuyDetailsTransit[this.hourlybuyDetailsTransit.length - 1].company
      + " had a hourly buy signal with a confidence level of " + this.hourlybuyDetailsTransit[this.hourlybuyDetailsTransit.length - 1].confidence_level
      + " on " +
      this.hourlybuyDetailsTransit[this.hourlybuyDetailsTransit.length - 1].lastBuyEvent;

  }

  onLogout() {
    // this.userService.deleteToken();
    this.hourlybuyService.deleteToken();
    this.router.navigate(['/login']);
  }

}
