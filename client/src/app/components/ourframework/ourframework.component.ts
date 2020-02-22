import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ourframework',
  templateUrl: './ourframework.component.html',
  styleUrls: ['./ourframework.component.css']
})
export class OurframeworkComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router)  { }

  ngOnInit() {
    
  
  }


}
