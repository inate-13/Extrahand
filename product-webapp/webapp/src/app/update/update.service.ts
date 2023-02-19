import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private Http: HttpClient) { }
    base_url=`${environment.API_URL}/extra-hand/e1/`;

    update(updateData:any){
      return this.Http.put<any>(this.base_url+"user",updateData);
    }

    get(){
      return this.Http.get<any>(this.base_url+"get-by-id/"+localStorage.getItem('email'));
    }
}
