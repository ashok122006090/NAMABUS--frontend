import { Component, OnInit } from '@angular/core';

import { Payment, PaymentStatus } from '../payment';

import { PaymentService } from '../payment.service';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-payment-list',

  templateUrl: './payment-list.component.html',

  styleUrls: ['./payment-list.component.css'],

})

export class PaymentListComponent implements OnInit {

  payments: Payment[] = [];

  constructor(private paymentService: PaymentService, private router: Router) {}

 

  ngOnInit(): void {

    this.getPayments();

  }

  private getPayments() {

    this.paymentService.getAllPayments().subscribe((data) => {

      this.payments = data;

    });

  }

}