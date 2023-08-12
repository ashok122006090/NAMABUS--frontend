import { Component, OnInit } from '@angular/core';

import { Booking } from '../booking';

import { Router } from '@angular/router';

import { BookingService } from '../booking.service';

 

@Component({

  selector: 'app-add-booking',

  templateUrl: './add-booking.component.html',

  styleUrls: ['./add-booking.component.css'],

})

export class AddBookingComponent implements OnInit {

  booking: Booking = new Booking();

  BookingStatusOptions: string[] = ['SUCCESS', 'CANCELED', 'PENDING'];

  constructor(private bookingService: BookingService, private router: Router) {}

 

  ngOnInit(): void {}

 

  saveBooking() {

    this.bookingService.addBooking(this.booking).subscribe(

      (data) => {

        console.log(data);

        this.goToBookingList();

      },

      (error) => console.log(error)

    );

  }

 

  goToBookingList() {

    this.router.navigate(['/bookings']);

  }

 

  onSubmit() {

    console.log(this.booking);

    this.saveBooking();

  }

}