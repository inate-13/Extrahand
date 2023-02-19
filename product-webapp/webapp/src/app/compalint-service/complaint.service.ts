import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private HttpClient:HttpClient) { }


  base_url:string=`${environment.API_URL}/exrahand/complaint/e1/add-compalint`

  addcom(obj:any){
    return this.HttpClient.post(this.base_url,obj);
  }

}
