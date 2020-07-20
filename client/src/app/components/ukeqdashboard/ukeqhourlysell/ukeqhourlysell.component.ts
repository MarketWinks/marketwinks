import { Component, OnInit } from '@angular/core';
import { UkeqHourlysellService } from '../../../services/ukeqhourlysell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-ukeqhourlysell',
  templateUrl: './ukeqhourlysell.component.html',
  styleUrls: ['./ukeqhourlysell.component.css']
})

export class UkeqHourlysellComponent implements OnInit {
  //userDetails;
  hourlysellDetails;
  hourlysellDetailsUnique;
  hourlysellDetails_length;
  //constructor(public userService: UserService, public router: Router, private EncrDecr: EncrDecrService) { }
  constructor(public hourlysellService: UkeqHourlysellService, public router: Router, private EncrDecr: EncrDecrService) { }

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
    
    this.hourlysellService.getHourlysellProfile().
    subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);
        console.log("RESPONSE_LENGTH");
        console.log(res.length);


        console.log("RESPONSE UNIQUE");
        
        this.hourlysellDetailsUnique = Array.from(new Set(res.map(a => a.company)))
        .map(company => {
          return res.find(a => a.company === company)
        });
        
        console.log(this.hourlysellDetailsUnique);


        console.log("RESPONSE unique LENGTH");
        console.log(this.hourlysellDetailsUnique.length);


   // this.hourlysellDetails_length=res.length;
     //   this.hourlysellDetails = res;

     for(var i=0; i<this.hourlysellDetailsUnique.length; i++){

      if (this.hourlysellDetailsUnique[i].lastSellEvent == undefined){

        console.log("null found completed");

  
        console.log("before SPLICE");
        console.log(this.hourlysellDetailsUnique.length);

        this.hourlysellDetailsUnique.splice(i, 1);

        console.log("after SPLICE");
        console.log(this.hourlysellDetailsUnique.length);

      
      
    }

     }



     


     this.hourlysellDetailsUnique.sort((obj1, obj2) => {


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

      this.hourlysellDetails_length=this.hourlysellDetailsUnique.length;
      this.hourlysellDetails = this.hourlysellDetailsUnique;

      if(this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "TRIAL"){
        this.hourlysellDetails = this.hourlysellDetails.slice(0,3);

      }
      

      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
  // this.userService.deleteToken();
   this.hourlysellService.deleteToken();
    this.router.navigate(['/login']);
  }

}
