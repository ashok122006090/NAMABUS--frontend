import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import {Router} from '@angular/router';
import { Booking } from '../booking';
import { Bus } from '../bus';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit{

  buses:Bus[] = [];
  constructor(private busService: BusService,
    private router: Router){}
  
    ngOnInit(): void {
      this.getBuses();
    }
  private getBuses() {
    this.busService.getAllBuses().subscribe(data=>{
      this.buses = data;
    });
  }

  addBooking(booking:Booking){
    this.router.navigate(['add-booking', booking]);
  }

  

}
