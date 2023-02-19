import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorsuggestService } from './service/vendorsuggest.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { DescService } from 'app/servicesvendorsui/vendor-description/vendor-desc-service/desc.service';

@Component({
  selector: 'app-vendorsuggestion',
  templateUrl: './vendorsuggestion.component.html',
  styleUrls: ['./vendorsuggestion.component.css']
})
export class VendorsuggestionComponent implements OnInit {

  constructor(private vendorSuggest:VendorsuggestService,private router:Router, private vendorDescService:DescService) { }

  ngOnInit(): void {
    this.getVendors();
  }
  
  @Input() fromnavbar:any='';
  defaultpincode:any;
  pincodeControl=new FormControl("");
  requiredService:string="";
  vendorsList: any;
  header1=true;
  header2=false;
  p: number = 1;


  checkHeaders(){
    if(this.vendorsList.length==0 ){
      this.header1 = false;
      this.header2 = true;
    }
    else{
      this.header1=true;
      this.header2=false;
    }
  }

  getVendorsByDefaultPincode(){
    this.vendorSuggest.getUserAddressByEmail().subscribe(
      resp=>{
        let res:any = resp;
        this.defaultpincode=res.pinCode;
        this.pincodeControl.setValue(this.defaultpincode);
    this.vendorSuggest.suggestVendorBasedOnServiceAndPincode(this.vendorSuggest.serviceFromServiceSuggest,this.defaultpincode).subscribe(
      
      resp=>{
        this.vendorsList=resp;
        this.checkHeaders();
       
       })
    })
  }
  

  getVendors(){
    if(this.pincodeControl.value==""){
      this.getVendorsByDefaultPincode();
     }
    else{
    this.vendorSuggest.suggestVendorBasedOnServiceAndPincode(this.vendorSuggest.serviceFromServiceSuggest,this.pincodeControl.value).subscribe(
      resp=>{
        this.vendorsList=resp;
        this.checkHeaders();
       
     })
     
    }
  
  }

  vendorDescription(serviceObj:any){
    this.vendorSuggest.ServiceObj=serviceObj;
    this.vendorDescService.vendorEmailId =serviceObj.vendorEmailId;
    this.vendorDescService.cost=serviceObj.cost;
    this.vendorDescService.serviceId=serviceObj.serviceId;
    this.vendorDescService.serviceName=serviceObj.serviceName;
    this.vendorDescService.serviceObject=serviceObj;
    this.router.navigate(['/vendor-details']);
  }


}
