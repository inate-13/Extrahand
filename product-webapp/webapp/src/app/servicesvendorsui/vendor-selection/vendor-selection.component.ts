import { Component, OnInit } from '@angular/core';
import { SubServices } from '../model/sub-services';
import { Vendors } from '../model/vendor';
import{Router} from '@angular/router'
import { AvailableServicesService } from '../services/available-services.service';
import { HttpClient } from '@angular/common/http';
import { VendorSelectionServiceService } from '../services/vendor-selection-service.service';

@Component({
  selector: 'app-vendor-selection',
  templateUrl: './vendor-selection.component.html',
  styleUrls: ['./vendor-selection.component.css']
})
export class VendorSelectionComponent implements OnInit {

  userobj!:string;
  emailId: any;
 
  constructor(private as:AvailableServicesService,private router:Router,private vSS:VendorSelectionServiceService ) {
    this.selectedSubService=as.selectedSubService;
  }

  ngOnInit():void {
  
  }  
  
  selectedSubService!:SubServices;
  selectedVendor!:Vendors;

  vendorChoice(vendor:any,emailId:any){
    this.selectedVendor=vendor;
    this.as.selectedVendor=vendor;
    this.router.navigate(['vendor-details']);
  }
      
}
  

  
