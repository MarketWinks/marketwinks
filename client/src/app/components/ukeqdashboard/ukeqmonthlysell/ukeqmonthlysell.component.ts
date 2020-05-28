import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UkeqMonthlysellService } from '../../../services/ukeqmonthlysell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-ukeqmonthlysell',
  templateUrl: './ukeqmonthlysell.component.html',
  styleUrls: ['./ukeqmonthlysell.component.css']
})

export class UkeqMonthlysellComponent implements OnInit {
  //userDetails;
  monthlysellDetails;
  monthlysellDetailsUnique;
  monthlysellDetails_length;
  //constructor(public userService: UserService, public router: Router) { }
  constructor(public monthlysellService: UkeqMonthlysellService, public router: Router) { }

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
    
    this.monthlysellService.getMonthlysellProfile().
    subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);
        console.log("RESPONSE_LENGTH");
        console.log(res.length);


        console.log("RESPONSE UNIQUE");
        
        this.monthlysellDetailsUnique = Array.from(new Set(res.map(a => a.company)))
        .map(company => {
          return res.find(a => a.company === company)
        });
        
        console.log(this.monthlysellDetailsUnique);


        console.log("RESPONSE unique LENGTH");
        console.log(this.monthlysellDetailsUnique.length);


   // this.monthlysellDetails_length=res.length;
     //   this.monthlysellDetails = res;

     for(var i=0; i<this.monthlysellDetailsUnique.length; i++){

      if (this.monthlysellDetailsUnique[i].lastSellEvent == undefined){

        console.log("null found completed");

  
        console.log("before SPLICE");
        console.log(this.monthlysellDetailsUnique.length);

        this.monthlysellDetailsUnique.splice(i, 1);

        console.log("after SPLICE");
        console.log(this.monthlysellDetailsUnique.length);

      
      
    }

     }



     


     this.monthlysellDetailsUnique.sort((obj1, obj2) => {


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

      this.monthlysellDetails_length=this.monthlysellDetailsUnique.length;
      this.monthlysellDetails = this.monthlysellDetailsUnique;

      
      if(localStorage.getItem('UserCategory') == "TRIAL"){
        this.monthlysellDetails = this.monthlysellDetails.slice(0,3);

      }

      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
  // this.userService.deleteToken();
   this.monthlysellService.deleteToken();
    this.router.navigate(['/login']);
  }

}
