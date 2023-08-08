import { Component, OnInit } from '@angular/core';
import { Bus, BusType } from '../bus';
import { BusService } from '../bus.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit{

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

  updateBus(id:number){
    this.router.navigate(['update-bus', id]);
  }

  deleteBus(id:number){
    this.busService.deleteBus(id).subscribe(data=>{
      console.log(data);
      this.getBuses();
    })
  }

}
