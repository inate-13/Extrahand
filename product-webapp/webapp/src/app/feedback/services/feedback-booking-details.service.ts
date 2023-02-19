import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackBookingDetailsService {
  regester_service_url=`${environment.API_URL}/extra-hand/e1/get-name/`;


  constructor(private httpClient:HttpClient) { }
  bookingId:any;
  userEmailId=localStorage.getItem('email');
  userName:any;

  getName(){
    return this.httpClient.get(this.regester_service_url+this.userEmailId);
  }
  setValues(bookingId:any,userEmail:any,userName:any){
    
    this.bookingId=bookingId;
    this.userEmailId=userEmail;
    this.userName=userName;
    console.log(this.userName);
  }
}
