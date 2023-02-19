import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LocationTrackingComponent } from 'app/location-tracking/location-tracking.component';
import { LocationService } from 'app/location-tracking/service/location.service';
import { AppointmentserviceService } from '../appointmentservice.service';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { ChatServiceService } from 'app/chat/services/chat-service.service';
import { NavbarVendorComponent } from 'app/navbar-vendor/navbar-vendor.component';
@Component({
  selector: 'app-appointment-nav',
  templateUrl: './appointment-nav.component.html',
  styleUrls: ['./appointment-nav.component.css']
})
export class AppointmentNavComponent implements OnInit {
  constructor(private appointmentService:AppointmentserviceService, private locationService:LocationService,
    public dialog: MatDialog, private chatService:ChatServiceService,private nav_vendor:NavbarVendorComponent)
  {
    this.GetPanddingAppointMents1()
   }
  ngOnInit(): void {
  }
  appointments:any;
  displayedColumns: string[] = ['appointmentId', 'ConsumerEmailId', 'ConsumerName', 'Time', 'phoneNo','status','delete','map','chat'];
  dataSource!:MatTableDataSource<any>;
  vendorEmail=localStorage.getItem('email');
  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  deleteAppointment(appointmentId: number){
    this.appointmentService.DeleteAppointment(appointmentId).subscribe(
      res=>{
        console.log(res);
        alert('deleted')
        this.GetPanddingAppointMents1();
      }
    )
  }
GetVendorEmail=localStorage.getItem('email');
count:any;
GetPanddingAppointMents1(){
 // this.GetVendorEmail=this.appointmentService.GetVendorEmailFromSuggetion;
  console.log(this.GetVendorEmail)
  this.appointmentService.Get_PendingAppoint(this.GetVendorEmail).subscribe(
    res=>{
      console.log(res +"**************");
      this.appointments=res;
      console.log(this.appointments)
      console.log(this.appointments.length);
      this.dataSource=new MatTableDataSource(this.appointments);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.matSort;
     this.count=this.appointments.length;
     this.appointmentService.Count=this.count;
  this.nav_vendor.GetPanddingAppointMents();
    }
  )
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
      this.GetPanddingAppointMents1();
    }
  )
}
  //Location implements
  locationTrackOfVendor(userEmail:any){
    this.locationService.disableAllFlags();
    this.locationService.enableAddressTackingFlag();
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
}