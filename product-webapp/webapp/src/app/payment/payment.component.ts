import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentserviceService } from 'app/appointment/appointmentservice.service';
import { AppointmentService } from 'app/appointment/service/appointment.service';
import { ChatServiceService } from 'app/chat/services/chat-service.service';
import { PaymentService } from './payment.service';

declare var Razorpay:any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  host: {'(window:payment.success)':'onPaymentSuccess($event)'}
})
   
export class PaymentComponent implements OnInit {

  constructor(private http: HttpClient,
    private paymentService:PaymentService,private appointmentService:AppointmentserviceService, 
    private router:Router, private chatService:ChatServiceService) {

  }

  ngOnInit() {
   this.cost;
   this.vendorObject;
  }
  vendorObject=this.paymentService.vendorObject;
  cost=this.paymentService.cost;
  serviceBasePrice = this.cost*1;
  ServiceCost=this.cost*0.3;
  labourCost=this.cost*0.1;
  materialsPrice=this.cost*0.3;
  sGst=this.cost*0.09;
  cGst=this.cost*0.09;
  discount=this.cost*0.2;
  totalAmount=this.serviceBasePrice+this.labourCost+this.sGst+this.cGst-this.discount;

  

  form: any = {};

  paymentId: any;
  error: any;
  
  options:any = {
    "key": "rzp_test_uzJz1DmiglWe9W",
    "amount": "", 
    "name": "",
    "description": "",
    "image": "https://mobisoftinfotech.com/resources/wp-content/uploads/2018/08/Banner.png",
    "order_id":"",
    "handler": function (response: any){
      var event = new CustomEvent("payment.success", 
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );	  
      window.dispatchEvent(event);
    }
    ,
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
  };
  
  onSubmit():any {

    console.log("inside onSubmit method")

    this.paymentId = ''; 
    this.error = ''; 
    var payment={
      "paymentId": 0,
      "serviceId": this.paymentService.vendorObject.serviceId,
      "razorpayOrderId": "",
      "emailId": localStorage.getItem('email'),
      "amount": this.totalAmount,
      "dateTime": "",
      "status": "PENDING"
    };
    this.paymentService.createOrder(payment).subscribe(
      ( data: { secretId: string; razorpayOrderId: string; amount: string; pgName: string; }) => {
      this.options.key = data.secretId;
      this.options.order_id = data.razorpayOrderId;
      this.options.amount = data.amount; //paise
      this.options.prefill.name = localStorage.getItem('name');
      this.options.prefill.email = localStorage.getItem('email');
      this.options.prefill.contact = this.paymentService.vendorObject.mobileNo;
      console.log(this.options)
      var rzp = new Razorpay(this.options);
      rzp.open();   
      rzp.on('payment.failed',  (response: 
        { error: 
          { code: any; 
            description: any; 
            source: any; 
            step: any; 
            reason: any; 
            metadata: { 
              order_id: any; 
              payment_id: any; 
            }; 
          }; 
      }) =>{    
        // Todo - store this information in the server
        console.log(response);
        console.log(response.error.code);    
        console.log(response.error.description);    
        console.log(response.error.source);    
        console.log(response.error.step);    
        console.log(response.error.reason);    
        console.log(response.error.metadata.order_id);    
        console.log(response.error.metadata.payment_id);
        this.error = response.error.reason;
      }
      );
    },
      (err: { error: { message: any; }; }) => {
      this.error = err.error.message;
    }
    );
  }

  @HostListener('window:payment.success', ['$event']) 
  onPaymentSuccess(event: { 
    detail: {
    razorpay_order_id:any;
    razorpay_payment_id?:any;
    } 
  }): void {
    this.paymentService.paymentStatus(event.detail).subscribe(
      (data) => {
        console.log(event.detail);
        // this.paymentId =event.detail.razorpay_payment_id;
      },(err) =>{
        this.error =err.error.message();
      }
    )

  }

  AppointmentForm = new FormGroup({
    "vendorName":new FormControl(''),
    "vendorEmailId":new FormControl(''),
    "userEmailId":new FormControl(''),
    "userName":new FormControl(''),
    "serviceId":new FormControl(''),
    "status":new FormControl(''),
    "appointmentTime":new FormControl(''),
    "serviceTitle":new FormControl(''),
    "vendorphoneNo":new FormControl('')
  })

  emaildata={
    "vendorName":this.vendorObject.vendorName,
    "vendorEmailId":this.vendorObject.vendorEmailId,
    "userEmailId":localStorage.getItem('email'),
    "serviceId":this.paymentService.serviceId,
    "status":"SUCCESS",
    "appointmentTime":new Date(),
    "serviceTitle":this.paymentService.serviceName,
    "VendorphoneNo":this.vendorObject.mobileNo
  }
  appointmentBooking(){
  
    this.AppointmentForm.controls.vendorName.setValue(this.vendorObject.vendorName);
    this.AppointmentForm.controls.vendorEmailId.setValue(this.vendorObject.vendorEmailId);
    this.AppointmentForm.controls.userEmailId.setValue(localStorage.getItem('email'));
    this.AppointmentForm.controls.userName.setValue(localStorage.getItem('name'));
    this.AppointmentForm.controls.serviceId.setValue(this.paymentService.serviceId);
    this.AppointmentForm.controls.status.setValue('pending');
    this.AppointmentForm.controls.appointmentTime.setValue('');
    this.AppointmentForm.controls.serviceTitle.setValue(this.paymentService.serviceName);
    this.AppointmentForm.controls.vendorphoneNo.setValue(this.vendorObject.phoneNo);

    this.appointmentService.AddApoointment(this.AppointmentForm.value).subscribe(
      response=>{
         console.log(response);
      })  
         //to send email
         this.appointmentService.sendMail(this.emaildata).subscribe(
          resp=>{
            console.log(resp);
          })
          this.createChat()
          let check=setTimeout(()=>{
            this.router.navigate(['/appointments']);
          },15000)
    
    } 

    //CHAT
    createChat(){
      let userName:any=localStorage.getItem('name');
      let userEmail:any=localStorage.getItem('email');
      this.chatService.createNewChat(this.vendorObject.vendorEmailId,this.vendorObject.vendorName,userEmail,userName).subscribe(
        respo=>{
          console.log(respo);
        }
      )  
    }

}
