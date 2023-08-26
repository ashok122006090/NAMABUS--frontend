import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Booking } from './booking';

@Injectable({

  providedIn: 'root',

})

export class BookingService {

  private baseUrl = 'http://localhost:8070/busbookings/bookings';





  
 

  constructor(private httpClient: HttpClient) {}

 

  getAllBookings(): Observable<Booking[]> {

    return this.httpClient.get<Booking[]>(`${this.baseUrl}`);

  }

 

  getBookingById(id: number): Observable<Booking> {

    return this.httpClient.get<Booking>(`${this.baseUrl}/${id}`);

  }

 

  addBooking(booking: Booking): Observable<any> {

    return this.httpClient.post(`${this.baseUrl}`, booking);

  }

 

  UpdateBookingStatus(id: number, booking: Booking): Observable<Booking> {

    return this.httpClient.put<Booking>(`${this.baseUrl}/${id}`, booking);

  }

 

  deleteBookingById(id: number): Observable<void> {

    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);

  }

}