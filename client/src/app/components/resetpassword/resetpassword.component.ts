import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
//import {FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
 
  model ={
   email :'',
  newpwdgen :'',
  newpwdgenrepeat :'',
  recoverywordpetname: ''
}


 
constructor(private validateService: ValidateService, 
  //private flashMessage:FlashMessagesService,
  public authService:AuthService,
private router:Router) { }

  ngOnInit() {
  }

  onResetSubmit(){
    const input = {
      email: this.model.email,
      newpwdgen: this.model.newpwdgen,
      recoverywordpetname: this.model.recoverywordpetname
    }

    console.log(input);
    // const profile = {
    //   name: this.name,
    //   email: this.email,
    //   username: this.username,
    // location: this.location
    // }

    // Required Fields
    // if(!this.validateService.validateRegister(input)){
    //   this.serverErrorMessages = 'Validation failed';
        
     // this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
    //   return false;
    // }

    // Validate Email
    if(!this.validateService.validateEmail(input.email)){
      this.serverErrorMessages = 'Validation failed';
        
      // this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.resetPassword(input).subscribe(data=>{
      
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
    this.model.email= '';
    this.model.newpwdgen= '';
    this.model.newpwdgenrepeat= '';
    this.model.recoverywordpetname= '';
    this.serverErrorMessages = '';
    }    
  

}
