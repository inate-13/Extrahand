import { Component, OnInit, Type, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DescService } from 'app/servicesvendorsui/vendor-description/vendor-desc-service/desc.service';
import { VendorsuggestionService } from './services/vendorsuggestion.service';
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  private config:MatSnackBarConfig;
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  constructor( private vendorService:VendorsuggestionService,private router:Router,private _snackBar: MatSnackBar,private vendorDescService:DescService) {
    this.config=new MatSnackBarConfig();
    this.config.duration=1000;
  }
  
  ngOnInit(): void {
    this.getVendors();
  }

  @Input() fromnavbar:any='';
  defaultpincode:any;
  pincodeControl=new FormControl("");
  requiredService:string="";
  vendorsList: any;
  header1:any;
  header2:any;
  header3:any;
  p: number = 1;

  //snackbar
  public open(message:string, duration?: number,action?:string){
    this.config=duration?Object.assign(this.config,{'duration':duration}):this.config;
    this._snackBar.open(message,action,this.config);
  }

//to get all vendors based on pincode
  getVendors(){
    this.vendorService.suggestVendorBasedOnService().subscribe(
      
      resp=>{
        this.vendorsList=resp;
        alert(resp);
          })
       }


  vendorDescription(ServiceObj:any){
    this.vendorDescService.vendorEmailId =ServiceObj.vendorEmailId;
    this.vendorDescService.cost=ServiceObj.cost;
    this.vendorDescService.serviceId=ServiceObj.serviceId;
    this.vendorDescService.serviceName=ServiceObj.serviceName;
    this.router.navigate(['/vendor-details']);
  }

}

