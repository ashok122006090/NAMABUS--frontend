import { Component, OnInit } from '@angular/core';

import { Payment, PaymentStatus } from '../payment';

import { PaymentService } from '../payment.service';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-add-payment',

  templateUrl: './add-payment.component.html',

  styleUrls: ['./add-payment.component.css'],

})

export class AddPaymentComponent implements OnInit {

  payment: Payment = new Payment();

  paymentStatusOptions: string[] = ['SUCCESS', 'FAILED', 'PENDING'];

  constructor(private paymentService: PaymentService, private router: Router) {}

 

  ngOnInit(): void {}

 

  savePayment() {

    this.paymentService.createPayment(this.payment).subscribe(

      (data) => {

        console.log(data);

        this.goToPaymentList();

      },

      (error) => console.log(error)

    );

  }

 

  goToPaymentList() {

    this.router.navigate(['/payments']);

  }

 

  onSubmit() {

    console.log(this.payment);

    this.savePayment();

  }

}