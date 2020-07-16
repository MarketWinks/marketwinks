import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';

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

  constructor(private authSerivce:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
      return;
    }

    this.email = localStorage.getItem("LoggedInUserEmail");

    this.authSerivce.getNotification(this.email.toString()).subscribe((data: any[]) =>{
    this.notifications = data;
console.log("notification received");
    console.log(data);

    
  })
}

}