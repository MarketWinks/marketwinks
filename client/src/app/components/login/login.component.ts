import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSerivce: AuthService, private router: Router) { }


  model = {
    email: '',
    password: ''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;


  ngOnInit() {
  }

  onClickForgotPwd() {
    this.router.navigate(['resetpassword']);
  }

  onSubmit() {
    const user = {
      email: this.model.email,
      password: this.model.password
    }

    localStorage.setItem('LoggedInUserEmail', this.model.email.toString());
    this.authSerivce.authenticateUser(user).subscribe(data => {


      if (data.token) {
        this.authSerivce.storeUserData(data.token);
        localStorage.setItem('user', user.email);
        localStorage.setItem('LoggedInUserEmail', user.email);

        this.authSerivce.getProfile(user.email).subscribe(profiledata => {

          localStorage.setItem('UserCategory', profiledata.usercategory);



        });
        this.router.navigate(['']);
      } else if (data == "Please verify the email account"){
        this.serverErrorMessages = 'Please verify the email account';
        this.router.navigate(['login']);
      }else {
        this.serverErrorMessages = 'Something went wrong.';
        this.router.navigate(['login']);
      }
    },
      (err) => {
        this.serverErrorMessages = err.json().message.toString();

      });
  }
}