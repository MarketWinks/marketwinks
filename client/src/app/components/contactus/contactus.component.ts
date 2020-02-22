import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  role:String;
  //location:String;

  constructor(private validateService: ValidateService, private flashMessage:FlashMessagesService,
    private authservice:AuthService,
  private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    // const user = {
    //   name: this.name,
    //   email: this.email,
    //   username: this.username,
    //   password: this.password,
    //   role: 'users'
    // }

    // const profile = {
    //   name: this.name,
    //   email: this.email,
    //   username: this.username,
    // location: this.location
    // }

    // // Required Fields
    // if(!this.validateService.validateRegister(user)){
    //   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
    //   return false;
    // }

    // // Validate Email
    // if(!this.validateService.validateEmail(user.email)){
    //   this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
    //   return false;
    // }

    // this.authservice.registerUser(user).subscribe(data=>{
    //   if(data.success){
    //     this.flashMessage.show('Successfully Registered', { cssClass: 'alert-success', timeout: 3000 });
    //   //  this.router.navigate(['/login']);
    //   }else{
    //     this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
    //    // this.router.navigate(['/register']);
    //   }
    // });

    // this.authservice.addProfile(user).subscribe(data=>{
    //   if(data.success){
    //    // this.flashMessage.show('Successfully Registered', { cssClass: 'alert-success', timeout: 3000 });
    //     this.router.navigate(['/login']);
    //   }else{
    //    // this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
    //     this.router.navigate(['/register']);
    //   }
    // });

  }

}
