import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';
import { InfopageService } from '../../services/infopage.service';


@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.css']
})
export class InfopageComponent implements OnInit {

  symbol: string;
symbolDetails: any;

constructor(public infopageService: InfopageService, 
  public router: Router, public authSerivce:AuthService,
  public flashMessage:FlashMessagesService) { }

  ngOnInit() {

    this.symbol = localStorage.getItem('searchsymbol');

  //   this.authSerivce.getSymbolDetails(this.email.toString()).subscribe((data: any[]) =>{
  //   this.profile = data[0];

  //   console.log(data[0]);

  //   this._id = this.profile._id;
  //   this.name = this.profile.name;
  //   this.location = this.profile.location;
  //   this.mobile =  this.profile.mobile;
  //   this.dateOfBirth =  this.profile.dateOfBirth;
  //   this.occupation =  this.profile.occupation;
    
  // })

  
  const input = {
    symbol: this.symbol
  }

  this.infopageService.getInfopageProfile(input).subscribe(data => {
console.log("sending this");
console.log(input);
    this.symbolDetails = data[0];
    console.log(data[0]);

  });



}


}