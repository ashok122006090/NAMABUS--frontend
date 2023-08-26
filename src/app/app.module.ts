import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { PaymentService } from './payment.service';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { DeleteFeedbackComponent } from './delete-feedback/delete-feedback.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { DeletebookingComponent } from './deletebooking/deletebooking.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { ViewAllBusesComponent } from './view-all-buses/view-all-buses.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import { UserListComponent } from './user-list/user-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//import { AuthInterceptor } from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AddBusComponent,
    UpdateBusComponent,
    DeleteBusComponent,
    BusListComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    AddPaymentComponent,
    PaymentListComponent,
    FeedbackListComponent,
    DeleteFeedbackComponent,
    AddFeedbackComponent,
    AddBookingComponent,
    BookingListComponent,
    DeletebookingComponent,
    UpdatebookingComponent,
    ViewAllBusesComponent,
    UserListComponent,
    AddUsersComponent,
    DashboardComponent,


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
 // providers: [PaymentService],

  bootstrap: [AppComponent]
})
export class AppModule { }
