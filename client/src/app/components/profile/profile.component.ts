import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email: String;
  profile: any;
  location: String;
mobile: String;
dateOfBirth: String;
occupation: String;
name: String;
_id: String;

  constructor(private authSerivce:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {

    this.email = localStorage.getItem("LoggedInUserEmail");
    this.authSerivce.getProfile(this.email.toString()).subscribe((data: any[]) =>{
    this.profile = data[0];

    this._id = this.profile._id;
    this.name = this.profile.name;
    this.location = this.profile.location;
    this.mobile =  this.profile.mobile;
    this.dateOfBirth =  this.profile.dateOfBirth;
    this.occupation =  this.profile.occupation;
    
  })
}

navigateToEditProfile(){
  console.log("updated details");
  console.log(this.profile._id);
  console.log(this.email);
  console.log(this.name);
  
  console.log(this.location);
  console.log(this.mobile);
  console.log(this.dateOfBirth);
  console.log(this.occupation);

  const profileWithUpdates = {
    _id: this.profile._id,
    name: this.name,
    email: this.email,
    location: this.location,
    mobile: this.mobile,
    occupation: this.occupation,
    dateOfBirth: this.dateOfBirth
    
  }

  this.authSerivce.updateProfile(profileWithUpdates).subscribe(data =>{
    if(data.success){
      this.flashMessage.show('Successfully Updated', { cssClass: 'alert-success', timeout: 3000 });
    //  this.router.navigate(['/login']);
    }else{
      this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
     // this.router.navigate(['/register']);
    }
  })

}

navigateToEditPhoto(){
  console.log("Router needs to be assigned and built");
 
}
}