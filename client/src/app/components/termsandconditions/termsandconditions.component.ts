import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.css']
})
export class TermsandconditionsComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router,
    public http: HttpClient) { }


  ngOnInit() {



  }
}
