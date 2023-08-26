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
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { ViewAllBusesComponent } from './view-all-buses/view-all-buses.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
 // { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  // user login , usercomponet dashboard,
  { path: 'about', component: AboutComponent },

  {path: 'buses', component: BusListComponent},

  {path: 'view-all-buses', component: ViewAllBusesComponent},
  {path: 'feedbacks', component: FeedbackListComponent},
  {path: 'payments', component: PaymentListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'add-bus', component: AddBusComponent},
  {path: 'add-user', component: AddUsersComponent},
 
 
  {path: 'add-payment', component: AddPaymentComponent},
  {path: 'add-feedback', component: AddFeedbackComponent},
  {path: 'add-booking', component: AddBookingComponent},
  //{path: '', redirectTo: 'buses', pathMatch: 'full'},
  {path: 'update-bus/:id', component: UpdateBusComponent},

  {path: 'view-all-buses', component: AddBookingComponent},
  {path: 'booking-list', component: BookingListComponent},
  {path: 'updatebooking', component: UpdatebookingComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path: 'add-users',component:AddUsersComponent},





  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
