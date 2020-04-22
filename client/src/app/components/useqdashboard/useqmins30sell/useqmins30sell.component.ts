import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UseqMins30sellService } from '../../../services/useqmins30sell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-useqmins30sell',
  templateUrl: './useqmins30sell.component.html',
  styleUrls: ['./useqmins30sell.component.css']
})

export class UseqMins30sellComponent implements OnInit {
  //userDetails;
  mins30sellDetails;
  mins30sellDetailsUnique;
  mins30sellDetails_length;
  //constructor(public userService: UserService, public router: Router) { }
  constructor(public mins30sellService: UseqMins30sellService, public router: Router) { }

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
    this.mins30sellService.getMins30sellProfile().
    subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);
        console.log("RESPONSE_LENGTH");
        console.log(res.length);


        console.log("RESPONSE UNIQUE");
        
        this.mins30sellDetailsUnique = Array.from(new Set(res.map(a => a.company)))
        .map(company => {
          return res.find(a => a.company === company)
        });
        
        console.log(this.mins30sellDetailsUnique);


        console.log("RESPONSE unique LENGTH");
        console.log(this.mins30sellDetailsUnique.length);


   // this.mins30sellDetails_length=res.length;
     //   this.mins30sellDetails = res;

     for(var i=0; i<this.mins30sellDetailsUnique.length; i++){

      if (this.mins30sellDetailsUnique[i].lastSellEvent == undefined){

        console.log("null found completed");

  
        console.log("before SPLICE");
        console.log(this.mins30sellDetailsUnique.length);

        this.mins30sellDetailsUnique.splice(i, 1);

        console.log("after SPLICE");
        console.log(this.mins30sellDetailsUnique.length);

      
      
    }

     }



     


     this.mins30sellDetailsUnique.sort((obj1, obj2) => {


      if (new Date(obj1.lastSellEvent.toString()).getTime() > new Date(obj2.lastSellEvent.toString())
      .getTime()) {
          return 1;
      }

      if (new Date(obj1.lastSellEvent.toString()).getTime() < new Date(obj2.lastSellEvent.toString())
      .getTime()) {
          return -1;
      }
  
      return 0;
  });

      this.mins30sellDetails_length=this.mins30sellDetailsUnique.length;
      this.mins30sellDetails = this.mins30sellDetailsUnique;


      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
  // this.userService.deleteToken();
   this.mins30sellService.deleteToken();
    this.router.navigate(['/login']);
  }

}
