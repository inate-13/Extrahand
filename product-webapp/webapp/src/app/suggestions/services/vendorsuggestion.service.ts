import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorsuggestionService {
  
  ServiceObj:any;
  vendorEmailIdToBook:any;
  serviceFromServiceSuggest:any;

  constructor(private httpClient:HttpClient) { }


  base_url=`${environment.API_URL}/suggest/v1/`;
  sPSUrl=`${environment.API_URL}/extrahand/get-by-service/`;

  suggestVendorBasedOnServiceAndPincode( service:any,pincode:any){
   return  this.httpClient.get(this.base_url+service+"/"+pincode);
  }

  suggestVendorBasedOnService(){
    return  this.httpClient.get(this.base_url+"serviceName/"+this.serviceFromServiceSuggest);
  }

  getAllVendorsBasedOnPincode(pinCode:any){
    return this.httpClient.get(this.base_url+"pin/"+pinCode);
  }


  //////////////////

  ServiCeID:any;
  Get_Vendor_ServiceProvierService=`${environment.API_URL}/extrahand/get-service-provider/`;
  GetServiceProvider_Se(ServiceId:any){
    return this.httpClient.get(this.Get_Vendor_ServiceProvierService+ServiceId)
  }

  
}
