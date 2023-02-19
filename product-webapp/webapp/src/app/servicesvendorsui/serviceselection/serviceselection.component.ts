import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'app/location-tracking/service/location.service';
import { VendorsuggestionService } from 'app/suggestions/services/vendorsuggestion.service';
import { AllServices } from '../model/all-services';
import { SubServices } from '../model/sub-services';
import { AvailableServicesService } from '../services/available-services.service';
import { SubServiceSelectionComponent } from '../sub-service-selection/sub-service-selection.component';

@Component({
  selector: 'app-serviceselection',
  templateUrl: './serviceselection.component.html',
  styleUrls: ['./serviceselection.component.css']
})
export class ServiceselectionComponent implements OnInit {

  constructor(private as:AvailableServicesService,private router:Router,private scroller:ViewportScroller,
    private vendorService:VendorsuggestionService,private locationService:LocationService) { }

  ngOnInit(): void {
    this.allServices=this.as.getAllAvailableServices();
    this.locationService.disableAllFlags();
  }

  allServices!:AllServices[];
  selectedService:any;
  selectedSubService:any;
  selectedVendor:any;
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [944, 1011, 984].map((n) =>"/assets/carousel/pexels-christina-morillo-1181352.jpg" );

  serviceChoice(service:any){
    console.log(service)
    this.selectedService=service;
    this.as.selectedService=service;
    this.router.navigate(['sub-services']);
  }

  subServiceChoice(subService:any){
    this.selectedSubService=subService;
    this.as.selectedSubService=subService;
  }

 

}
