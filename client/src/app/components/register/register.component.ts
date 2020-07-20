import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  model = {
    name: '',
    email: '',
    password: '',
    recoverywordpetname: '',
    agreeTC: false,
    role: ''
  }

  constructor(private validateService: ValidateService,
    //private flashMessage:FlashMessagesService,
    public authService: AuthService,
    private router: Router, private EncrDecr: EncrDecrService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      fullName: this.model.name,
      email: this.model.email,
      password: this.model.password,
      recoverywordpetname: this.model.recoverywordpetname,
      agreeTC: this.model.agreeTC,
      role: 'users'
    }

    console.log(user);

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.serverErrorMessages = 'Validation failed';
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.serverErrorMessages = 'Validation failed';
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {

      if (data._id) {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm();
        this.router.navigate(['/login']);
      } else {
        console.log(data);
        //console.log(err);
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        this.router.navigate(['/register']);
      }
    },
      (err) => {

        this.serverErrorMessages = err.json()[0];

      });
  }

  resetForm() {
    this.model.name = '';
    this.model.email = '';
    this.model.password = '';
    this.model.recoverywordpetname = '';
    this.serverErrorMessages = '';
    this.model.agreeTC = false;
  }

  gotoTC(){
    this.router.navigate(['/termsandconditions']);
  }

}