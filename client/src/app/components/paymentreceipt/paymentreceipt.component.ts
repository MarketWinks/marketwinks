import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ValidateService } from "../../services/validate.service";

@Component({
  selector: 'app-paymentreceipt',
  templateUrl: './paymentreceipt.component.html',
  styleUrls: ['./paymentreceipt.component.css']
})
export class PaymentreceiptComponent implements OnInit {
  paymentReferenceId: String;
  receiptURL: String;
  paymentsuccess: Boolean;
  
  constructor(private flashMessage: FlashMessagesService, public authService: AuthService,
    private router: Router, private validateService: ValidateService) { }

  ngOnInit() {
    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
      return;
    }
    
    if(localStorage.getItem("receiptURL") == "empty"){
      this.paymentsuccess = false;

    } else {
      this.paymentsuccess = true;
      this.paymentReferenceId = this.authService.getPaymentReferenceId();
      this.receiptURL = localStorage.getItem("receiptURL");
      
    }
  
  }

  paymentstatus(){
    return this.paymentsuccess;
  }

}
