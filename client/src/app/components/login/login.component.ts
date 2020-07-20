import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { EncrDecrService } from 'src/app/services/encrdecr.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public authService: AuthService, private router: Router,
    private userdetailsService: UserdetailsService,
    private EncrDecr: EncrDecrService) { }


  model = {
    email: '',
    password: ''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  checkuseremail: any;

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


    //    this.userdetailsService.storeUseremail(this.model.email);
    // this.checkuseremail = this.userdetailsService.getUseremail();
    // console.log("Hey het heu");
    // console.log(this.checkuseremail.toString());

//reference
    // var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', this.model.email);
    // var decrypted = this.EncrDecr.get('123456$#@$^@1ERF', encrypted);

    // console.log('Encrypted :' + encrypted);
    // console.log('Decrypted :' + decrypted);



    localStorage.setItem('_p0_', this.EncrDecr.set('123456$#@$^@1ERF', this.model.email));

    this.authService.authenticateUser(user).subscribe(data => {


      if (data.token) {
        this.authService.storeUserData(data.token);

        //this.authService.storeUseremail(user.email);


        this.authService.getProfile(user.email).subscribe(profiledata => {

          localStorage.setItem('_q1_', this.EncrDecr.set('123456$#@$^@1ERF', profiledata.usercategory));



        });
        this.router.navigate(['']);
      } else if (data == "Please verify the email account") {
        this.serverErrorMessages = 'Please verify the email account';
        this.router.navigate(['login']);
      } else {
        this.serverErrorMessages = 'Something went wrong.';
        this.router.navigate(['login']);
      }
    },
      (err) => {
        this.serverErrorMessages = err.json().message.toString();

      });
  }
}