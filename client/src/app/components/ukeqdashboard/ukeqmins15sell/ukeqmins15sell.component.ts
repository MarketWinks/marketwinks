import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UkeqMins15sellService } from '../../../services/ukeqmins15sell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-ukeqmins15sell',
  templateUrl: './ukeqmins15sell.component.html',
  styleUrls: ['./ukeqmins15sell.component.css']
})

export class UkeqMins15sellComponent implements OnInit {
  //userDetails;
  mins15sellDetails;
  mins15sellDetailsUnique;
  mins15sellDetails_length;
  //constructor(public userService: UserService, public router: Router) { }
  constructor(public mins15sellService: UkeqMins15sellService, public router: Router) { }

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
    this.mins15sellService.getMins15sellProfile().
    subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);
        console.log("RESPONSE_LENGTH");
        console.log(res.length);


        console.log("RESPONSE UNIQUE");
        
        this.mins15sellDetailsUnique = Array.from(new Set(res.map(a => a.company)))
        .map(company => {
          return res.find(a => a.company === company)
        });
        
        console.log(this.mins15sellDetailsUnique);


        console.log("RESPONSE unique LENGTH");
        console.log(this.mins15sellDetailsUnique.length);


   // this.mins15sellDetails_length=res.length;
     //   this.mins15sellDetails = res;

     for(var i=0; i<this.mins15sellDetailsUnique.length; i++){

      if (this.mins15sellDetailsUnique[i].lastSellEvent == undefined){

        console.log("null found completed");

  
        console.log("before SPLICE");
        console.log(this.mins15sellDetailsUnique.length);

        this.mins15sellDetailsUnique.splice(i, 1);

        console.log("after SPLICE");
        console.log(this.mins15sellDetailsUnique.length);

      
      
    }

     }



     


     this.mins15sellDetailsUnique.sort((obj1, obj2) => {


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

      this.mins15sellDetails_length=this.mins15sellDetailsUnique.length;
      this.mins15sellDetails = this.mins15sellDetailsUnique;


      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
  // this.userService.deleteToken();
   this.mins15sellService.deleteToken();
    this.router.navigate(['/login']);
  }

}
