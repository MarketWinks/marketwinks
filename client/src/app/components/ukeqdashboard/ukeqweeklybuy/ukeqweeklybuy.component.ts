import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { UkeqWeeklybuyService } from '../../../services/ukeqweeklybuy.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-ukeqweeklybuy',
  templateUrl: './ukeqweeklybuy.component.html',
  styleUrls: ['./ukeqweeklybuy.component.css']
})


export class UkeqWeeklybuyComponent implements OnInit {
  weeklybuyDetails;
  weeklybuyDetailsUnique;
  weeklybuyDetails_length;
  constructor(public weeklybuyService: UkeqWeeklybuyService, public router: Router) { }

  ngOnInit() {

    
    if(localStorage.getItem('UserCategory') == "NONRENEW"){
      this.router.navigate(['/cart']);
      return;

    }
    
    this.weeklybuyService.getWeeklybuyProfile().
    subscribe((res: any[]) => {
        console.log("RESPONSE");
        console.log(res);
        console.log("RESPONSE_LENGTH");
        console.log(res.length);


        console.log("RESPONSE UNIQUE");
        
        this.weeklybuyDetailsUnique = Array.from(new Set(res.map(a => a.company)))
        .map(company => {
          return res.find(a => a.company === company)
        });
        
        console.log(this.weeklybuyDetailsUnique);

        
        console.log("RESPONSE unique LENGTH");
        console.log(this.weeklybuyDetailsUnique.length);

        //this.weeklybuyDetails_length=res.length;
        //this.weeklybuyDetails = res;

    
    
        
     for(var i=0; i<this.weeklybuyDetailsUnique.length; i++){

      if (this.weeklybuyDetailsUnique[i].lastBuyEvent == undefined){

        console.log("null found completed");

  
        console.log("before SPLICE");
        console.log(this.weeklybuyDetailsUnique.length);

        this.weeklybuyDetailsUnique.splice(i, 1);

        console.log("after SPLICE");
        console.log(this.weeklybuyDetailsUnique.length);

      
      
    }

     }


     





        
      this.weeklybuyDetailsUnique.sort((obj1, obj2) => {
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

        this.weeklybuyDetails_length=this.weeklybuyDetailsUnique.length;
        this.weeklybuyDetails = this.weeklybuyDetailsUnique;


        if(localStorage.getItem('UserCategory') == "TRIAL"){
          this.weeklybuyDetails = this.weeklybuyDetails.slice(0,3);
  
        }

      },
      err => { 
        console.log(err);
      }
    );
  }

  onLogout(){
   this.weeklybuyService.deleteToken();
    this.router.navigate(['/login']);
  }
}