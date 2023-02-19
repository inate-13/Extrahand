import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../model/api.response';
import { Appointment } from '../model/appointment.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = `${environment.API_URL}/api/appointments`;
  private email_base_url=`${environment.API_URL}/extra-hand/email/sendMail`

  getAppointments() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getAppointmentById(appointmentId: number): Observable<any> {
    return this.http.get(this.baseUrl + appointmentId);
  }

  createAppointment(appointment:any): Observable<any> {
    return this.http.post<ApiResponse>(this.baseUrl, appointment);
  }

  updateAppointment(_appointmentId: number, appointment: Appointment): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + appointment.appointmentId, appointment);
  }

  deleteAppointment(appointmentId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + appointmentId);
  }

  sendMail(mailData:any){
    return this.http.post(this.email_base_url,mailData);
  }

  
}
