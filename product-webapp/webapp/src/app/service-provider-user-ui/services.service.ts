import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpclient:HttpClient) { }

  UserData:any;
  ServiceNameForServiceProvider:any;
  

  BaseUrl_Get_All_Service_Pin_Name=`${environment.API_URL}/extrahand/get-by-pincode-userview/`;

  GetAll(PinCode:any,ServiceName:any){
   return  this.httpclient.get(this.BaseUrl_Get_All_Service_Pin_Name+PinCode+"/"+ServiceName)
  }


  BaseUrl_Get_User_Detail=`${environment.API_URL}/extra-hand/e1/get-by-id/`;

  Get_User_Details(Email:any){
   return this.httpclient.get(this.BaseUrl_Get_User_Detail+Email);
  }

  base_url_get_by_serviceName=`${environment.API_URL}/extrahand/get-by-service/`; 

  getAllVendorsBasedOnServiceName(serviceName:any){
    return this.httpclient.get(this.base_url_get_by_serviceName+serviceName);
  }

  
 urlToGetAllVendors=`${environment.API_URL}/extrahand/all-provided-services`
  getAllVendors(){
    return this.httpclient.get(this.urlToGetAllVendors)
  }

}
