import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UkeqMins15buyService } from '../../../services/ukeqmins15buy.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ukeqmins15buy',
  templateUrl: './ukeqmins15buy.component.html',
  styleUrls: ['./ukeqmins15buy.component.css']
})

export class UkeqMins15buyComponent implements OnInit {
  //userDetails;
  mins15buyDetails;
  mins15buyDetailsUnique;
  mins15buyDetailsUniqueforTransitWork;
  mins15buyDetails_length;
  public searchString: string;
  mins15buyDetailsTransit;
  mins15buyDetailsTransit_length;
  mins15buyDetailsUniqueComparitor: any;

  //constructor(public userService: UserService, public router: Router) { }
  constructor(public mins15buyService: UkeqMins15buyService, public router: Router) { }

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
    
    if(localStorage.getItem('UserCategory') == "NONRENEW"){
      this.router.navigate(['/cart']);
      return;

    }

    this.mins15buyService.getMins15buyProfile().
      subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);

        console.log("RESPONSE_LENGTH");
        console.log(res.length);

        console.log("RESPONSE UNIQUE");


        this.mins15buyDetailsUnique = res;



        for (var i = 0; i < this.mins15buyDetailsUnique.length; i++) {

          if (this.mins15buyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("null found completed");


            console.log("before SPLICE");
            console.log(this.mins15buyDetailsUnique.length);

            this.mins15buyDetailsUnique.splice(i, 1);

            i = 0;

            console.log("after SPLICE");
            console.log(this.mins15buyDetailsUnique.length);



          }

        }

        console.log("dry run");
        for (var i = 0; i < this.mins15buyDetailsUnique.length; i++) {

          if (this.mins15buyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("dry run found bug");


          }

        }

        console.log("AFTER SPLICE");
        console.log(this.mins15buyDetailsUnique);


        this.mins15buyDetailsUnique.sort((obj1, obj2) => {

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
        this.mins15buyDetailsUniqueComparitor = this.mins15buyDetailsUnique;

        for (var i = 0, counter = 0; i < this.mins15buyDetailsUniqueComparitor.length; i++) {

          for (var j = this.mins15buyDetailsUnique.length - 1; j >= 0; j--) {

            if (this.mins15buyDetailsUniqueComparitor[i].company == this.mins15buyDetailsUnique[j].company) {
              counter++;

              if (counter > 1) {
                this.mins15buyDetailsUnique.splice(j, 1);
                console.log("splicing for uniqueness");
                counter = 0;
                j = this.mins15buyDetailsUnique.length;
              }


            }
          }
          counter = 0;
        }



        console.log(this.mins15buyDetailsUnique);


        console.log("RESPONSE unique new LENGTH");
        console.log(this.mins15buyDetailsUnique.length);








        this.mins15buyDetails_length = this.mins15buyDetailsUnique.length;
        this.mins15buyDetails = this.mins15buyDetailsUnique.reverse();
        this.mins15buyDetailsUniqueforTransitWork = this.mins15buyDetailsUnique;



        if(localStorage.getItem('UserCategory') == "TRIAL"){
          this.mins15buyDetails = this.mins15buyDetails.slice(0,3);
  
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

    this.mins15buyDetailsTransit = [];



    for (var i = 0; i < this.mins15buyDetailsUniqueforTransitWork.length; i++) {



      if (this.mins15buyDetailsUniqueforTransitWork[i].company.toString().toLocaleUpperCase() === this.searchString.toString().toLocaleUpperCase()) {

        this.mins15buyDetailsTransit[this.mins15buyDetailsTransit.length] = this.mins15buyDetailsUniqueforTransitWork[i];

      }

    }

    console.log(this.mins15buyDetailsTransit);
    this.mins15buyDetailsTransit_length = this.mins15buyDetailsTransit.length;

    // this.mins15buyDetails_length = this.mins15buyDetailsTransit.length;
    // this.mins15buyDetails = this.mins15buyDetailsTransit;

    document.getElementById('display').innerHTML = this.mins15buyDetailsTransit[this.mins15buyDetailsTransit.length - 1].company
      + " had a mins15 buy signal with a confidence level of " + this.mins15buyDetailsTransit[this.mins15buyDetailsTransit.length - 1].confidence_level
      + " on " +
      this.mins15buyDetailsTransit[this.mins15buyDetailsTransit.length - 1].lastBuyEvent;

  }

  onLogout() {
    // this.userService.deleteToken();
    this.mins15buyService.deleteToken();
    this.router.navigate(['/login']);
  }

}
