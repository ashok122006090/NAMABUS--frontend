import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { HttpClientModule } from '@angular/common/http';
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
    AddFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
 // providers: [PaymentService],

  bootstrap: [AppComponent]
})
export class AppModule { }
