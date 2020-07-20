import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { EncrDecrService } from 'src/app/services/encrdecr.service';

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

  model = {
    email: '',
    newpwdgen: '',
    newpwdgenrepeat: '',
    recoverywordpetname: ''
  }

  constructor(private validateService: ValidateService,
    public authService: AuthService,
    private router: Router, private EncrDecr: EncrDecrService) { }

  ngOnInit() {
  }

  onResetSubmit() {
    const input = {
      email: this.model.email,
      newpwdgen: this.model.newpwdgen,
      newpwdgenrepeat: this.model.newpwdgenrepeat,
      recoverywordpetname: this.model.recoverywordpetname
    }

    if (!this.validateService.validateEmail(input.email)) {
      this.serverErrorMessages = 'Validation failed';
      return false;
    }

    if (!this.validateService.validatePwd(input.newpwdgen, input.newpwdgenrepeat)) {
      this.serverErrorMessages = 'Passwords need to match';
      return false;
    }


    this.authService.resetPassword(input).subscribe(data => {

      if (data._id) {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm();

        this.router.navigate(['/login']);
      } else {
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        this.router.navigate(['/resetpassword']);
      }
    },
    (err) => {
      this.serverErrorMessages = err.json().message.toString();
    });

  }


  resetForm() {
    this.model.email = '';
    this.model.newpwdgen = '';
    this.model.newpwdgenrepeat = '';
    this.model.recoverywordpetname = '';
    this.serverErrorMessages = '';
  }


}
