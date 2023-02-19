import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentserviceService } from 'app/appointment/appointmentservice.service';
import { ChatServiceService } from 'app/chat/services/chat-service.service';
import { LocationService } from 'app/location-tracking/service/location.service';
import { PaymentService } from 'app/payment/payment.service';
import { ServicesService } from 'app/service-provider-user-ui/services.service';
import { VendorsuggestionService } from 'app/suggestions/services/vendorsuggestion.service';
import { VendorsuggestService } from 'app/vendorsuggestion/service/vendorsuggest.service';
import { Vendors } from '../model/vendor';
import { AvailableServicesService } from '../services/available-services.service';
import { VendorSelectionServiceService } from '../services/vendor-selection-service.service';
import { DescService } from './vendor-desc-service/desc.service';



@Component({
  selector: 'app-vendor-description',
  templateUrl: './vendor-description.component.html',
  styleUrls: ['./vendor-description.component.css']
})
export class VendorDescriptionComponent implements OnInit {

  constructor(private as:AvailableServicesService,private vSS:VendorSelectionServiceService ,
    private suggestionservice:VendorsuggestionService,private router:Router,
    private chatService:ChatServiceService,private locationService:LocationService,
    private ServiceProviderService:ServicesService,private suggestService:VendorsuggestService,
    private appointmentService:AppointmentserviceService, private vendorDescService:DescService,
    private paymentService:PaymentService) {
    this.getVendor();
    
  }

  ngOnInit(): void {
    
  }
 
  userName:any;
  userEmail=localStorage.getItem('email');
  vendorDesc:any;
  currentImage:any;
  work:any;
  local=localStorage;
  ServiceObj:any;
  locationComponentFlag=false;
  cost=this.vendorDescService.cost;
  appointmentTime:any;
  ServiceTitle:any;
  status="panding";
  vendorName:any;
  vendorPhone:any;
  ServiceId:any;
  userEmailId=localStorage.getItem('email');




  getVendor(){
    this.ServiceObj=this.vendorDescService.serviceObject;
    console.log(this.suggestService.ServiceObj);
    console.log(this.suggestService.vendorEmailIdToBook);

    this.vSS.getVendorById(this.vendorDescService.vendorEmailId).subscribe(
      res=>{
      
        this.vendorDesc=res;
        console.log(this.vendorDesc);
        this.work=this.vendorDesc.workShopAddress;
        this.setVendorEmailInLocationService();
        this.locationService.disableAllFlags();
        this.locationService.enableWorkShopLocationFlag();
        console.log(this.vendorDesc.image.value);
      }
    )
  }


  currentProfile(){
    this.currentImage=this.vendorDesc.image;
    console.log(this.currentImage);
  }

  AppointmentForm = new FormGroup({
    "vendorName":new FormControl(''),
    "vendorEmailId":new FormControl(''),
    "userEmailId":new FormControl(''),
    "serviceId":new FormControl(''),
    "status":new FormControl(''),
    "appointmentTime":new FormControl(''),
    "serviceTitle":new FormControl(''),
    "vendorphoneNo":new FormControl('')
  })
  

  books(data:any){
    this.paymentService.vendorObject=this.ServiceObj;
    this.paymentService.cost=this.vendorDescService.cost;
    this.paymentService.serviceId=this.vendorDescService.serviceId;
    this.paymentService.serviceName=this.vendorDescService.serviceName;
    this.router.navigate(['/payment']);

    // this.vendorName=data.firstName;

    // this.ServiceTitle=this.ServiceObj.serviceName;
    // this.vendorPhone=this.vendorDesc.mobileNo;

    // this.AppointmentForm.patchValue({vendorName:this.vendorName,userEmailId:this.userEmailId,serviceId:
    // this.ServiceId,status:this.status,appointmentTime:this.appointmentTime,serviceTitle:this.ServiceTitle,
    //   vendorphoneNo:this.vendorPhone});
    //   console.log(this.userEmailId)
    //   this.appointmentService.AddApoointment(this.AppointmentForm.value).subscribe(
    //     response=>{
    //       console.log(response);
    //       this.appointmentService.sendEmail(this.AppointmentForm.value).subscribe(
    //         respo=>{
    //           console.log(respo);  
    //           this.router.navigate(['/payment']);
    //         }
    //       )
    //     }
    //   )
  }

  whenMessageClicked(){
    this.chatService.getName().subscribe(
      res=>{
        let resp:any=res;
        this.userName=resp.firstName;
        this.chatService.createNewChat(this.vendorDesc.emailId,this.vendorDesc.firstName,this.userEmail,this.userName).subscribe(
          respo=>{
            console.log(resp);
            this.router.navigate(['chat']);
          }
        )
      }
    )    
  }

  setVendorEmailInLocationService(){
    this.locationService.vendorEmail=this.vendorDesc.emailId;
  }
  
}
