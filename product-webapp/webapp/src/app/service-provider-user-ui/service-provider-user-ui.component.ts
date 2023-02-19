import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DescService } from 'app/servicesvendorsui/vendor-description/vendor-desc-service/desc.service';
import { VendorsuggestionService } from 'app/suggestions/services/vendorsuggestion.service';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-service-provider-user-ui',
  templateUrl: './service-provider-user-ui.component.html',
  styleUrls: ['./service-provider-user-ui.component.css']
})
export class ServiceProviderUserUiComponent implements OnInit {

  constructor(private ServiceProviderService:ServicesService,
    private router:Router,private _snackBar: MatSnackBar,
    private suggestionservice:VendorsuggestionService, private vendorDescService:DescService)
   {
    //
   
    
    // this.GetUserDetails();
    // this.GetServices();
    }

  ngOnInit(): void {
    this.getAllVendors();
  }

  subServices=["Cooking","Compressor Repair and Maintenance","Condenser Repair and Maintenance","AC Maintanance & Cleaning",
      "Smart TV","Television set","Android TV","Water tap and Water leak","Fixtures","Drainage",
      "Mobile Service","Laptop Service","Facial","Hair Grooming","House Wiring","Lighting System","Painting","Carpentry Works",
      "Furniture Manufacturing","Bikes","Cars","Event Management","Wedding","Festval","Party"]
  
  PinCode="530027";
  ServiceName:any;
  UserPinCode:any;
  UserData:any;
  vendorList:any[]=[];
  vendorDetails:any[]=[];
  i=0;
  UserEmail:any;
  UserObj:any;

  GetUserDetails(){
    this.UserEmail=localStorage.getItem('email')
    console.log(this.UserEmail);
    this.ServiceProviderService.Get_User_Details(this.UserEmail).subscribe(
      res=>{
        this.UserObj=res;
        console.log(this.UserObj)
        this.GetServices();    
      }
    )
  }
  
  abc:any;
  ServiceList:any;
  GetServices(){
    this.abc=this.ServiceProviderService.ServiceNameForServiceProvider;
    console.log(this.abc)
    console.log(this.UserObj)
    console.log(this.UserObj.address.pinCode);
  this.UserPinCode=this.UserObj.address.pinCode;    
    this.ServiceProviderService.GetAll(this.PinCode,this.ServiceName).subscribe(
      res=>{
        console.log(res);
        this.ServiceList=res;
      }
    )
  }


  vendorDescription(v:any){
    this.vendorDescService.serviceId=v.serviceId 
    this.vendorDescService.cost=v.cost;
    this.vendorDescService.serviceName=v.serviceName;
    this.vendorDescService.vendorEmailId=v.vendorEmailId;
    this.vendorDescService.serviceObject=v;
    this.router.navigate(['/vendor-details']);
  }


  h1=true;
  h2=false;

  getAllVendorsBySubservice(subService:any){  
    this.ServiceProviderService.getAllVendorsBasedOnServiceName(subService).subscribe(
     resp=>{
      let res:any=resp;
        this.vendorList=res;
        console.log(this.vendorList);
        this.h1=true;
        this.h2=false;
        if(this.vendorList.length==0){
          this.h2=true;
          this.h1=false;
        }
     })
  }

  getVendorDetailsByEmail(){
    this.vendorList.map ((vendor) => {
      console.log(vendor.vendorEmailId)
      this.ServiceProviderService.Get_User_Details(vendor.vendorEmailId).subscribe(
        resp=>{
            this.vendorDetails[this.i]=resp;
            this.i=this.i+1;
        })  
    }); 
  }

  getAllVendors(){
    this.ServiceProviderService.getAllVendors().subscribe(
      resp=>{
         let res:any=resp;
         this.vendorList=res;
      })
  }
}
