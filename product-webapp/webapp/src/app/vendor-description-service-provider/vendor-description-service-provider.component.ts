import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentserviceService } from 'app/appointment/appointmentservice.service';
import { ChatServiceService } from 'app/chat/services/chat-service.service';
import { LocationService } from 'app/location-tracking/service/location.service';
import { ServicesService } from 'app/service-provider-user-ui/services.service';
import { AvailableServicesService } from 'app/servicesvendorsui/services/available-services.service';
import { VendorSelectionServiceService } from 'app/servicesvendorsui/services/vendor-selection-service.service';
import { VendorsuggestionService } from 'app/suggestions/services/vendorsuggestion.service';

@Component({
  selector: 'app-vendor-description-service-provider',
  templateUrl: './vendor-description-service-provider.component.html',
  styleUrls: ['./vendor-description-service-provider.component.css']
})
export class VendorDescriptionServiceProviderComponent implements OnInit {

  constructor(private as:AvailableServicesService,private vSS:VendorSelectionServiceService ,
    private suggestionservice:VendorsuggestionService,private router:Router,
    private chatService:ChatServiceService,private locationService:LocationService,
    private ServiceProviderService:ServicesService,
    private appointmentService:AppointmentserviceService) {
      this.getVendorForServiceProviderService();
     }

  ngOnInit(): void {
  }

  a:any;
  aEmail:any;
  vendorDesc:any;
  UserData:any;
    getVendorForServiceProviderService(){
      console.log(this.suggestionservice.ServiCeID)
      
      this.suggestionservice.GetServiceProvider_Se(this.suggestionservice.ServiCeID).subscribe(
    res=>{
      console.log(res)
      this.a=res;
      console.log("***************************************************************")
console.log(this.a)
      console.log("***************************************************************")
      this.aEmail=this.a.vendorEmailId;
      console.log(this.aEmail)
      this.GetVendorDetails(this.aEmail);
      this.GetUserDetails(localStorage.getItem('email'));
    }
      )   
    }



GetUserDetails(email:any){
  this.ServiceProviderService.Get_User_Details(email).subscribe(
    respo=>{

      this.UserData=respo;

      console.log("***************************************************************")
      console.log(this.UserData)
      console.log("***************************************************************")
      console.log(this.vendorDesc.firstName)
    }
  )
}


    GetVendorDetails(email:any){

      this.ServiceProviderService.Get_User_Details(email).subscribe(
        respo=>{
          this.vendorDesc=respo;
          console.log("***************************************************************")
          console.log(this.vendorDesc)
          console.log("***************************************************************")
          console.log(this.vendorDesc.firstName)
        }
      )
}

    AppointmentForm = new FormGroup({
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
    
  ServiceId:any;  ServiceTitle:any;
  vendorName:any;  vendorPhone:any;
status:any;  VenorEmail:any;
userPhn:any; UserName:any;
Userarea:any;
    books(data:any){
     console.log(this.UserData)
      console.log("////////////99999999999999999999////////////////////////////////")
      this.ServiceId=this.suggestionservice.ServiCeID;
  console.log(this.ServiceId)
      this.vendorName=this.vendorDesc.firstName;
      console.log(this.vendorName)
      this.ServiceTitle=this.a.serviceName
      console.log(this.ServiceTitle)
      this.vendorPhone=this.a.phoneNo;
      console.log(this.vendorPhone)
  this.VenorEmail=this.a.vendorEmailId;
  console.log(this.VenorEmail)
this.userPhn=this.UserData.mobileNo;
this.UserName=this.UserData.firstName+" "+this.UserData.lastName;
this.Userarea=this.UserData.address.area;

      this.AppointmentForm.patchValue({vendorName:this.vendorName,
        userEmailId:this.UserData.emailId,
        vendorEmailId:this.VenorEmail,
        serviceId:this.ServiceId,
        status:this.status,
        serviceTitle:this.ServiceTitle,
        vendorphoneNo:this.vendorPhone,
      UserPhoneNo:this.userPhn,
    userName:this.UserName,
  area:this.Userarea});
        
        this.appointmentService.AddApoointment(this.AppointmentForm.value).subscribe(
          response=>{
            console.log(response);
            this.router.navigate(['/appointments']);
            this.appointmentService.sendEmail(this.AppointmentForm.value).subscribe(
              respo=>{
                console.log(respo);
           
              }
            )
          }
        )
    }



    currentImage:any;
    currentProfile(){
      this.currentImage=this.vendorDesc.image;
      console.log(this.currentImage);
    }
    userName:any;
    userEmail=localStorage.getItem('email');
    whenMessageClicked(){
      this.chatService.getName().subscribe(
        res=>{
          let resp:any=res;
          this.userName=resp.firstName;
          alert(this.userName);
          this.chatService.createNewChat(this.vendorDesc.emailId,this.vendorDesc.firstName,this.userEmail,this.userName).subscribe(
            respo=>{
              console.log(resp);
              this.router.navigate(['chat']);
            }
          )
        }
      )    
    }
  
}
