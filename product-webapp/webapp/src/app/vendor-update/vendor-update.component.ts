import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { StepperOrientation } from '@angular/material/stepper';
import { map, Observable } from 'rxjs';
import { VendorUpdateService } from './service/vendor-update.service';
import {MatSnackBar, MatSnackBarHorizontalPosition} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.css']
})
export class VendorUpdateComponent implements OnInit {
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver,private vUS:VendorUpdateService,private _snackBar: MatSnackBar,
    private router:Router) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  openSnackBar() {
    this._snackBar.open('Details are Updated', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,

    });
  }
  ngOnInit(): void {
    this.getVendorDetails();
  }

  vendorData:any;
  respdata:any;
  flag:boolean=false;
  subCatBadges:string[]=[];
  addressFlag:boolean=false;
  email:any=localStorage.getItem('email');
  role:any="VENDOR";
  locationFlag=false;
  latitude:any;
  longitude:any;
  stepperOrientation: Observable<StepperOrientation>;

  vendorProfileForm= new FormGroup({
    "firstName": new FormControl('',[Validators.required,Validators.minLength(3)]),
    "lastName": new FormControl('',[Validators.required,Validators.minLength(3)]),
    "mobileNo": new FormControl('',[Validators.required,Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]),
    "gender": new FormControl('',[Validators.required]),
    "dob": new FormControl('',[Validators.required])
  });

  vendorExperienceForm=new FormGroup({
    "yOP": new FormControl('',[Validators.required]),
    "cat": new FormControl('',[Validators.required]),
    "subCategory": new FormControl('',[Validators.required]),
    "desc": new FormControl('')
  });

  vendorAddressForm=new FormGroup({
    "shopName": new FormControl('',[Validators.required,Validators.minLength(3)]),
    "doorNo": new FormControl('',[Validators.required]),
    "addressLine": new FormControl('',[Validators.required]),
    "district": new FormControl('',[Validators.required]),
    "pincode": new FormControl('',[Validators.required,Validators.minLength(6)]),
    "state": new FormControl('',[Validators.required]),
    "country": new FormControl('',[Validators.required]),
    "latitude": new FormControl(''),
    "longitude": new FormControl('')
  });

  onChange(event:string){
    if(event=='Other'){
      this.flag=true;
    }
    else{
      this.flag=false;
    }
  }

  addBadge(subCat:string){
    if(subCat){
      this.subCatBadges.push(subCat);
      this.vendorExperienceForm.controls.subCategory.setValue("");
    }
  }

  removeBadge(sc:any){
    const index = this.subCatBadges.indexOf(sc);
    if (index >= 0) {
      this.subCatBadges.splice(index, 1);
    }
  }

  flagEnable(){
    this.locationFlag=!this.locationFlag;
    if(this.locationFlag){
      navigator.geolocation.getCurrentPosition(
        position=>{
          this.latitude=position.coords.latitude;
          this.longitude=position.coords.longitude;
          console.log(this.latitude, this.longitude);
        }
      )
    }
  }
  

  update(){
    this.vendorData={
      "emailId": this.email,
      "firstName": this.vendorProfileForm.controls.firstName.value,
      "lastName": this.vendorProfileForm.controls.lastName.value,
      "mobileNo": this.vendorProfileForm.controls.mobileNo.value,
      "dob": this.vendorProfileForm.controls.dob.value,
      "addressList": [],
      "workShopAddress": {
          "workShopName": this.vendorAddressForm.controls.shopName.value,
          "doorNo": this.vendorAddressForm.controls.doorNo.value,
          "addressLine": this.vendorAddressForm.controls.addressLine.value,
          "district": this.vendorAddressForm.controls.district.value,
          "pincode": this.vendorAddressForm.controls.pincode.value,
          "state": this.vendorAddressForm.controls.state.value,
          "country": this.vendorAddressForm.controls.country.value,
          "latitude":this.latitude,
          "longitude":this.longitude
      },
      "role": this.role,
      "gender": this.vendorProfileForm.controls.gender.value,
      "image": "",
      "experience": {
          "profession": this.vendorExperienceForm.controls.cat.value,
          "experience": this.vendorExperienceForm.controls.yOP.value,
          "description": this.vendorExperienceForm.controls.desc.value,
          "subProfession": this.subCatBadges
      }
    }
    console.log(this.vendorData);
    this.vUS.updateVendorProfile(this.vendorData).subscribe(
      respo=>{
        this.openSnackBar();
        console.log(respo)
        this.router.navigate(['/my-services'])
        
      }
    )
  }
  
  data(){
    // console.log(this.vendorProfileForm.value,this.vendorAddressForm.value,this.vendorExperienceForm.value);
  }

  clearForm(){
    this.vendorAddressForm.controls.addressLine.setValue(' ');
    this.vendorAddressForm.controls.shopName.setValue(' ');
    this.vendorAddressForm.controls.pincode.setValue(' ');
    this.vendorAddressForm.controls.doorNo.setValue(' ');
    this.vendorAddressForm.controls.district.setValue(' ');
    this.vendorAddressForm.controls.country.setValue(' ');
    this.vendorAddressForm.controls.state.setValue(' ');
  }

  setVendorUpdateForm(vendorData:any){
    this.vendorProfileForm.setValue({
      firstName: vendorData.firstName,
      lastName: vendorData.lastName,
      mobileNo: vendorData.mobileNo,
      gender: vendorData.gender,
      dob: vendorData.dob
    })
    this.vendorExperienceForm.setValue({
      yOP: vendorData.experience.experience,
      cat: vendorData.experience.profession,
      subCategory: '',
      desc: vendorData.experience.description
    })
    this.vendorAddressForm.setValue({
      shopName: vendorData.workShopAddress.workShopName,
      doorNo: vendorData.workShopAddress.doorNo,
      addressLine: vendorData.workShopAddress.addressLine,
      district: vendorData.workShopAddress.district,
      pincode: vendorData.workShopAddress.pincode,
      state: vendorData.workShopAddress.state,
      country: vendorData.workShopAddress.country,
      latitude: vendorData.workShopAddress.latitude,
      longitude: vendorData.workShopAddress.longitude
    })
    this.subCatBadges=vendorData.experience.subProfession;
  }

  getVendorDetails(){
    this.vUS.getVendorProfile().subscribe(
      res=>{
        console.log(res);
        this.setVendorUpdateForm(res);
      }
    )
  }
}
