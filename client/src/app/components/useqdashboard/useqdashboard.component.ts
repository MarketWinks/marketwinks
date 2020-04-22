import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-useqdashboard',
  templateUrl: './useqdashboard.component.html',
  styleUrls: ['./useqdashboard.component.css']
})
export class UseqDashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);
    }
  }

}




// export class DashboardComponent implements OnInit {
//   products: any;
//   agileScrumCourses: any;
//   digitalBusinessAnalysisCourses: any;
//   digitalProductManagementCourses: any;
//   digitalProductOwnerCourses: any;
//   digitalProjectManagementCourses: any;
//   digitalTransformationCourses: any;
//   // rings: any = [];
//   // ears: any = [];
//   // necks: any = [];
//   // pens: any = [];
//   // bracs: any = [];
//   i: any;

//   name: String;
//   product_id:String;
//   img: String;
//   price: 350;
//   added: boolean;

  
//   constructor(public authService: AuthService,
//     private router: Router, private flashMessage: FlashMessagesService,
//     private toastr: ToastrService) {
//      }


//   // ngOnInit() {
//   //   this.authService.getProducts().subscribe(data => {
//   //     this.products = data;
//   //     for (let product of this.products) {
//   //       if (product.Catag == "ring") {
//   //         // 1, "string", false
//   //         this.rings.push(product);
//   //       }
//   //       else if (product.Catag == "neck") {
//   //         this.necks.push(product);
//   //       }
//   //       else if (product.Catag == "brac") {
//   //         this.bracs.push(product);
//   //       }
//   //       else if (product.Catag == "pen") {
//   //         this.pens.push(product);
//   //       }
//   //       else if (product.Catag == "ear") {
//   //         this.ears.push(product);
//   //       }
//   //     }
//   //   }, err => {
//   //     console.log(err);
//   //     return false;
//   //   });
//   // }


//   ngOnInit() {
    
//       // this.products = 

//       // {
//       //   "products":[
        
//       //     {
//       //       "name" : "red",
//       //       "description": "desc"
//       //     },
//       //     {
//       //       "name" : "green",
//       //       "description": "desc"
//       //     }
//       //   ]
        

//       // };
// this.authService.getCoursesByCourseCategory("Agile Scrum").subscribe((data: any[]) =>{
  
//   console.log("got this data");
//   console.log(data);

//   this.agileScrumCourses = data;
  
//   });

//   this.authService.getCoursesByCourseCategory("Digital Business Analysis").subscribe((data: any[]) =>{
  
//     console.log("got this data");
//     console.log(data);
  
//     this.digitalBusinessAnalysisCourses = data;
    
//     });

    
//   this.authService.getCoursesByCourseCategory("Digital Product Management").subscribe((data: any[]) =>{
  
//     console.log("got this data");
//     console.log(data);
  
//     this.digitalProductManagementCourses = data;
    
//     });

    

    
    
//   this.authService.getCoursesByCourseCategory("Digital Product Owner").subscribe((data: any[]) =>{
  
//     console.log("got this data");
//     console.log(data);
  
//     this.digitalProductOwnerCourses = data;
    
//     });

    
    
//   this.authService.getCoursesByCourseCategory("Digital Project Management").subscribe((data: any[]) =>{
  
//     console.log("got this data");
//     console.log(data);
  
//     this.digitalProjectManagementCourses = data;
    
//     });

//   this.authService.getCoursesByCourseCategory("Digital Transformation").subscribe((data: any[]) =>{
  
//     console.log("got this data");
//     console.log(data);
  
//     this.digitalTransformationCourses = data;
    
//     });


//       this.products = [
//              {
//             "name" : "AgilePM",
//             "description": "Learn how to create your unique selling point and market yourself as as DBT professional",
//             "img": "../../assets/images/agileWork.jpg"
//           },
//           {
//             "name" : "How to sell yourself as a DBT PM or BA",
//             "description": "Learn how to create your unique selling point and market yourself as as DBT professional",
//             "img": "../../assets/images/agileWork.jpg"
//           }
      
//       ];
     
    
//   }

//   onEditProduct(product: any) {
//     this.authService.storeProductData(product);
//     this.router.navigate(['editproduct']);
//   }
//   onDeleteProduct(product: any) {
//     this.authService.deleteProduct(product._id).subscribe(data => {
//       if (data.success) {
//         this.toastr.success('Successfully Deleted!', 'Delete!', {timeOut: 2000,});
//         this.router.navigate(['/products']);
//       } else {
//         this.toastr.error('Something went wrong!', 'Error!', { timeOut: 2000, });
//         this.router.navigate(['/products']);
//       }
//     });
//   }

//   onAddProductToCart(product){
//     const item = {
//       name: product.name,
//       product_id: product._id,
//       img: product.img,
//       price: 350,
//       added: true,
//       quantity:1
//     }
//     this.authService.storeItemToOrder(item);
//     this.toastr.success('Item is Added to your Cartng!', 'Cart!',{
//       timeOut: 1000,
//     });
   
//   }

  
//   onNavigateToCourse(course){
    
//     console.log(course.courseName);

//       localStorage.setItem("navigateToCourseTarget", course.courseName)

//       this.router.navigate(['course']);

//     // this.toastr.success('Item is Added to your Cartng!', 'Cart!',{
//     //   timeOut: 1000,
//     // });
   
//   }



// }
