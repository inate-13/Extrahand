import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) {
	}

  vendorObject:any;
  cost:any;
  serviceId:any;
  serviceName:any;
  
  createOrder(order:any){
		return this.http.post<any>(`${environment.API_URL}/razorpay/createPay`, order)
	}

  paymentStatus(event:any){
    return this.http.post<any>(`${environment.API_URL}/razorpay/paymentStatus/`+event.detail.razorpay_payment_id,0)
  }

  getTransaction(emailId:any){
    return this.http.get(`${environment.API_URL}/razorpay/byEmail/`, emailId)
  }
  

}
