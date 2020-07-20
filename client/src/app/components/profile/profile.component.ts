import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserdetailsService } from '../../services/userdetails.service';
import { Subscription } from 'rxjs';
import { EmailValidator } from '@angular/forms';
import { EncrDecrService } from 'src/app/services/encrdecr.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  email: any = {};
  profile: any;
  location: String;
  mobile: String;
  dateOfBirth: String;
  occupation: String;
  name: String;
  _id: String;
  validTillDate: Date;
  usercategory: String;
  subscription: Subscription;

  constructor(public authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private userdetailsService: UserdetailsService,
    private EncrDecr: EncrDecrService) { }

  ngOnInit() {
    if (!localStorage.getItem('id_token')) {
      this.router.navigate(['/login']);
      return;
    }

    //     this.userdetailsService.getUseremail().subscribe(message => this.email = message)
    //  console.log("SUCCESS"+this.email);

    // this.userdetailsService.userdata.subscribe((data) => {
    //   console.log("I finally got data"+data);
    // })

    //    this.subscription =
    //       this.userdetailsService.getUseremail().subscribe(email => { this.email = email; });


    //       console.log("SUCCESS"+ this.subscription);
    // console.log(this.email);
    // this.email = this.userdetailsService.getUseremail().toString();

    this.email = this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem("_p0_"));

    //    this.authService.getProfile("chocku.engr@gmail.com").subscribe((data: any[]) => {

    this.authService.getProfile(this.email.toString()).subscribe((data: any[]) => {
      this.profile = data;
      console.log("profile received");
      console.log(data);

      this._id = this.profile._id;
      this.name = this.profile.name;
      this.location = this.profile.location;
      this.mobile = this.profile.mobile;
      this.dateOfBirth = this.profile.dateOfBirth;
      this.occupation = this.profile.occupation;
      this.validTillDate = new Date(this.profile.validtilldate);
      this.usercategory = this.profile.usercategory;

    })
  }

  navigateToEditProfile() {
    console.log("updated details");
    console.log(this._id);
    console.log(this.email);
    console.log(this.name);

    console.log(this.location);
    console.log(this.mobile);
    console.log(this.dateOfBirth);
    console.log(this.occupation);

    const profileWithUpdates = {
      _id: this._id,
      name: this.name,
      email: this.email,
      location: this.location,
      mobile: this.mobile,
      occupation: this.occupation,
      dateOfBirth: this.dateOfBirth

    }

    this.authService.updateProfile(profileWithUpdates).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Successfully Updated', { cssClass: 'alert-success', timeout: 3000 });
        //  this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        // this.router.navigate(['/register']);
      }
    })

  }

  navigateToEditPhoto() {
    console.log("Router needs to be assigned and built");

  }
}