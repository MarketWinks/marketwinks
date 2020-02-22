import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSerivce:AuthService,private router:Router,) { }
    //private flashMessage:FlashMessagesService) { }

    
  // email:String;
  // password:String;
  
  
  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;


  ngOnInit() {
  }

  onSubmit(){
    const user={
      email:this.model.email,
      password:this.model.password
    } 
    
    localStorage.setItem("LoggedInUserEmail", this.model.email.toString());

console.log(user);
    this.authSerivce.authenticateUser(user).subscribe(data=>{

      console.log(data);

      if (data.token) {
        this.authSerivce.storeUserData(data.token);
        localStorage.setItem('user', user.email);
        localStorage.setItem('LoggedInUserEmail', user.email);
  
  //      this.flashMessage.show('Your now logged in', { cssClass: 'alert-success', timeout: 3000 });
        console.log('Login is completed fully');
        this.router.navigate(['']);
      } else {
        this.serverErrorMessages = 'Something went wrong.';
  
  ///      this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['login']);
      }
    });
  }
}