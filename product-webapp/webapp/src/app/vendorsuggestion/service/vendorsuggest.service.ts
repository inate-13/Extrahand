import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorsuggestService {

  constructor(private httpClient:HttpClient) { }

  userEmail=localStorage.getItem('email');
  base_url_regest=`${environment.API_URL}/extra-hand/e1/get-address/`;
  base_url=`${environment.API_URL}/suggest/v1/`;
  ServiceObj:any;
  vendorEmailIdToBook:any;
  serviceFromServiceSuggest:any;

  
  getUserAddressByEmail(){
  return  this.httpClient.get(this.base_url_regest+this.userEmail);
  }

  suggestVendorBasedOnServiceAndPincode( service:any,pincode:any){
    return  this.httpClient.get(this.base_url+service+"/"+pincode);
   }
 
   suggestVendorBasedOnService( service:any){
     return  this.httpClient.get(this.base_url+service);
   }
 
 
}
