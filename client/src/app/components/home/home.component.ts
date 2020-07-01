import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

import { RssfeedNewsArticleService } from '../../services/rssfeedNewsArticle.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rssfeedNewsArticles;
  rssfeedNewsArticlesTemp: any[];

  constructor(public authService:AuthService,private router:Router, 
    public rssfeedNewsArticleService:RssfeedNewsArticleService,
    public http: HttpClient)  { }

    
  model ={
    symbol :''
  };

  ngOnInit() {

//     this.rssfeedNewsArticleService.getLivePrice().
//     subscribe((res: any[]) => {
// console.log("live price");
// console.log(res);
//     });

    this.rssfeedNewsArticleService.getRssfeedNewsArticleProfile().
    subscribe((res: any[]) => {

      console.log(res);

    //  this.rssfeedNewsArticlesTemp = res.reverse();
      this.rssfeedNewsArticlesTemp = res;
    //  this.rssfeedNewsArticlesTemp = this.rssfeedNewsArticlesTemp.slice(0,19);

      for (var i = 0; i < this.rssfeedNewsArticlesTemp.length; i++) {
        this.rssfeedNewsArticlesTemp[i].title = this.rssfeedNewsArticlesTemp[i].title.replace("<b>","");
        this.rssfeedNewsArticlesTemp[i].title = this.rssfeedNewsArticlesTemp[i].title.replace("</b>","");
        this.rssfeedNewsArticlesTemp[i].title = this.rssfeedNewsArticlesTemp[i].title.replace("&#39;","");
        this.rssfeedNewsArticlesTemp[i].title = this.rssfeedNewsArticlesTemp[i].title.replace("&nbsp;","");
        this.rssfeedNewsArticlesTemp[i].title = this.rssfeedNewsArticlesTemp[i].title.replace("amp;","");
      
       
        this.rssfeedNewsArticlesTemp[i].content = this.rssfeedNewsArticlesTemp[i].content.replace("<b>","");
        this.rssfeedNewsArticlesTemp[i].content = this.rssfeedNewsArticlesTemp[i].content.replace("</b>","");
        this.rssfeedNewsArticlesTemp[i].content = this.rssfeedNewsArticlesTemp[i].content.replace("&#39;","");
        this.rssfeedNewsArticlesTemp[i].content = this.rssfeedNewsArticlesTemp[i].content.replace("&nbsp;","");
        this.rssfeedNewsArticlesTemp[i].content = this.rssfeedNewsArticlesTemp[i].content.replace("amp;","");
 
      }
   
      this.rssfeedNewsArticles = this.rssfeedNewsArticlesTemp;



    },
    err => {
      console.log(err);

    });

  }
  
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  
  onSubmit(){
      const symbol = this.model.symbol
    
console.log(symbol);
localStorage.setItem('searchsymbol', symbol);
this.router.navigate(['/infopage']);
    
  }

  gotoSignup(){
    this.router.navigate(['/register']);

  }

  
  gotoCart(){
    this.router.navigate(['/cart']);

    
  }
}
