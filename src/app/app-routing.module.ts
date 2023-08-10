import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
 // { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {path: 'buses', component: BusListComponent},
  {path: 'feedbacks', component: FeedbackListComponent},
  {path: 'payments', component: PaymentListComponent},
  {path: 'add-bus', component: AddBusComponent},
 
  {path: 'add-payment', component: AddPaymentComponent},
  {path: 'add-feedback', component: AddFeedbackComponent},
  //{path: '', redirectTo: 'buses', pathMatch: 'full'},
  {path: 'update-bus/:id', component: UpdateBusComponent},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
