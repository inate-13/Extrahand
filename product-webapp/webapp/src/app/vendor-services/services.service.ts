import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private httpClient:HttpClient) { }

//http://localhost:7005/extrahand/add-service-provider/harsh@g.com
// Email:string="harsh@g.com";

emailId=localStorage.getItem('email');
base_url=`${environment.API_URL}/extrahand/add-service-provider`;
vendor_suggestion_baseUrl=`${environment.API_URL}/suggest/v1/addNewService/`+this.emailId;



SubmitServices(Services:any)
{
  return this.httpClient.post(this.base_url,Services);
}

postNewService(service:any){
   return this.httpClient.post(this.vendor_suggestion_baseUrl,service);
}

BaseUrl_Get_User_Detail=`${environment.API_URL}/extra-hand/e1/get-by-id/`;

Get_User_Details(Email:any){
return this.httpClient.get(this.BaseUrl_Get_User_Detail+Email);
}


}
