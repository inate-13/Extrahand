import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorUpdateService {

  constructor(private httpClient:HttpClient) { }

  baseUrl=`${environment.API_URL}/extra-hand/e1/`;

  updateVendorProfile(vendor:any){
    return this.httpClient.put(this.baseUrl+"user",vendor);
  }

  getVendorProfile(){
    return this.httpClient.get(this.baseUrl+"get-by-id/"+localStorage.getItem('email'));
  }

}
