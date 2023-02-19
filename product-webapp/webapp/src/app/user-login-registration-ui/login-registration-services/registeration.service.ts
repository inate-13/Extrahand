import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  constructor(private httpClient:HttpClient) {}

  base_url:String=`${environment.API_URL}/extra-hand/e1`;

  register(user:any){
    return this.httpClient.post(this.base_url+"/register",user);
  }

  
}
