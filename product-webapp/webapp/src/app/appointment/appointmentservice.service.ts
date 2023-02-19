import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Appointment } from './model/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {

  constructor(private httpClient:HttpClient) { }

GetServiceIdFromSuggetion:any;
GetVendorEmailFromSuggetion:any;
GetServiceNameFromSuggetion:any;
Count:any;

  Base_Url_add_appointment=`${environment.API_URL}/appointment/Add-Appointment`;
  private emailBaseUrl=`${environment.API_URL}/extra-hand/email/`;

  AddApoointment(appointMent:any){
   return this.httpClient.post(this.Base_Url_add_appointment,appointMent);
  }

  Base_Url_Get_Appointments_By_Email=`${environment.API_URL}/appointment/Get-Appointment-By-EmailId/`;
  GetAppointmentByEmail(Email:any){
    return this.httpClient.get(this.Base_Url_Get_Appointments_By_Email+Email);
  }

  Base_Url_Get_Appointments_By_ServiceId=`${environment.API_URL}/appointment/Get-Apointment-By-ServiceId/`;

GetappointmentByEmailAndServiceTitle(VendorEmail:any,ServiceTitle:any){
  return this.httpClient.get(this.Base_Url_Get_Appointments_By_ServiceId+VendorEmail+"/"+ServiceTitle);
}
Base_Delete=`${environment.API_URL}/appointment/Delete-Appointment/`;
DeleteAppointment(appointmentId:any){
  return this.httpClient.delete(this.Base_Delete+appointmentId);
}

sendEmail(appointment:any){
  return this.httpClient.post(this.emailBaseUrl+"sendMail",appointment);
}

Base_Update_Url=`${environment.API_URL}/appointment/update/`;
UpdateAppointment(appointment:any,Id:any){
  return this.httpClient.put(this.Base_Update_Url+Id,appointment);
}

Base_Pending=`${environment.API_URL}/appointment/Find-Pandding/`;
Get_PendingAppoint(Id:any){
  return this.httpClient.get(this.Base_Pending+Id);
}

private email_base_url=`${environment.API_URL}/extra-hand/email/sendMail`
sendMail(mailData:any){
  return this.httpClient.post(this.email_base_url,mailData);
}
}
