import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'app/service-provider-user-ui/services.service';
import { VendorsuggestionService } from 'app/suggestions/services/vendorsuggestion.service';
import { VendorServicesComponent } from 'app/vendor-services/vendor-services.component';
import { VendorsuggestService } from 'app/vendorsuggestion/service/vendorsuggest.service';
import { AllServices } from '../model/all-services';
import { SubServices } from '../model/sub-services';
import { AvailableServicesService } from '../services/available-services.service';

@Component({
  selector: 'app-sub-service-selection',
  templateUrl: './sub-service-selection.component.html',
  styleUrls: ['./sub-service-selection.component.css']
})
export class SubServiceSelectionComponent implements OnInit {

  constructor(private aS:AvailableServicesService,private router:Router,
    private ServiceProviderService:ServicesService,private vendorService:VendorsuggestionService, private vendorSuggest:VendorsuggestService) {
      this.selectedService=aS.selectedService;
   }

  ngOnInit(): void {
    if(this.selectedService==null){
      this.mainService=this.aS.getAllAvailableServices();
      this.selectedService=this.mainService.pop();
    }
  }
  
  mainService:any;
  selectedService:any;
  selectedSubService:any;

  subServiceChoice(){
    this.router.navigate(['/vendor-suggest']);
  }


  selectedServicetoStore(service:any){
    console.log(service);
    this.ServiceProviderService.ServiceNameForServiceProvider=service;
    console.log(this.ServiceProviderService.ServiceNameForServiceProvider)
    this.vendorSuggest.serviceFromServiceSuggest=service;
    this.vendorService.serviceFromServiceSuggest=service;
    this.subServiceChoice();
 }
}
