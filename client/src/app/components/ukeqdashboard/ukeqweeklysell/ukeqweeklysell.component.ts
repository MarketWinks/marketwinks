import { Component, OnInit } from '@angular/core';
import { UkeqWeeklysellService } from '../../../services/ukeqweeklysell.service';
import { Router } from "@angular/router";
import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-ukeqweeklysell',
  templateUrl: './ukeqweeklysell.component.html',
  styleUrls: ['./ukeqweeklysell.component.css']
})


export class UkeqWeeklysellComponent implements OnInit {

  weeklysellDetails: any;
  weeklysellDetailsUnique;
  weeklysellDetails_length;
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


  constructor(public weeklysellService: UkeqWeeklysellService, public router: Router, private EncrDecr: EncrDecrService) { }

  ngOnInit() {

    if (!localStorage.getItem('id_token')) {
      this.router.navigate(['/login']);
      return;

    }

    if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "NONRENEW") {
      this.router.navigate(['/cart']);
      return;

    }
    this.weeklysellService.getWeeklysellProfile().
      subscribe((res: any[]) => {
        // console.log("RESPONSE");
        // console.log(res);

        this.weeklysellDetailsUnique = res;

        if (res.length < 50) {
          this.button1 = false;
        }

        this.weeklysellDetails_length = this.weeklysellDetailsUnique.length;
        this.weeklysellDetails = this.weeklysellDetailsUnique;

        if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "TRIAL") {
          this.weeklysellDetails = this.weeklysellDetails.slice(0, 3);

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
    this.weeklysellService.deleteToken();
    this.router.navigate(['/login']);
  }


  navigateToSignalInfoPage(weeklysellDetails_idparameter) {

    localStorage.setItem('mongoSignaltimeframe', "Weekly");

    localStorage.setItem('mongoSignalForecast', "SELL/LONG");

    localStorage.setItem('mongoSignalexchange', "UK : LSE : EQ");


    localStorage.setItem('mongoSignalcurrency', "GBX");

    localStorage.setItem('mongoSignaltradeterm', "Short Term");
    localStorage.setItem('mongoSignalrequestedTable', "uk_lse_weeklysells");
    localStorage.setItem('mongoSignalrequestedSignalID', weeklysellDetails_idparameter);
    this.router.navigate(['/signalinfopage']);
  }

  onclickbutton1() {
    this.block2 = true;
    this.button1 = false;
    if (this.weeklysellDetails.length > 100) {
      this.button2 = true;
    }

  }

  onclickbutton2() {
    this.block3 = true;
    this.button2 = false;
    if (this.weeklysellDetails.length > 150) {
      this.button3 = true;
    }
  }

  onclickbutton3() {
    this.block4 = true;
    this.button3 = false;
    if (this.weeklysellDetails.length > 200) {
      this.button4 = true;
    }
  }

  onclickbutton4() {
    this.block5 = true;
    this.button4 = false;
    if (this.weeklysellDetails.length > 250) {
      this.button5 = true;
    }
  }
  onclickbutton5() {
    this.block6 = true;
    this.button5 = false;
    if (this.weeklysellDetails.length > 300) {
      this.button6 = true;
    }
  }
  onclickbutton6() {
    this.block7 = true;
    this.button6 = false;
    if (this.weeklysellDetails.length > 350) {
      this.button7 = true;
    }
  }
  onclickbutton7() {
    this.block8 = true;
    this.button7 = false;
    if (this.weeklysellDetails.length > 400) {
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

    this.weeklysellService.getWeeklysellProfile().
      subscribe((res: any[]) => {

        this.weeklysellDetailsUnique = res;
        if (res.length < 50) {
          this.button1 = false;
        }

        this.weeklysellDetails_length = this.weeklysellDetailsUnique.length;
        this.weeklysellDetails = this.weeklysellDetailsUnique;


        if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "TRIAL") {
          this.weeklysellDetails = this.weeklysellDetails.slice(0, 3);
          this.button1 = false;
        }

      },
        err => {
          console.log(err);

        }
      );


  }

}
