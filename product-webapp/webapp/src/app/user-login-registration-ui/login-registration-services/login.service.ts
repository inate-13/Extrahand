import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) {}

  isLoggedIn!:boolean;
  base_url:String=`${environment.API_URL}/extra-hand/e2`;
  regUrl:String=`${environment.API_URL}/extra-hand/e1`;
  role:any;

  
  login(user:any){
    return this.httpClient.post(this.base_url+"/authenticate",user);
  }
  
  getData(email:any){
    return this.httpClient.get(this.regUrl+'/get-user/'+email);
  }
}