import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';


const routes: Routes = [
  {path: 'buses', component: BusListComponent},
  {path: 'add-bus', component: AddBusComponent},
  {path: '', redirectTo: 'buses', pathMatch: 'full'},
  {path: 'update-bus/:id', component: UpdateBusComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
