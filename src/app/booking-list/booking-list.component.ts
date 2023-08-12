import { Component, OnInit } from '@angular/core';

import { Booking } from '../booking';

import { BookingService } from '../booking.service';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-booking-list',

  templateUrl: './booking-list.component.html',

  styleUrls: ['./booking-list.component.css'],

})

export class BookingListComponent implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingService: BookingService, private router: Router) {}

 

  ngOnInit(): void {

    this.getBookings();

  }

  private getBookings() {

    this.bookingService.getAllBookings().subscribe((data) => {

      this.bookings = data;

    });

  }

 

  updateBooking(id: number) {

    this.router.navigate(['update-booking', id]);

  }

 

  deleteBooking(id: number) {

    this.bookingService.deleteBookingById(id).subscribe((data) => {

      console.log(data);

      this.getBookings();

    });

  }

}