import { Component, OnInit } from '@angular/core';
import { UkeqMins15buyService } from '../../../services/ukeqmins15buy.service';
import { Router } from "@angular/router";
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-ukeqmins15buy',
  templateUrl: './ukeqmins15buy.component.html',
  styleUrls: ['./ukeqmins15buy.component.css']
})

export class UkeqMins15buyComponent implements OnInit {

  mins15buyDetails: any;
  mins15buyDetailsUnique;
  mins15buyDetails_length;
  button1: Boolean = true;
  button2: Boolean = false;
  button3: Boolean = false;
  button4: Boolean = false;
  button5: Boolean = false;
  button6: Boolean = false;
  button7: Boolean = false;
  button8: Boolean = false;
  block2: Boolean = false;
  block3: Boolean = false;
  block4: Boolean = false;
  block5: Boolean = false;
  block6: Boolean = false;
  block7: Boolean = false;
  block8: Boolean = false;


  constructor(public mins15buyService: UkeqMins15buyService, public router: Router, private EncrDecr: EncrDecrService) { }

  ngOnInit() {

    if (!localStorage.getItem('id_token')) {
      this.router.navigate(['/login']);
      return;

    }

    if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "NONRENEW") {
      this.router.navigate(['/cart']);
      return;

    }
    this.mins15buyService.getMins15buyProfile().
      subscribe((res: any[]) => {
        // console.log("RESPONSE");
        // console.log(res);

        this.mins15buyDetailsUnique = res;

        if (res.length < 50) {
          this.button1 = false;
        }

        this.mins15buyDetails_length = this.mins15buyDetailsUnique.length;
        this.mins15buyDetails = this.mins15buyDetailsUnique;

        if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "TRIAL") {
          this.mins15buyDetails = this.mins15buyDetails.slice(0, 3);

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
    this.mins15buyService.deleteToken();
    this.router.navigate(['/login']);
  }


  navigateToSignalInfoPage(mins15buyDetails_idparameter) {

    localStorage.setItem('mongoSignaltimeframe', "15 Mins");

    localStorage.setItem('mongoSignalForecast', "BUY/LONG");

    localStorage.setItem('mongoSignalexchange', "UK : LSE : EQ");


    localStorage.setItem('mongoSignalcurrency', "GBX");

    localStorage.setItem('mongoSignaltradeterm', "Short Term");
    localStorage.setItem('mongoSignalrequestedTable', "uk_lse_15minbuys");
    localStorage.setItem('mongoSignalrequestedSignalID', mins15buyDetails_idparameter);
    this.router.navigate(['/signalinfopage']);
  }

  onclickbutton1() {
    this.block2 = true;
    this.button1 = false;
    if (this.mins15buyDetails.length > 100) {
      this.button2 = true;
    }

  }

  onclickbutton2() {
    this.block3 = true;
    this.button2 = false;
    if (this.mins15buyDetails.length > 150) {
      this.button3 = true;
    }
  }

  onclickbutton3() {
    this.block4 = true;
    this.button3 = false;
    if (this.mins15buyDetails.length > 200) {
      this.button4 = true;
    }
  }

  onclickbutton4() {
    this.block5 = true;
    this.button4 = false;
    if (this.mins15buyDetails.length > 250) {
      this.button5 = true;
    }
  }
  onclickbutton5() {
    this.block6 = true;
    this.button5 = false;
    if (this.mins15buyDetails.length > 300) {
      this.button6 = true;
    }
  }
  onclickbutton6() {
    this.block7 = true;
    this.button6 = false;
    if (this.mins15buyDetails.length > 350) {
      this.button7 = true;
    }
  }
  onclickbutton7() {
    this.block8 = true;
    this.button7 = false;
    if (this.mins15buyDetails.length > 400) {
      this.button8 = true;
    }
  }
  onclickbutton8() {

    this.button8 = false;

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

  getBlock5status() {
    return this.block5;
  }
  getBlock6status() {
    return this.block6;
  }
  getBlock7status() {
    return this.block7;
  }
  getBlock8status() {
    return this.block8;
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

  getButton5status() {
    return this.button5;
  }
  getButton6status() {
    return this.button6;
  }
  getButton7status() {
    return this.button7;
  }
  getButton8status() {
    return this.button8;
  }

  onRefresh() {

    this.mins15buyService.getMins15buyProfile().
      subscribe((res: any[]) => {

        this.mins15buyDetailsUnique = res;
        if (res.length < 50) {
          this.button1 = false;
        }

        this.mins15buyDetails_length = this.mins15buyDetailsUnique.length;
        this.mins15buyDetails = this.mins15buyDetailsUnique;


        if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "TRIAL") {
          this.mins15buyDetails = this.mins15buyDetails.slice(0, 3);
          this.button1 = false;
        }

      },
        err => {
          console.log(err);

        }
      );


  }

}
