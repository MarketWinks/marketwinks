import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UkeqWeeklysellService } from '../../../services/ukeqweeklysell.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-ukeqweeklysell',
  templateUrl: './ukeqweeklysell.component.html',
  styleUrls: ['./ukeqweeklysell.component.css']
})

export class UkeqWeeklysellComponent implements OnInit {
  //userDetails;
  weeklysellDetails;
  weeklysellDetailsUnique;
  weeklysellDetails_length;
  //constructor(public userService: UserService, public router: Router) { }
  constructor(public weeklysellService: UkeqWeeklysellService, public router: Router) { }

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
    this.weeklysellService.getWeeklysellProfile().
    subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);
        console.log("RESPONSE_LENGTH");
        console.log(res.length);
        
        
        console.log("RESPONSE UNIQUE");
        
        this.weeklysellDetailsUnique = Array.from(new Set(res.map(a => a.company)))
        .map(company => {
          return res.find(a => a.company === company)
        });
        
        console.log(this.weeklysellDetailsUnique);

        
        console.log("RESPONSE unique LENGTH");
        console.log(this.weeklysellDetailsUnique.length);

        
        //this.weeklysellDetails_length=res.length;
        //this.weeklysellDetails = res;

            
     for(var i=0; i<this.weeklysellDetailsUnique.length; i++){

      if (this.weeklysellDetailsUnique[i].lastSellEvent == undefined){

        console.log("null found completed");

  
        console.log("before SPLICE");
        console.log(this.weeklysellDetailsUnique.length);

        this.weeklysellDetailsUnique.splice(i, 1);

        console.log("after SPLICE");
        console.log(this.weeklysellDetailsUnique.length);

      
      
    }

     }



        

        
        
      this.weeklysellDetailsUnique.sort((obj1, obj2) => {
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

        this.weeklysellDetails_length=this.weeklysellDetailsUnique.length;
        this.weeklysellDetails = this.weeklysellDetailsUnique;




      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
  // this.userService.deleteToken();
   this.weeklysellService.deleteToken();
    this.router.navigate(['/login']);
  }

}
