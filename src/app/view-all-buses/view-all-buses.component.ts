import { Component,OnInit } from '@angular/core';
import { Bus, BusType } from '../bus';
import { BusService } from '../bus.service';
import {Router} from '@angular/router';
import { Booking } from '../booking';

@Component({
  selector: 'app-view-all-buses',
  templateUrl: './view-all-buses.component.html',
  styleUrls: ['./view-all-buses.component.css']
})






export class ViewAllBusesComponent implements OnInit{

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
