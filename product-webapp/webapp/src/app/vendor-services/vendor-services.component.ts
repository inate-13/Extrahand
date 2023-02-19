import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { ServicesService } from './services.service';


@Component({
  selector: 'app-vendor-services',
  templateUrl: './vendor-services.component.html',
  styleUrls: ['./vendor-services.component.css']
})
export class VendorServicesComponent implements OnInit {
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  constructor(private servicesServices:ServicesService,private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.open('called', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {
  }

  VendorServiceForm= new FormGroup({
    "vendorEmailId": new FormControl(''),
    "vendorName": new FormControl(''),
    "phoneNo": new FormControl(''),
    "experience": new FormControl(''),
    "otherServices": new FormControl(''),
    "pincode":new FormControl(''),
    "serviceCatogries": new FormControl(''),
    "serviceName": new FormControl(''),
    "serviceDuration": new FormControl(''),
    "cost": new FormControl(''),
    "description": new FormControl(''),
    "serviceImage": new FormControl('')
  });

  respdata:any;

  
//fetch from register data base
// VendorEmail:string="abc@gmail.com";
// vendorName:string="abcd";
// phoneNo:any=1234567890;
// experience:any=6;
// otherServices:any="a";
pincode:any;
VendorEmailId:any;
VendorObj:any;
formobj:any;
Duration:any;
  VendorService(){
    // alert("Called")
    this.openSnackBar();
    console.log(this.VendorServiceForm.value);
    this.formobj=this.VendorServiceForm.value;
    console.log(this.formobj.serviceDuration);
    
    let hr=Math.floor(this.formobj.serviceDuration / 60);
    let min=this.formobj.serviceDuration % 60;

    this.Duration=hr+" hours "+min+" minutes";
    console.log(this.Duration);

    this.VendorServiceForm.patchValue({serviceDuration:this.Duration})

    this.VendorServiceForm.value.vendorEmailId=localStorage.getItem('email');
    this.VendorEmailId=localStorage.getItem('email');
    this.servicesServices.Get_User_Details(this.VendorEmailId).subscribe(
      response=>{
        console.log(response);
        this.VendorObj=response;
        console.log(this.VendorObj.address)
      }
    )
    this.VendorServiceForm.value.vendorName=localStorage.getItem('name')
    // this.VendorServiceForm.patchValue({vendorEmailId:this.VendorEmail,vendorName:this.vendorName,phoneNo:this.phoneNo,experience:this.experience,otherServices:this.experience});
      console.log(this.VendorServiceForm.value);
    this.servicesServices.SubmitServices(this.VendorServiceForm.value).subscribe(
      response=>{
        console.log(response);
    })

    this.servicesServices.postNewService(this.VendorServiceForm.value).subscribe(
        resp=>{
          this.openSnackBar();
          console.log(resp);
          this.clearUpdateForm();
    })      
  }

  clearUpdateForm(){
    this.VendorServiceForm.controls.vendorEmailId.setValue('');
    this.VendorServiceForm.controls.vendorName.setValue('');
    this.VendorServiceForm.controls.phoneNo.setValue('');
    this.VendorServiceForm.controls.experience.setValue('');
    this.VendorServiceForm.controls.otherServices.setValue('');
    this.VendorServiceForm.controls.serviceCatogries.setValue('');
    this.VendorServiceForm.controls.serviceName.setValue('');
    this.VendorServiceForm.controls.serviceDuration.setValue('');
    this.VendorServiceForm.controls.cost.setValue('');
    this.VendorServiceForm.controls.description.setValue('');
    this.VendorServiceForm.controls.serviceImage.setValue('');
  }
  
}


