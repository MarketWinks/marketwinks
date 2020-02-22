import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
//import {FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
 
  model ={
    name :'',
  email :'',
  password :'',
  role :''
}


 
constructor(private validateService: ValidateService, 
  //private flashMessage:FlashMessagesService,
  public authService:AuthService,
private router:Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      fullName: this.model.name,
      email: this.model.email,
      password: this.model.password,
      role: 'users'
    }

    console.log(user);
    // const profile = {
    //   name: this.name,
    //   email: this.email,
    //   username: this.username,
    // location: this.location
    // }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.serverErrorMessages = 'Validation failed';
        
     // this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.serverErrorMessages = 'Validation failed';
        
      // this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.registerUser(user).subscribe(data=>{
      
      if(data._id){
      //  this.flashMessage.show('Successfully Registered', { cssClass: 'alert-success', timeout: 3000 });
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);
      this.resetForm();

      //  this.router.navigate(['/login']);
      }else{
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        // this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
       // this.router.navigate(['/register']);
      }
    });

    //PROFFILE ADDITION TEMP SUSPENDED
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

  
  resetForm() {
    this.model.name= '';
    this.model.email= '';
    this.model.password= '';
    this.serverErrorMessages = '';
    }    
  

}
