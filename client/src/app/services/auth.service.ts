import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Http, Headers } from "@angular/http";
// import "rxjs/add/operator/map";
// import "rxjs/Rx";
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';
import { EncrDecrService } from 'src/app/services/encrdecr.service';

import { environment } from '../../environments/environment';
//import { truncate } from 'fs';


// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  totall: any;
  courseName: any;
  currentselection: any;
  paymentReferenceId: any;
  profileWithUpdates: any;
  useremail: any;
  product: any;
  oldproduct: any;
  role: any;
  iteml: any;

  //  constructor(private http: Http) { }

  constructor(public http: Http, private EncrDecr: EncrDecrService) {
    console.log("AuthService constructor called");
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(user);
    return this.http.post(environment.apiBaseUrl + '/register', user, { headers: headers })
      .pipe(map(res => res.json()));
  };


  resetPassword(input) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(input);
    return this.http.post(environment.apiBaseUrl + '/changePassword', input, { headers: headers })
      .pipe(map(res => res.json()));
  };



  addProfile(user) {
    console.log("Adding Profile");

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiBaseUrl + '/users/addProfile', user, { headers: headers })
      .pipe(map(res => res.json()));
  };

  updateProfile(profileWithUpdates) {
    console.log("Updating Profile");

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(environment.apiBaseUrl + '/profile/updateProfile', profileWithUpdates, { headers: headers })
      .pipe(map(res => res.json()));
  };

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiBaseUrl + '/authenticate', user, { headers: headers })
      .pipe(map(res => res.json()));
  }


  makePayment(paymentDetails) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiBaseUrl + '/payments/checkout', paymentDetails, { headers: headers })
      .pipe(map(res => res.json()));
  };


  getIndividualCourseAllDetails(courseName) {
    let headers = new Headers();

    // console.log(courseName);

    // this.loadToken();

    // headers.append('Authorization', this.authToken);

    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiBaseUrl + '/users/course/' + courseName, courseName)
      .pipe(map(res => res.json()));
  }

  getCmodulesByCourseName(courseName) {

    console.log("reached auth service again");
    console.log(courseName);

    let headers = new Headers();

    // console.log(courseName);

    // this.loadToken();

    // headers.append('Authorization', this.authToken);

    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiBaseUrl + '/users/cmodulesByCourseName/' + courseName, courseName)
      .pipe(map(res => res.json()));
  }


  getCoursesByCourseCategory(courseCategory) {
    let headers = new Headers();

    // console.log(courseName);

    // this.loadToken();

    // headers.append('Authorization', this.authToken);

    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiBaseUrl + '/users/coursesByCourseCategory/' + courseCategory, courseCategory)
      .pipe(map(res => res.json()));
  }

  getProfile(email) {
    let headers = new Headers();

    console.log("checking for..");
    console.log(email);


    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiBaseUrl + '/profile/profile/' + email, email)
      .pipe(map(res => res.json()));

  }


  getNotification(email) {
    let headers = new Headers();

    console.log("checking for..");
    console.log(email);


    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiBaseUrl + '/notification/' + email, email)
      .pipe(map(res => res.json()));

  }





  // getPayment(paymentReferenceId) {
  //   let headers = new Headers();
  //  // this.loadToken();

  //  headers.append('Content-Type', 'application/json');

  //   return this.http.get(environment.apiBaseUrl + '/payment/getpayment' + paymentReferenceId, paymentReferenceId)
  //   .pipe(map(res => res.json()));
  // }

  getProducts() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.get('users/product', { headers: headers })
      .pipe(map(res => res.json()));
  }

  addProduct(product) {
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiBaseUrl + '/users/addproduct', product, { headers: headers })
      .pipe(map(res => res.json()));
  }

  editProduct(product) {
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.put(environment.apiBaseUrl + '/users/editproduct', product, { headers: headers })
      .pipe(map(res => res.json()));
  }


  deleteProduct(productID) {
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete(environment.apiBaseUrl + '/users/deleteproduct/' + productID, { headers: headers })
      .pipe(map(res => res.json()));
  }


  storeUserData(token) {

    //storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    // localStorage.setItem('user', JSON.stringify(user));
    // localStorage.setItem('role', user.role);
    // this.authToken = token;
    // this.user = user;
    // this.role = user.role;
  }

  storeProductData(product1: any) {
    this.oldproduct = product1;

  }

  storeItemToOrder(item: any) {

    var tempItem = JSON.parse(localStorage.getItem("items"));
    if (tempItem == null) tempItem = [];
    localStorage.setItem("item", JSON.stringify(item));
    tempItem.push(item);
    localStorage.setItem("items", JSON.stringify(tempItem));

  }


  updateItemsInOrder(items: any) {
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(items));
  }
  getOrderFromItems() {
    return this.iteml = JSON.parse(localStorage.getItem("items"));
  }

  orderClear() {
    localStorage.removeItem("items");
    localStorage.removeItem("item");
  }
  getProductData() {
    return this.oldproduct;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }


  isUserCategoryTrial() {
    // console.log("checking user category");
    // console.log(this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')));
    if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "TRIAL") {
      return true;

    } else {
      return false;
    }
  }


  isUserCategoryFull() {
    if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "FULL") {
      return true;

    } else {
      return false;
    }
  }


  isUserCategoryNonRenew() {
    if (this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('_q1_')) == "NONRENEW") {
      return true;

    } else {
      return false;
    }
  }


  getUser() {
    return this.user;
  }

  getOrder() {
    return this.iteml = JSON.parse(localStorage.getItem("items"));;
  }
  storeTotal(total: any) {
    this.totall = total;
  }

  storeCurrentselection(currentselection: any) {
    this.currentselection = currentselection;
  }

  getCurrentselection() {
    return this.currentselection;
  }

  storePaymentReferenceId(paymentReferenceId: any) {
    this.paymentReferenceId = paymentReferenceId;
  }

  getPaymentReferenceId() {
    return this.paymentReferenceId;
  }


  storeUseremail(useremaill: any) {
    console.log("setting user email for auth serv:" + useremaill);
    this.useremail = useremaill;
  }

  getUseremail() {
    console.log("returning user email for auth serv:" + this.useremail);
    return this.useremail;
  }


  getTotal() {
    return this.totall;
  }
  itemslenth() {
    var tempItem = JSON.parse(localStorage.getItem("items"));
    if (tempItem.length > 0) {
      return true;
    }
    else
      return false;
  }

  checkTotalNotZero() {

    if (this.totall > 0) {
      return true;
    }
    else
      return false;
  }

  userRole() {
    const role = localStorage.getItem('role');
    if (role == 'admin')
      return true;
    else
      return false;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
