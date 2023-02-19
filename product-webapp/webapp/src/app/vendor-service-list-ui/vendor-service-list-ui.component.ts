import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { LocationService } from 'app/location-tracking/service/location.service';
import { Router } from '@angular/router';
import { AppointmentserviceService } from 'app/appointment/appointmentservice.service';
import { ServicelistService } from './servicelist.service';

@Component({
  selector: 'app-vendor-service-list-ui',
  templateUrl: './vendor-service-list-ui.component.html',
  styleUrls: ['./vendor-service-list-ui.component.css']
})
export class VendorServiceListUiComponent implements OnInit {
  private config:MatSnackBarConfig;
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  
  constructor(private ServiceList:ServicelistService,private _snackBar: MatSnackBar,
    private AppointmentService:AppointmentserviceService,private router:Router,
    private locationService:LocationService) { 
    this.config=new MatSnackBarConfig();
    this.config.duration=1000;
this.findall();

this.locationService.disableAllFlags();
  }
  openSnackBar() {
    this._snackBar.open('Delete Succesfully', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,

    });
  }
  public open(message:string, duration?: number,action?:string){
    this.config=duration?Object.assign(this.config,{'duration':duration}):this.config;
    this._snackBar.open(message,action,this.config);
  }
  openSnackBars() {
    this._snackBar.open('you data is updated', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,

    });
  }
  ngOnInit(): void {
  }

  service:any;
  object:any;
  //fetch from register
 // EmailId:any="abc@gmail.com";
  EmailId:any=localStorage.getItem('email');
findall(){
  console.log("response");
  console.log(this.EmailId);
  

  this.ServiceList.GetAllServices(this.EmailId).subscribe(
    response=>{
      console.log(response);
      this.object=response;
      console.log(this.object);
      this.service=this.object.serviceLists;
      console.log(this.service);
    }
  )
}

serviceName:any;
vendorEmailId:any;

GetserviceId(service:any){
  console.log(service)
  this.serviceName=service.serviceName;
this.vendorEmailId=service.vendorEmailId;

this.AppointmentService.GetServiceNameFromSuggetion=this.serviceName;
this.AppointmentService.GetVendorEmailFromSuggetion=this.vendorEmailId;
 // this.AppointmentService.GetServiceIdFromSuggetion=serviceId;
//  console.log(this.AppointmentService.GetServiceIdFromSuggetion);
 
  this.AppointmentService.GetappointmentByEmailAndServiceTitle(this.vendorEmailId,this.serviceName).subscribe(
    res=>{
      console.log(res)
      this.router.navigate(['/appointments-vendor']);
    }
  )
}

deleteService(ServiceId:any,serviceName:any)
{
  this.ServiceList.DeleteService(ServiceId).subscribe(
    response=>{
      this.deleteServiceForm(serviceName);
      console.log("Done");
      this.openSnackBar();
      this.findall();
    }
  )
}


//fetch data
VendorEmail=localStorage.getItem('email');
vendorName=localStorage.getItem('name');
phoneNo:any=1234567890;
experience:any=6;
otherServices:any="a";

UpdateObject:any;
ServiceId:any
formobj:any;
Duration:any;
UpdateSaveService(){
  this.formobj=this.UpdateServiceForm.value;
  console.log(this.formobj.serviceDuration);
  
  let hr=Math.floor(this.formobj.serviceDuration / 60);
  let min=this.formobj.serviceDuration % 60;

  this.Duration=hr+" hours "+min+" minutes";
  console.log(this.Duration);

  this.UpdateServiceForm.patchValue({serviceDuration:this.Duration})

this.ServiceList.UpdateService(this.UpdateServiceForm.value,this.ServiceId).subscribe(p=>{
  console.log("Update");
  this.updateVendorForm();
 this.openSnackBars();
  this.findall(); 
  this.Isupdateopen=false;
  this.opneCards=true;



})
}

Isupdateopen:boolean=false;
opneCards:boolean=true;
openclose(){
  this.Isupdateopen=false;
  this.opneCards=true;
}

updateService(da:any){
  this.Isupdateopen=true;
  this.opneCards=false;

  console.log(da);
  this.UpdateObject=da;
  this._snackBar.open("",da.serviceId,this.config);
  //alert(da.serviceId)

this.ServiceId=da.serviceId;
  this.UpdateServiceForm.setValue({
    serviceId:da.serviceId,vendorEmailId:da.vendorEmailId,vendorName:da.vendorName,phoneNo:da.phoneNo,experience:da.experience,
  otherServices:da.otherServices,serviceCatogries:da.serviceCatogries,serviceName:da.serviceName,
serviceDuration:da.serviceDuration,serviceImage:da.serviceImage,cost:da.cost,description:da.description});
console.log(this.UpdateServiceForm.value);
  /*
this.UpdateServiceForm.patchValue({serviceName:da.serviceName});
console.log(this.UpdateServiceForm.value);  */


}


UpdateServiceForm= new FormGroup({
  "serviceId": new FormControl(''),  
  "vendorEmailId": new FormControl(''),
  "vendorName": new FormControl(''),
  "phoneNo": new FormControl(''),
  "experience": new FormControl(''),
  "otherServices": new FormControl(''),
 
  "serviceCatogries": new FormControl(''),
  "serviceName": new FormControl(''),
  "serviceDuration": new FormControl(''),
  "cost": new FormControl(''),
  "description": new FormControl(''),
  "serviceImage": new FormControl('')
});


// *************************************Vendor-Suggestion**********************************

updateVendorForm(){
  return this.ServiceList.updateVendorServiceDetails(this.UpdateServiceForm.value).subscribe(
    res=>{
      console.log("updated to neo4j");
      // this.clearUpdateForm();
    })
}

deleteServiceForm(serviceName:any){
  return this.ServiceList.deleteVendorServiceDetails(serviceName).subscribe(
    res=>{
      console.log("deleted from neo4j");
    }
  )
}





}
