import { Component, OnInit } from '@angular/core';

import { Booking, BookingStatus } from '../booking';

import { BookingService } from '../booking.service';

import { ActivatedRoute, Router } from '@angular/router';

 

@Component({

  selector: 'app-updatebooking',

  templateUrl: './updatebooking.component.html',

  styleUrls: ['./updatebooking.component.css'],

})

export class UpdatebookingComponent implements OnInit {

  id!: number;

  booking: Booking = new Booking();

  BookingStatusOptions: string[] = ['SUCCESS', 'CANCELED', 'PENDING'];

 

  constructor(

    private bookingService: BookingService,

    private route: ActivatedRoute,

    private router: Router

  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.bookingService.getBookingById(this.id).subscribe(

      (data) => {

        this.booking = data;

      },

      (error) => console.log(error)

    );

  }

 

  onSubmit() {

    this.bookingService.UpdateBookingStatus(this.id, this.booking).subscribe(

      (data) => {

        this.goToBookingList();

      },

      (error) => console.log(error)

    );

  }

  goToBookingList() {

    this.router.navigate(['/booking-list']);

  }

}

 