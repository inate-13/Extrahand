import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient:HttpClient) { }
  base_url=`${environment.API_URL}/v1/feedback/post`;

  submitFeedback(feedback:any){
    console.log(feedback);
   return this.httpClient.post(this.base_url,feedback);
  }
}
