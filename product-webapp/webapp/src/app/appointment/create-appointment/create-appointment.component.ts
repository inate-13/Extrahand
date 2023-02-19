import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointment:Appointment=new Appointment();

  submitted=false;

  constructor(private appointmentService:AppointmentService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    this.appointmentService.createAppointment(this.appointment).subscribe(
      data=>console.log(data),error=>console.log(error));
      this.appointment=new Appointment();
    }

}

