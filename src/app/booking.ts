import { Time } from '@angular/common';

 

export enum BookingStatus {

  SUCCESS,

  CANCELED,

  PENDING,

}

 

export class Booking {

  bookingId!: number;

  boardingPoint!: string;

  droppingPoint!: string;

  journeyDate!: Date;

  startTime!: Time;

  seatNum!: number;

  amount!: number;

  ticketNum!: number;

  BookingStatus!: BookingStatus;

}