import { Component, OnInit, ViewChild } from '@angular/core';


import { MatDialog } from '@angular/material/dialog';

import { FormControl, FormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LocationTrackingComponent } from 'app/location-tracking/location-tracking.component';
import { LocationService } from 'app/location-tracking/service/location.service';
import { AppointmentserviceService } from '../appointmentservice.service';
import { Appointment } from '../model/appointment.model';

@Component({
  selector: 'app-appointment-list-vendor',
  templateUrl: './appointment-list-vendor.component.html',
  styleUrls: ['./appointment-list-vendor.component.css']
})
export class AppointmentListVendorComponent implements OnInit {



  
  constructor(private appointmentService:AppointmentserviceService,private locationService:LocationService,public dialog: MatDialog) { 
  this.GetAppointmentByServiceId();
  }

  ngOnInit(): void {
  }

  appointments:any;
  displayedColumns: string[] = ['appointmentId', 'ConsumerEmailId', 'ConsumerName', 'Time','status','delete'];
  dataSource!:MatTableDataSource<any>;
  vendorEmail=localStorage.getItem('email');


  @ViewChild('paginator') paginator! : MatPaginator;  
  @ViewChild(MatSort) matSort! : MatSort;

  deleteAppointment(appointmentId: number){
    this.appointmentService.DeleteAppointment(appointmentId).subscribe(
      res=>{
        console.log(res);
        window.location.reload;
        this.GetAppointmentByServiceId();
        
      }
    )
  }
  updateAppointment(appointmentId: number){}

//  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  GetsrviceId=this.appointmentService.GetServiceIdFromSuggetion;
  GetVendorEmail=this.appointmentService.GetVendorEmailFromSuggetion;
  GetServiceName=this.appointmentService.GetServiceNameFromSuggetion;

  GetAppointmentByServiceId(){
  this.appointmentService.GetappointmentByEmailAndServiceTitle(this.GetVendorEmail,this.GetServiceName).subscribe(
    response=>{

      this.appointments=response;
      this.dataSource=new MatTableDataSource(this.appointments);
     // this.dataSource=this.appointments;
     console.log(this.appointments)
     console.log(this.dataSource);
     this.dataSource.paginator=this.paginator;
     this.dataSource.sort=this.matSort;

    }
  )
}



  //Location implements
  locationTrackOfVendor(userEmail:any){
    this.locationService.disableAllFlags();
    this.locationService.enableVendorTrackingFlag();
    this.locationService.userEmail=userEmail;
    this.locationService.createLocation(userEmail,this.vendorEmail).subscribe(
      res=>{
        console.log(res);
        const dialogRef = this.dialog.open(LocationTrackingComponent);
        dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
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

statusofapp: any[] = [
  { Id:1, value: 'pandding', viewValue: 'Pandding'},
  { Id:2, value: 'done', viewValue: 'Done'}
];


selected:any;
selectedCar = this.statusofapp[0]. value;
isDisabled:any;


ServiceId:any;  ServiceTitle:any;
vendorName:any;  vendorPhone:any;
status:any;  VenorEmail:any;
userPhn:any; UserName:any;
Userarea:any; appointmentId:any;
userEmailId:any; appointmentTime:any;


AppointmentForm = new FormGroup({
  "appointmentId":new FormControl(''),
  "vendorName":new FormControl(''),
  "vendorEmailId":new FormControl(''),
  "userEmailId":new FormControl(''),
  "serviceId":new FormControl(''),
  "status":new FormControl(''),
  "appointmentTime":new FormControl(''),
  "serviceTitle":new FormControl(''),
  "vendorphoneNo":new FormControl(''),
  "UserPhoneNo":new FormControl(''),
  "userName":new FormControl(''),
  "area":new FormControl('')
})


selectCar(event: any,elements:any) {
  this.isDisabled=false;
  console.log(event.target.value)
  console.log(elements)

  this.selectedCar = (event.target as HTMLSelectElement). value;
  console.log(this.selectedCar)

  this.status=event.target.value;
  this.appointmentId=elements.appointmentId;
  this.userEmailId=elements.userEmailId;
this.appointmentTime=elements.appointmentTime;
this.ServiceTitle=elements.serviceTitle;
this.ServiceId=elements.serviceId;
this.vendorName=elements.vendorName;
this.UserName=elements.userName;
this.VenorEmail=elements.vendorEmailId;
this.Userarea=elements.area;
this.userPhn=elements.userPhoneNo;
this.vendorPhone=elements.vendorphoneNo;


  
  
  this.AppointmentForm.patchValue({
    status:this.status,
    appointmentId:this.appointmentId,
    userEmailId:this.userEmailId,
    appointmentTime:this.appointmentTime,
    serviceTitle:this.ServiceTitle,
    serviceId:this.ServiceId,
    vendorName:this.vendorName,
    userName:this.UserName,
    vendorEmailId:this.VenorEmail,
    area:this.Userarea,
    UserPhoneNo:this.userPhn,
    vendorphoneNo:this.vendorPhone
  })

  this.appointmentService.UpdateAppointment(this.AppointmentForm.value,this.appointmentId).subscribe(
    res=>{
      console.log(res);
      window.location.reload;
      this.GetAppointmentByServiceId();
    }
  )
}


  }


  

