import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FeedbackBookingDetailsService } from 'app/feedback/services/feedback-booking-details.service';
import { LocationTrackingComponent } from 'app/location-tracking/location-tracking.component';
import { LocationService } from 'app/location-tracking/service/location.service';
import { Observable } from 'rxjs';
import { AppointmentserviceService } from '../appointmentservice.service';
import { ApiResponse } from '../model/api.response';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {


  constructor(private appointmentService:AppointmentserviceService ,
    private router: Router,private feedBackService:FeedbackBookingDetailsService,
    private locationService:LocationService,public dialog: MatDialog) {
    this.GetAppointmentByEmail();
  }
  ngOnInit() {

  }

  displayedColumns: string[] = ['appointmentId', 'name', 'Title', 'Time', 'phoneNo','delete','map','chat','feedback'];
  dataSource!:MatTableDataSource<any>;


  @ViewChild('paginator') paginator! : MatPaginator;  
  @ViewChild(MatSort) matSort! : MatSort;



  deleteAppointment(appointmentId: number){
    this.appointmentService.DeleteAppointment(appointmentId).subscribe(
      res=>{
        console.log(res);
        this.GetAppointmentByEmail();
      }
      )
  }
  updateAppointment(appointmentId: number){}
  appointments:any;
  Email=localStorage.getItem('email')
  vendorEmail:any;

//Email=localStorage.getItem('email');
GetAppointmentByEmail(){
  this.appointmentService.GetAppointmentByEmail(this.Email).subscribe(
    response=>{
      console.log(response);
      this.appointments=response;
      this.dataSource=new MatTableDataSource(this.appointments);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.matSort;
    }
  )
}  
  userEmailId=localStorage.getItem('email');
  userName:any;
  //submit Feedback
  submitFeedback(appointmentId:any){

    this.feedBackService.getName().subscribe(
      res=>{
       let resp:any=res;
        this.userName=resp.firstName;
        console.log(res);
        this.feedBackService.setValues(appointmentId,this.userEmailId,this.userName);
        this.router.navigate(['/feedback']);
      }) 
  }
  
  GetsrviceId=this.appointmentService.GetServiceIdFromSuggetion;

  //Location implements
  locationTrackOfVendor(vendorEmail:any){
    this.locationService.disableAllFlags();
    this.locationService.enableVendorTrackingFlag();
    this.locationService.vendorEmail=vendorEmail;
    this.locationService.createLocation(this.userEmailId,vendorEmail).subscribe(
      res=>{
        console.log(res);
        const dialogRef = this.dialog.open(LocationTrackingComponent);
        dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`)
    });
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(LocationTrackingComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}