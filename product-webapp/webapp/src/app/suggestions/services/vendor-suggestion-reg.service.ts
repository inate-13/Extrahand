import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorSuggestionRegService {

  constructor(private httpClient:HttpClient) { }

  userEmail=localStorage.getItem('email');
  base_url=`${environment.API_URL}/extra-hand/e1/get-address/`;
  
  getUserAddressByEmail(){
  return  this.httpClient.get(this.base_url+this.userEmail);
  }
}
