import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items:any;
  quantity:number=1;
  subtotal:number;
  totalitems:number;
  total:number;
  currentselection:any;

  constructor(public authService: AuthService,
    private router: Router, private flashMessage: FlashMessagesService) { }


  ngOnInit() {
    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
      return;
    }
    
   // this.items =this.authService.getOrderFromItems();
    //if(this.items==null){
      //this.flashMessage.show('Please add some items to Cart', { cssClass: 'alert-danger', timeout: 2000 });
    //  this.flashMessage.show('Please note only one subscription can be added', { cssClass: 'alert-danger', timeout: 2000 });
      // this.subtotal=0;
      // this.total=0;
      // this.totalitems=0;
      this.currentselection="Nil";
      this.total=0;
      
    this.authService.storeTotal(this.total);
     


   // }
    // else{
    // this.totalitems=this.items.length;
    //  this.subtotal=this.totalitems * 350;
    //  this.total=this.subtotal + 6.94;
    // }
      
  }
  // removeProduct(i){
  //   if (i > -1) {
  //     this.items.splice(i, 1);
  //   }
  //   this.totalitems = this.items.length;
  //   this.subtotal = this.totalitems * 350;
  //   this.total = this.subtotal + 6.94;
  //   this.authService.updateItemsInOrder(this.items);
  //   this.router.navigate(['/cart']);
  // }

  removeProduct(){

    this.currentselection="Nil";
    this.total=0;
    
    this.authService.storeTotal(this.total);
   
    
  }

  addProduct30Days(){

    this.currentselection="30 Days Subscription";
    this.total=36;
    
    this.authService.storeTotal(this.total);
   
    
  }
 
  
  addProduct60Days(){

    this.currentselection="60 Days Subscription";
    this.total=69;
    
    this.authService.storeTotal(this.total);
   
    
  }

  
  addProduct90Days(){

    this.currentselection="90 Days Subscription";
    this.total=97;
    
    this.authService.storeTotal(this.total);
   
    
  }
  // itemslenth(){
  //   if(this.items.length ==null|| this.items.length == 0){
  //     return false; 
  //   }
  //   else
  //   return true;
  // }
  checkout(){

    this.authService.storeCurrentselection(this.currentselection);
    this.authService.storeTotal(this.total);
    this.router.navigate(['/checkout']);


    // if (this.items.length == null || this.items.length == 0){
     
    //   this.flashMessage.show('Please add some items to Cart', { cssClass: 'alert-danger', timeout: 3000 });
    // }
    // else{
      
    //   this.authService.storeTotal(this.total);
    //    this.router.navigate(['/checkout']);
    // }

  }

  

  

}
