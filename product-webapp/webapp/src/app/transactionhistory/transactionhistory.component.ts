import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'app/payment/payment.service';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {

  constructor(private paymentService:PaymentService, ) { }

  emailId=localStorage.getItem('email');
  transactionDataList:any;

  ngOnInit(): void {
    this.paymentService.getTransaction(this.emailId).subscribe((res)=>{
      this.transactionDataList=res;
    })
  }
  
  // getTransactionEmail(){
  //   this.paymentService.getTransaction(this.emailId).subscribe((res)=>{
  //     this.transactionData=res;
  //   })
  // }

}
