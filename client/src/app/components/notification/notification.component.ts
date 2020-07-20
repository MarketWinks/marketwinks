import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';

import { EncrDecrService } from 'src/app/services/encrdecr.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  email: String;
  targetuser: String;
  time: any;
  message: String;
  isRead: String;
  _id: String;
  notifications: any;

  constructor(public authSerivce: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private EncrDecr: EncrDecrService) { }

  ngOnInit() {
    if (!localStorage.getItem('id_token')) {
      this.router.navigate(['/login']);
      return;
    }

    this.email = this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_p0_'));

    this.authSerivce.getNotification(this.email.toString()).subscribe((data: any[]) => {
      this.notifications = data;
      console.log("notification received");
      console.log(data);


    })
  }

}