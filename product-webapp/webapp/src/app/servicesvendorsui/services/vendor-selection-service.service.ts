import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorSelectionServiceService {

  constructor(private httpClient:HttpClient) { }

  base_url:string=`${environment.API_URL}/extra-hand/e1`;
  vendorDesc:any;
  emailId:any;


  getVendorById(emailId: any){
    return this.httpClient.get(this.base_url+"/get-by-id/"+emailId);
  }
  
}
