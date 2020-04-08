import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OurframeworkComponent } from './components/ourframework/ourframework.component';
import { UkeqDashboardComponent } from './components/ukeqdashboard/ukeqdashboard.component';
import { CourseComponent } from './components/course/course.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import {ValidateService} from './services/validate.service';
import {AuthService } from "./services/auth.service";
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AuthGuard } from "./guards/auth.guard";
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CollapseModule } from 'ngx-bootstrap';
import { PaymentreceiptComponent } from './components/paymentreceipt/paymentreceipt.component';

import { UkeqMonthlysellComponent } from './components/ukeqdashboard/ukeqmonthlysell/ukeqmonthlysell.component';
import { UkeqMonthlybuyComponent } from './components/ukeqdashboard/ukeqmonthlybuy/ukeqmonthlybuy.component';
import { UkeqWeeklysellComponent } from './components/ukeqdashboard/ukeqweeklysell/ukeqweeklysell.component';
import { UkeqWeeklybuyComponent } from './components/ukeqdashboard/ukeqweeklybuy/ukeqweeklybuy.component';
import { UkeqDailysellComponent } from './components/ukeqdashboard/ukeqdailysell/ukeqdailysell.component';
import { UkeqDailybuyComponent } from './components/ukeqdashboard/ukeqdailybuy/ukeqdailybuy.component';


import { UkeqHourlysellComponent } from './components/ukeqdashboard/ukeqhourlysell/ukeqhourlysell.component';
import { UkeqHourlybuyComponent } from './components/ukeqdashboard/ukeqhourlybuy/ukeqhourlybuy.component';

import { UkeqMins30sellComponent } from './components/ukeqdashboard/ukeqmins30sell/ukeqmins30sell.component';
import { UkeqMins30buyComponent } from './components/ukeqdashboard/ukeqmins30buy/ukeqmins30buy.component';

import { UkeqMins15sellComponent } from './components/ukeqdashboard/ukeqmins15sell/ukeqmins15sell.component';
import { UkeqMins15buyComponent } from './components/ukeqdashboard/ukeqmins15buy/ukeqmins15buy.component';

import { UkeqMins5sellComponent } from './components/ukeqdashboard/ukeqmins5sell/ukeqmins5sell.component';
import { UkeqMins5buyComponent } from './components/ukeqdashboard/ukeqmins5buy/ukeqmins5buy.component';


import { CarouselModule } from 'ngx-owl-carousel-o';

//safe piping for videos to dynamically load in iframe
import { SafePipe } from './components/course/safe.pipe';
import { ContactusComponent } from './components/contactus/contactus.component';

import { InlineEditComponent } from './components/inline-edit/inline-edit.component';


const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'support', component: SupportComponent},
  {path:'ourframework', component: OurframeworkComponent},
  { path: 'course', component: CourseComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'addproduct', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'editproduct', component: EditProductComponent, canActivate: [AuthGuard]},
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'paymentreceipt', component: PaymentreceiptComponent, canActivate: [AuthGuard] },
  {
    path: 'ukeqdailysell', component: UkeqDashboardComponent,
    children: [{ path: '', component: UkeqDailysellComponent }]
},
{
  path: 'ukeqdailybuy', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqDailybuyComponent }]
},

{
  path: 'ukeqmonthlysell', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqMonthlysellComponent }]
},
{
  path: 'ukeqmonthlybuy', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqMonthlybuyComponent }]
},


{
  path: 'ukeqweeklysell', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqWeeklysellComponent }]
},
{
  path: 'ukeqweeklybuy', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqWeeklybuyComponent }]
},


{
  path: 'ukeqhourlysell', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqHourlysellComponent }]
},
{
  path: 'ukeqhourlybuy', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqHourlybuyComponent }]
},




{
  path: 'ukeqmins30sell', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqMins30sellComponent }]
},
{
  path: 'ukeqmins30buy', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqMins30buyComponent }]
},



{
  path: 'ukeqmins15sell', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqMins15sellComponent }]
},
{
  path: 'ukeqmins15buy', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqMins15buyComponent }]
},


{
  path: 'ukeqmins5sell', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqMins5sellComponent }]
},
{
  path: 'ukeqmins5buy', component: UkeqDashboardComponent,
  children: [{ path: '', component: UkeqMins5buyComponent }]
}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UkeqDashboardComponent,
    ProfileComponent,
    AddProductComponent,
    EditProductComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    PaymentreceiptComponent,
    CourseComponent,
    AboutusComponent,
    OurframeworkComponent,
    ContactusComponent,
    SupportComponent,
    InlineEditComponent,
    UkeqDailysellComponent,
    UkeqDailybuyComponent,

    UkeqMonthlysellComponent,
    UkeqMonthlybuyComponent,
    UkeqWeeklysellComponent,
    UkeqWeeklybuyComponent,
    UkeqHourlysellComponent,
    UkeqHourlybuyComponent,
    UkeqMins30sellComponent,
    UkeqMins30buyComponent,
    UkeqMins15sellComponent,
    UkeqMins15buyComponent,
    UkeqMins5sellComponent,
    UkeqMins5buyComponent,
 
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    //NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CollapseModule,
    HttpClientModule
  ],
  providers: [ValidateService,AuthService,AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
