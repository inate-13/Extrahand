import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicelistService {

  constructor(private httpClient:HttpClient) { }

  //fatch from registration
  //Email:string="abc@gmail.com";
  //Email:string="harsh@g.com";
//http://localhost:7005/extrahand/get-all-services/harsh@g.com
//  base_url="http://localhost:8080/extrahand/get-all-services/";

//http://localhost:7005/extrahand/get-service-provider-By-EmailId/abc@gmail.com
  base_url=`${environment.API_URL}/extrahand/get-service-provider-By-EmailId/`;

//http://localhost:7005/extrahand/Delete-service-provider-By-Id/4

base_url_delete=`${environment.API_URL}/extrahand/Delete-service-provider-By-Id/`;
  
GetAllServices(Email:any){
    return this.httpClient.get(this.base_url+Email); 
  }

  DeleteService(ServiceId:any)
  {
    return this.httpClient.delete(this.base_url_delete+ServiceId);
  }

  //http://localhost:7005/extrahand/update-service-provider/4
  

  base_url_updte=`${environment.API_URL}/extrahand/update-service-provider/`;
  UpdateService(ServiceObj:any,ServiceId:any){
    return this.httpClient.put(this.base_url_updte+ServiceId,ServiceObj);
  }

  
// *************************************Vendor-Suggestion**********************************
vendor_suggest_url=`${environment.API_URL}/suggest/v1/`;
// http://localhost:8080/suggest/v1/delete/vk5/bike
vendorEmail=localStorage.getItem('email');

updateVendorServiceDetails(vendorDetails:any){
return this.httpClient.put(this.vendor_suggest_url+"update/"+this.vendorEmail,vendorDetails);
}

deleteVendorServiceDetails(serviceName:any){
 return this.httpClient.delete(this.vendor_suggest_url+"delete/"+this.vendorEmail+"/"+serviceName);
}


}
