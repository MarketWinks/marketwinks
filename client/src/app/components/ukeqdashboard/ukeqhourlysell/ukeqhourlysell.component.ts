import { Component, OnInit } from '@angular/core';
import { UkeqHourlysellService } from '../../../services/ukeqhourlysell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';


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
  //constructor(public userService: UserService, public router: Router) { }
  constructor(public hourlysellService: UkeqHourlysellService, public router: Router) { }

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

      this.hourlysellDetails_length=this.hourlysellDetailsUnique.length;
      this.hourlysellDetails = this.hourlysellDetailsUnique;


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
