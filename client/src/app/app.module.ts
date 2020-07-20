import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Injector } from '@angular/core';
import {EncrDecrService} from './services/encrdecr.service';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OurframeworkComponent } from './components/ourframework/ourframework.component';
import { UkeqDashboardComponent } from './components/ukeqdashboard/ukeqdashboard.component';
import { UseqDashboardComponent } from './components/useqdashboard/useqdashboard.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

import { NotificationComponent } from './components/notification/notification.component';


import { CourseComponent } from './components/course/course.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ValidateService } from './services/validate.service';
import { AuthService } from "./services/auth.service";
import { FlashMessagesModule } from 'angular2-flash-messages';
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




import { UseqMonthlysellComponent } from './components/useqdashboard/useqmonthlysell/useqmonthlysell.component';
import { UseqMonthlybuyComponent } from './components/useqdashboard/useqmonthlybuy/useqmonthlybuy.component';
import { UseqWeeklysellComponent } from './components/useqdashboard/useqweeklysell/useqweeklysell.component';
import { UseqWeeklybuyComponent } from './components/useqdashboard/useqweeklybuy/useqweeklybuy.component';
import { UseqDailysellComponent } from './components/useqdashboard/useqdailysell/useqdailysell.component';
import { UseqDailybuyComponent } from './components/useqdashboard/useqdailybuy/useqdailybuy.component';


import { UseqHourlysellComponent } from './components/useqdashboard/useqhourlysell/useqhourlysell.component';
import { UseqHourlybuyComponent } from './components/useqdashboard/useqhourlybuy/useqhourlybuy.component';

import { UseqMins30sellComponent } from './components/useqdashboard/useqmins30sell/useqmins30sell.component';
import { UseqMins30buyComponent } from './components/useqdashboard/useqmins30buy/useqmins30buy.component';

import { UseqMins15sellComponent } from './components/useqdashboard/useqmins15sell/useqmins15sell.component';
import { UseqMins15buyComponent } from './components/useqdashboard/useqmins15buy/useqmins15buy.component';

import { UseqMins5sellComponent } from './components/useqdashboard/useqmins5sell/useqmins5sell.component';
import { UseqMins5buyComponent } from './components/useqdashboard/useqmins5buy/useqmins5buy.component';

import { InfopageDailybuyComponent } from './components/infopage/infopagedailybuy/infopagedailybuy.component';
import { InfopageDailysellComponent } from './components/infopage/infopagedailysell/infopagedailysell.component';
import { InfopageWeeklybuyComponent } from './components/infopage/infopageweeklybuy/infopageweeklybuy.component';
import { InfopageWeeklysellComponent } from './components/infopage/infopageweeklysell/infopageweeklysell.component';
import { InfopageMonthlybuyComponent } from './components/infopage/infopagemonthlybuy/infopagemonthlybuy.component';
import { InfopageMonthlysellComponent } from './components/infopage/infopagemonthlysell/infopagemonthlysell.component';
import { InfopageHourlybuyComponent } from './components/infopage/infopagehourlybuy/infopagehourlybuy.component';
import { InfopageHourlysellComponent } from './components/infopage/infopagehourlysell/infopagehourlysell.component';
import { Infopage30MinsbuyComponent } from './components/infopage/infopagemins30buy/infopagemins30buy.component';
import { Infopage30MinssellComponent } from './components/infopage/infopagemins30sell/infopagemins30sell.component';
import { Infopage15MinsbuyComponent } from './components/infopage/infopagemins15buy/infopagemins15buy.component';
import { Infopage15MinssellComponent } from './components/infopage/infopagemins15sell/infopagemins15sell.component';
import { Infopage5MinsbuyComponent } from './components/infopage/infopagemins5buy/infopagemins5buy.component';
import { Infopage5MinssellComponent } from './components/infopage/infopagemins5sell/infopagemins5sell.component';

import { InfopageComponent } from './components/infopage/infopage.component';
import { SignalinfopageComponent } from './components/signalinfopage/signalinfopage.component';
import { FooterComponent } from './components/footer/footer.component';


import { WatchlistDailybuyComponent } from './components/watchlist/watchlistdailybuy/watchlistdailybuy.component';
import { WatchlistDailysellComponent } from './components/watchlist/watchlistdailysell/watchlistdailysell.component';
import { WatchlistWeeklybuyComponent } from './components/watchlist/watchlistweeklybuy/watchlistweeklybuy.component';
import { WatchlistWeeklysellComponent } from './components/watchlist/watchlistweeklysell/watchlistweeklysell.component';
import { WatchlistMonthlybuyComponent } from './components/watchlist/watchlistmonthlybuy/watchlistmonthlybuy.component';
import { WatchlistMonthlysellComponent } from './components/watchlist/watchlistmonthlysell/watchlistmonthlysell.component';
import { WatchlistHourlybuyComponent } from './components/watchlist/watchlisthourlybuy/watchlisthourlybuy.component';
import { WatchlistHourlysellComponent } from './components/watchlist/watchlisthourlysell/watchlisthourlysell.component';
import { Watchlist30MinsbuyComponent } from './components/watchlist/watchlistmins30buy/watchlistmins30buy.component';
import { Watchlist30MinssellComponent } from './components/watchlist/watchlistmins30sell/watchlistmins30sell.component';
import { Watchlist15MinsbuyComponent } from './components/watchlist/watchlistmins15buy/watchlistmins15buy.component';
import { Watchlist15MinssellComponent } from './components/watchlist/watchlistmins15sell/watchlistmins15sell.component';
import { Watchlist5MinsbuyComponent } from './components/watchlist/watchlistmins5buy/watchlistmins5buy.component';
import { Watchlist5MinssellComponent } from './components/watchlist/watchlistmins5sell/watchlistmins5sell.component';

