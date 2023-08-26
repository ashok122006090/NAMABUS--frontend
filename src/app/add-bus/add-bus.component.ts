import { Component, OnInit } from '@angular/core';
import { Bus,BusType } from '../bus';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  bus: Bus = new Bus();
  busTypeOptions: string[] = [
    'LUXURY',
    'DELUXE',
    'EXPRESS',
    'ORDINARY',
    'SUPERLUXURY'
  ];
  constructor(private busService: BusService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBus(){
    this.busService.createBus(this.bus).subscribe( data =>{
      console.log(data);
      this.goToBusList();
    },
    error => console.log(error));
  }

  goToBusList(){
    this.router.navigate(['/buses']);
  }
  
  onSubmit(){
    console.log(this.bus);
    this.saveBus();
  }
}
