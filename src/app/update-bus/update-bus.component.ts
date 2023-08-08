import { Component, OnInit } from '@angular/core';

import { BusService } from '../bus.service';

import { Bus , BusType} from '../bus';

import { ActivatedRoute, Router } from '@angular/router';

 

@Component({

  selector: 'app-update-bus',

  templateUrl: './update-bus.component.html',

  styleUrls: ['./update-bus.component.css']

})

export class UpdateBusComponent implements OnInit {

  id!: number;

  bus: Bus = new Bus();

  busTypeOptions: string[] = Object.values(BusType);

 

  constructor(private busService: BusService,

    private route: ActivatedRoute,

    private router: Router) { }

 

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

 

    this.busService.getBusById(this.id).subscribe(data => {

      this.bus = data;

    }, error => console.log(error));

  }
  

 

  onSubmit(){

    this.busService.updateBus(this.id, this.bus).subscribe( data =>{

      this.goToBusList();
      

    }

    , error => console.log(error));

  }

 

  goToBusList(){

    this.router.navigate(['/buses']);

  }

}