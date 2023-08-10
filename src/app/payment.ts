export enum PaymentStatus {

    SUCCESS = 'SUCCESS',
  
    FAILED = 'FAILED',
  
    PENDING = 'PENDING',
  
  }
  
   
  
  export class Payment {
  
    paymentid!: number;
  
    bookingid!: number;
  
   
  
    amount!: number;
  
    paymentStatus!: PaymentStatus;
  
    transactionDate!: string;
  
  }