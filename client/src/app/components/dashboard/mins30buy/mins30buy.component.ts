import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { Mins30buyService } from '../../../services/mins30buy.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mins30buy',
  templateUrl: './mins30buy.component.html',
  styleUrls: ['./mins30buy.component.css']
})

export class Mins30buyComponent implements OnInit {
  //userDetails;
  mins30buyDetails;
  mins30buyDetailsUnique;
  mins30buyDetailsUniqueforTransitWork;
  mins30buyDetails_length;
  public searchString: string;
  mins30buyDetailsTransit;
  mins30buyDetailsTransit_length;
  mins30buyDetailsUniqueComparitor: any;

  //constructor(public userService: UserService, public router: Router) { }
  constructor(public mins30buyService: Mins30buyService, public router: Router) { }

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

    this.mins30buyService.getMins30buyProfile().
      subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);

        console.log("RESPONSE_LENGTH");
        console.log(res.length);

        console.log("RESPONSE UNIQUE");


        this.mins30buyDetailsUnique = res;



        for (var i = 0; i < this.mins30buyDetailsUnique.length; i++) {

          if (this.mins30buyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("null found completed");


            console.log("before SPLICE");
            console.log(this.mins30buyDetailsUnique.length);

            this.mins30buyDetailsUnique.splice(i, 1);

            i = 0;

            console.log("after SPLICE");
            console.log(this.mins30buyDetailsUnique.length);



          }

        }

        console.log("dry run");
        for (var i = 0; i < this.mins30buyDetailsUnique.length; i++) {

          if (this.mins30buyDetailsUnique[i].lastBuyEvent == undefined) {

            console.log("dry run found bug");


          }

        }

        console.log("AFTER SPLICE");
        console.log(this.mins30buyDetailsUnique);


        this.mins30buyDetailsUnique.sort((obj1, obj2) => {

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
        this.mins30buyDetailsUniqueComparitor = this.mins30buyDetailsUnique;

        for (var i = 0, counter = 0; i < this.mins30buyDetailsUniqueComparitor.length; i++) {

          for (var j = this.mins30buyDetailsUnique.length - 1; j >= 0; j--) {

            if (this.mins30buyDetailsUniqueComparitor[i].company == this.mins30buyDetailsUnique[j].company) {
              counter++;

              if (counter > 1) {
                this.mins30buyDetailsUnique.splice(j, 1);
                console.log("splicing for uniqueness");
                counter = 0;
                j = this.mins30buyDetailsUnique.length;
              }


            }
          }
          counter = 0;
        }



        console.log(this.mins30buyDetailsUnique);


        console.log("RESPONSE unique new LENGTH");
        console.log(this.mins30buyDetailsUnique.length);








        this.mins30buyDetails_length = this.mins30buyDetailsUnique.length;
        this.mins30buyDetails = this.mins30buyDetailsUnique.reverse();
        this.mins30buyDetailsUniqueforTransitWork = this.mins30buyDetailsUnique;




      },
        err => {
          console.log(err);

        }
      );
  }

  OnSubmit() {
    console.log("search string is:")
    console.log(this.searchString);

    this.mins30buyDetailsTransit = [];



    for (var i = 0; i < this.mins30buyDetailsUniqueforTransitWork.length; i++) {



      if (this.mins30buyDetailsUniqueforTransitWork[i].company.toString().toLocaleUpperCase() === this.searchString.toString().toLocaleUpperCase()) {

        this.mins30buyDetailsTransit[this.mins30buyDetailsTransit.length] = this.mins30buyDetailsUniqueforTransitWork[i];

      }

    }

    console.log(this.mins30buyDetailsTransit);
    this.mins30buyDetailsTransit_length = this.mins30buyDetailsTransit.length;

    // this.mins30buyDetails_length = this.mins30buyDetailsTransit.length;
    // this.mins30buyDetails = this.mins30buyDetailsTransit;

    document.getElementById('display').innerHTML = this.mins30buyDetailsTransit[this.mins30buyDetailsTransit.length - 1].company
      + " had a mins30 buy signal with a confidence level of " + this.mins30buyDetailsTransit[this.mins30buyDetailsTransit.length - 1].confidence_level
      + " on " +
      this.mins30buyDetailsTransit[this.mins30buyDetailsTransit.length - 1].lastBuyEvent;

  }

  onLogout() {
    // this.userService.deleteToken();
    this.mins30buyService.deleteToken();
    this.router.navigate(['/login']);
  }

}
