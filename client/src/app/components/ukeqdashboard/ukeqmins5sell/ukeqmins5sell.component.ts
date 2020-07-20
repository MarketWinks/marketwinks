import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UkeqMins5sellService } from '../../../services/ukeqmins5sell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-ukeqmins5sell',
  templateUrl: './ukeqmins5sell.component.html',
  styleUrls: ['./ukeqmins5sell.component.css']
})

export class UkeqMins5sellComponent implements OnInit {
  //userDetails;
  mins5sellDetails;
  mins5sellDetailsUnique;
  mins5sellDetails_length;
  //constructor(public userService: UserService, public router: Router, private EncrDecr: EncrDecrService) { }
  constructor(public mins5sellService: UkeqMins5sellService, public router: Router, private EncrDecr: EncrDecrService) { }

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

    
    if(this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "NONRENEW"){
      this.router.navigate(['/cart']);
      return;

    }
    
    this.mins5sellService.getMins5sellProfile().
    subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);
        console.log("RESPONSE_LENGTH");
        console.log(res.length);


        console.log("RESPONSE UNIQUE");
        
        this.mins5sellDetailsUnique = Array.from(new Set(res.map(a => a.company)))
        .map(company => {
          return res.find(a => a.company === company)
        });
        
        console.log(this.mins5sellDetailsUnique);


        console.log("RESPONSE unique LENGTH");
        console.log(this.mins5sellDetailsUnique.length);


   // this.mins5sellDetails_length=res.length;
     //   this.mins5sellDetails = res;

     for(var i=0; i<this.mins5sellDetailsUnique.length; i++){

      if (this.mins5sellDetailsUnique[i].lastSellEvent == undefined){

        console.log("null found completed");

  
        console.log("before SPLICE");
        console.log(this.mins5sellDetailsUnique.length);

        this.mins5sellDetailsUnique.splice(i, 1);

        console.log("after SPLICE");
        console.log(this.mins5sellDetailsUnique.length);

      
      
    }

     }



     


     this.mins5sellDetailsUnique.sort((obj1, obj2) => {


      if (new Date(obj1.lastSellEvent).getTime() > new Date(obj2.lastSellEvent)
      .getTime()) {
          return 1;
      }

      if (new Date(obj1.lastSellEvent).getTime() < new Date(obj2.lastSellEvent)
      .getTime()) {
          return -1;
      }
  
      return 0;
  });

      this.mins5sellDetails_length=this.mins5sellDetailsUnique.length;
      this.mins5sellDetails = this.mins5sellDetailsUnique;


      
      if(this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "TRIAL"){
        this.mins5sellDetails = this.mins5sellDetails.slice(0,3);

      }
      

      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
  // this.userService.deleteToken();
   this.mins5sellService.deleteToken();
    this.router.navigate(['/login']);
  }

}