import { WatchlistComponent } from './components/watchlist/watchlist.component';

import { UserdetailsService } from './services/userdetails.service';

//safe piping for videos to dynamically load in iframe
import { SafePipe } from './components/course/safe.pipe';
import { ContactusComponent } from './components/contactus/contactus.component';

import { InlineEditComponent } from './components/inline-edit/inline-edit.component';

import { TermsandconditionsComponent } from './components/termsandconditions/termsandconditions.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },

  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'support', component: SupportComponent },
  { path: 'termsandconditions', component: TermsandconditionsComponent },
  { path: 'ourframework', component: OurframeworkComponent },
  { path: 'course', component: CourseComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'notification', component: NotificationComponent, canActivate: [AuthGuard] },
  { path: 'addproduct', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'editproduct', component: EditProductComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'paymentreceipt', component: PaymentreceiptComponent, canActivate: [AuthGuard] },
  { path: 'infopage', component: InfopageComponent, canActivate: [AuthGuard] },
  { path: 'watchlist', component: WatchlistComponent, canActivate: [AuthGuard] },
  { path: 'signalinfopage', component: SignalinfopageComponent, canActivate: [AuthGuard] },

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
  },


  {
    path: 'useqdailysell', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqDailysellComponent }]
  },
  {
    path: 'useqdailybuy', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqDailybuyComponent }]
  },

  {
    path: 'useqmonthlysell', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqMonthlysellComponent }]
  },
  {
    path: 'useqmonthlybuy', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqMonthlybuyComponent }]
  },


  {
    path: 'useqweeklysell', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqWeeklysellComponent }]
  },
  {
    path: 'useqweeklybuy', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqWeeklybuyComponent }]
  },


  {
    path: 'useqhourlysell', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqHourlysellComponent }]
  },
  {
    path: 'useqhourlybuy', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqHourlybuyComponent }]
  },




  {
    path: 'useqmins30sell', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqMins30sellComponent }]
  },
  {
    path: 'useqmins30buy', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqMins30buyComponent }]
  },



  {
    path: 'useqmins15sell', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqMins15sellComponent }]
  },
  {
    path: 'useqmins15buy', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqMins15buyComponent }]
  },


  {
    path: 'useqmins5sell', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqMins5sellComponent }]
  },
  {
    path: 'useqmins5buy', component: UseqDashboardComponent,
    children: [{ path: '', component: UseqMins5buyComponent }]
  },

  {
    path: 'infopagedailybuy', component: InfopageComponent,
    children: [{ path: '', component: InfopageDailybuyComponent }]
  },


  {
    path: 'infopagedailysell', component: InfopageComponent,
    children: [{ path: '', component: InfopageDailysellComponent }]
  },



  {
    path: 'infopageweeklybuy', component: InfopageComponent,
    children: [{ path: '', component: InfopageWeeklybuyComponent }]
  },


  {
    path: 'infopageweeklysell', component: InfopageComponent,
    children: [{ path: '', component: InfopageWeeklysellComponent }]
  },



  {
    path: 'infopagemonthlybuy', component: InfopageComponent,
    children: [{ path: '', component: InfopageMonthlybuyComponent }]
  },


  {
    path: 'infopagemonthlysell', component: InfopageComponent,
    children: [{ path: '', component: InfopageMonthlysellComponent }]
  },



  {
    path: 'infopagehourlybuy', component: InfopageComponent,
    children: [{ path: '', component: InfopageHourlybuyComponent }]
  },


  {
    path: 'infopagehourlysell', component: InfopageComponent,
    children: [{ path: '', component: InfopageHourlysellComponent }]
  },



  {
    path: 'infopage30minsbuy', component: InfopageComponent,
    children: [{ path: '', component: Infopage30MinsbuyComponent }]
  },


  {
    path: 'infopage30minssell', component: InfopageComponent,
    children: [{ path: '', component: Infopage30MinssellComponent }]
  },



  {
    path: 'infopage15minsbuy', component: InfopageComponent,
    children: [{ path: '', component: Infopage15MinsbuyComponent }]
  },


  {
    path: 'infopage15minssell', component: InfopageComponent,
    children: [{ path: '', component: Infopage15MinssellComponent }]
  },

  {
    path: 'infopage5minsbuy', component: InfopageComponent,
    children: [{ path: '', component: Infopage5MinsbuyComponent }]
  },


  {
    path: 'infopage5minssell', component: InfopageComponent,
    children: [{ path: '', component: Infopage5MinssellComponent }]
  },
  {
    path: 'watchlistdailybuy', component: WatchlistComponent,
    children: [{ path: '', component: WatchlistDailybuyComponent }]
  },


  {
    path: 'watchlistdailysell', component: WatchlistComponent,
    children: [{ path: '', component: WatchlistDailysellComponent }]
  },



  {
    path: 'watchlistweeklybuy', component: WatchlistComponent,
    children: [{ path: '', component: WatchlistWeeklybuyComponent }]
  },


  {
    path: 'watchlistweeklysell', component: WatchlistComponent,
    children: [{ path: '', component: WatchlistWeeklysellComponent }]
  },



  {
    path: 'watchlistmonthlybuy', component: WatchlistComponent,
    children: [{ path: '', component: WatchlistMonthlybuyComponent }]
  },


  {
    path: 'watchlistmonthlysell', component: WatchlistComponent,
    children: [{ path: '', component: WatchlistMonthlysellComponent }]
  },



  {
    path: 'watchlisthourlybuy', component: WatchlistComponent,
    children: [{ path: '', component: WatchlistHourlybuyComponent }]
  },


  {
    path: 'watchlisthourlysell', component: WatchlistComponent,
    children: [{ path: '', component: WatchlistHourlysellComponent }]
  },



  {
    path: 'watchlist30minsbuy', component: WatchlistComponent,
    children: [{ path: '', component: Watchlist30MinsbuyComponent }]
  },


  {
    path: 'watchlist30minssell', component: WatchlistComponent,
    children: [{ path: '', component: Watchlist30MinssellComponent }]
  },



  {
    path: 'watchlist15minsbuy', component: WatchlistComponent,
    children: [{ path: '', component: Watchlist15MinsbuyComponent }]
  },


  {
    path: 'watchlist15minssell', component: WatchlistComponent,
    children: [{ path: '', component: Watchlist15MinssellComponent }]
  },

  {
    path: 'watchlist5minsbuy', component: WatchlistComponent,
    children: [{ path: '', component: Watchlist5MinsbuyComponent }]
  },


  {
    path: 'watchlist5minssell', component: WatchlistComponent,
    children: [{ path: '', component: Watchlist5MinssellComponent }]
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
    UseqDashboardComponent,

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

    UseqDailysellComponent,
    UseqDailybuyComponent,
    UseqMonthlysellComponent,
    UseqMonthlybuyComponent,
    UseqWeeklysellComponent,
    UseqWeeklybuyComponent,
    UseqHourlysellComponent,
    UseqHourlybuyComponent,
    UseqMins30sellComponent,
    UseqMins30buyComponent,
    UseqMins15sellComponent,
    UseqMins15buyComponent,
    UseqMins5sellComponent,
    UseqMins5buyComponent,
    SignalinfopageComponent,
    ResetpasswordComponent,
    FooterComponent,
    InfopageComponent,

    InfopageDailybuyComponent,
    InfopageDailysellComponent,
    InfopageWeeklybuyComponent,
    InfopageWeeklysellComponent,
    InfopageMonthlybuyComponent,
    InfopageMonthlysellComponent,
    InfopageHourlybuyComponent,
    InfopageHourlysellComponent,
    Infopage30MinsbuyComponent,
    Infopage30MinssellComponent,
    Infopage15MinsbuyComponent,
    Infopage15MinssellComponent,
    Infopage5MinsbuyComponent,
    Infopage5MinssellComponent,

    WatchlistComponent,

    WatchlistDailybuyComponent,
    WatchlistDailysellComponent,
    WatchlistWeeklybuyComponent,
    WatchlistWeeklysellComponent,
    WatchlistMonthlybuyComponent,
    WatchlistMonthlysellComponent,
    WatchlistHourlybuyComponent,
    WatchlistHourlysellComponent,
    Watchlist30MinsbuyComponent,
    Watchlist30MinssellComponent,
    Watchlist15MinsbuyComponent,
    Watchlist15MinssellComponent,
    Watchlist5MinsbuyComponent,
    Watchlist5MinssellComponent,
    NotificationComponent,
    TermsandconditionsComponent,


    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,



    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    //NgbModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CollapseModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "units": "%",
      "outerStrokeLinecap": "butt",
      lazy: false
    }),
    RouterModule.forChild(appRoutes)
  ],
  providers: [ValidateService, AuthService, AuthGuard, UserdetailsService, EncrDecrService],
  //providers: [ValidateService, AuthService, AuthGuard],

  bootstrap: [AppComponent]
})

export class AppModule {
}
