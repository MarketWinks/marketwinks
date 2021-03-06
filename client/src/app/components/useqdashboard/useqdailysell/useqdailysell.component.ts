import { Component, OnInit } from '@angular/core';
import { UseqDailysellService } from '../../../services/useqdailysell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-useqdailysell',
  templateUrl: './useqdailysell.component.html',
  styleUrls: ['./useqdailysell.component.css']
})

export class UseqDailysellComponent implements OnInit {
  //userDetails;
  dailysellDetails;
  dailysellDetailsUnique;
  dailysellDetails_length;
  //constructor(public userService: UserService, public router: Router, private EncrDecr: EncrDecrService) { }
  constructor(public dailysellService: UseqDailysellService, public router: Router, private EncrDecr: EncrDecrService) { }

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
    this.dailysellService.getDailysellProfile().
    subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);
        console.log("RESPONSE_LENGTH");
        console.log(res.length);


        console.log("RESPONSE UNIQUE");
        
        this.dailysellDetailsUnique = Array.from(new Set(res.map(a => a.company)))
        .map(company => {
          return res.find(a => a.company === company)
        });
        
        console.log(this.dailysellDetailsUnique);


        console.log("RESPONSE unique LENGTH");
        console.log(this.dailysellDetailsUnique.length);


   // this.dailysellDetails_length=res.length;
     //   this.dailysellDetails = res;

     for(var i=0; i<this.dailysellDetailsUnique.length; i++){

      if (this.dailysellDetailsUnique[i].lastSellEvent == undefined){

        console.log("null found completed");

  
        console.log("before SPLICE");
        console.log(this.dailysellDetailsUnique.length);

        this.dailysellDetailsUnique.splice(i, 1);

        console.log("after SPLICE");
        console.log(this.dailysellDetailsUnique.length);

      
      
    }

     }



     


     this.dailysellDetailsUnique.sort((obj1, obj2) => {


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

      this.dailysellDetails_length=this.dailysellDetailsUnique.length;
      this.dailysellDetails = this.dailysellDetailsUnique;


      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
  // this.userService.deleteToken();
   this.dailysellService.deleteToken();
    this.router.navigate(['/login']);
  }

}
