import { Component, OnInit } from '@angular/core';
import { UkeqMins5buyService } from '../../../services/ukeqmins5buy.service';
import { Router } from "@angular/router";
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-ukeqmins5buy',
  templateUrl: './ukeqmins5buy.component.html',
  styleUrls: ['./ukeqmins5buy.component.css']
})

export class UkeqMins5buyComponent implements OnInit {

  mins5buyDetails: any;
  mins5buyDetailsUnique;
  mins5buyDetails_length;
  button1: Boolean = true;
  button2: Boolean = false;
  button3: Boolean = false;
  button4: Boolean = false;
  block2: Boolean = false;
  block3: Boolean = false;
  block4: Boolean = false;

  constructor(public mins5buyService: UkeqMins5buyService, public router: Router, private EncrDecr: EncrDecrService) { }

  ngOnInit() {

    if (!localStorage.getItem('id_token')) {
      this.router.navigate(['/login']);
      return;

    }

    if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "NONRENEW") {
      this.router.navigate(['/cart']);
      return;

    }
    this.mins5buyService.getMins5buyProfile().
      subscribe((res: any[]) => {
        // console.log("RESPONSE");
        // console.log(res);

        this.mins5buyDetailsUnique = res;

        if (res.length < 50) {
          this.button1 = false;
        }

        this.mins5buyDetails_length = this.mins5buyDetailsUnique.length;
        this.mins5buyDetails = this.mins5buyDetailsUnique;

        if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "TRIAL") {
          this.mins5buyDetails = this.mins5buyDetails.slice(0, 3);

          this.button1 = false;

        }


      },
        err => {
          console.log(err);

        }
      );
  }


  onLogout() {
    // this.userService.deleteToken();
    this.mins5buyService.deleteToken();
    this.router.navigate(['/login']);
  }


  navigateToSignalInfoPage(mins5buyDetails_idparameter) {

    localStorage.setItem('mongoSignaltimeframe', "5 Mins");

    localStorage.setItem('mongoSignalForecast', "BUY/LONG");

    localStorage.setItem('mongoSignalexchange', "UK : LSE : EQ");


    localStorage.setItem('mongoSignalcurrency', "GBX");

    localStorage.setItem('mongoSignaltradeterm', "Short Term");
    localStorage.setItem('mongoSignalrequestedTable', "uk_lse_5minbuys");
    localStorage.setItem('mongoSignalrequestedSignalID', mins5buyDetails_idparameter);
    this.router.navigate(['/signalinfopage']);
  }

  onclickbutton1() {
    this.block2 = true;
    this.button1 = false;
    if (this.mins5buyDetails.length > 100) {
      this.button2 = true;
    }

  }

  onclickbutton2() {
    this.block3 = true;
    this.button2 = false;
    if (this.mins5buyDetails.length > 150) {
      this.button3 = true;
    }
  }

  onclickbutton3() {
    this.block4 = true;
    this.button3 = false;
    if (this.mins5buyDetails.length > 200) {
      this.button4 = true;
    }
  }
  onclickbutton4() {
    this.button4 = false;
  }

  getBlock2status() {
    return this.block2;
  }

  getBlock3status() {
    return this.block3;
  }
  getBlock4status() {
    return this.block4;
  }

  getButton1status() {
    return this.button1;
  }
  getButton2status() {
    return this.button2;
  }
  getButton3status() {
    return this.button3;
  }
  getButton4status() {
    return this.button4;
  }

  onRefresh() {

    this.mins5buyService.getMins5buyProfile().
      subscribe((res: any[]) => {

        this.mins5buyDetailsUnique = res;
        if (res.length < 50) {
          this.button1 = false;
        }

        this.mins5buyDetails_length = this.mins5buyDetailsUnique.length;
        this.mins5buyDetails = this.mins5buyDetailsUnique;


        if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "TRIAL") {
          this.mins5buyDetails = this.mins5buyDetails.slice(0, 3);
          this.button1 = false;
        }

      },
        err => {
          console.log(err);

        }
      );


  }

}
