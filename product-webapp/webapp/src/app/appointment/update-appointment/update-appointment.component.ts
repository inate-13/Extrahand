import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../model/api.response';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  appointmentId!: number;
  appointment!: Appointment;
  apiResponse!: ApiResponse;

  constructor(private router:Router, private appointmentService:AppointmentService, 
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.appointment=new Appointment();
    this.appointmentId=this.route.snapshot.params['appointmentId'];
    this.appointmentService.getAppointmentById(this.appointmentId).subscribe(
      data=>{console.log(data)
      this.appointment=data;
      },
      error=>console.log(error));
  }
  
  onSubmit(){
    this.appointmentService.updateAppointment(this.appointmentId,this.appointment).subscribe(
    data=>console.log(data),error=>console.error());
    this.appointment=new Appointment();
    this.router.navigate(['/appointments']);
    
  }

}

 
