import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Payment, PaymentStatus } from './payment';

 

@Injectable({

  providedIn: 'root',

})

export class PaymentService {

  private apiUrl = 'http://localhost:8070/api/Payment';

 

  constructor(private httpClient: HttpClient) {}

 

  getAllPayments(): Observable<Payment[]> {

    return this.httpClient.get<Payment[]>(`${this.apiUrl}`);

  }

 

  getPaymentById(id: number): Observable<Payment> {

    return this.httpClient.get<Payment>(`${this.apiUrl}/${id}`);

  }

 

  createPayment(payment: Payment): Observable<Payment> {

    return this.httpClient.post<Payment>(`${this.apiUrl}`, payment);

  }

}