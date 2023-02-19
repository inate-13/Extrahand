import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ComplaintService } from './complaint.service';


@Component({
  selector: 'app-compalint-service',
  templateUrl: './compalint-service.component.html',
  styleUrls: ['./compalint-service.component.css']
})
export class CompalintServiceComponent implements OnInit {
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  //  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private Complainservice:ComplaintService,private _snackBar: MatSnackBar) { }
  openSnackBar() {
    this._snackBar.open('Complaint accepted!', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,
      //  verticalPosition: this.verticalPosition,
    });
  }

  ngOnInit(): void {
  }

  openotherr:boolean=false;

  openother(){
this.openotherr=true;
this.VendorComp=false;
  }


  collection: any[] = [
  { VendorId:"vendor1@gmail.com" , Vendor_Name: "vendor1" ,SName: "Cooking", SDetails: "aaaaaaaaa" },
  { VendorId:"vendor2@gmail.com", Vendor_Name:  "vendor2" ,SName: "Repair and Service", SDetails: "b" },
  { VendorId:"vendor3@gmail.com" , Vendor_Name: "vendor3" ,SName: "Repair and Service", SDetails: "b" },
  { VendorId:"vendor4@gmail.com" , Vendor_Name: "vendor4" ,SName: "Carpenter", SDetails: "aaaaaaaaa" },
  { VendorId:"vendor5@gmail.com" , Vendor_Name: "vendor5" ,SName: "Carpenter", SDetails: "aaaaaaaaa" },
  { VendorId:6 , Vendor_Name: "e" ,SName: "Carpenter", SDetails: "aaaaaaaaa" },
  { VendorId:7 , Vendor_Name: "d" ,SName: "Electrician", SDetails: "aaaaaaaaa" },
  { VendorId:8 , Vendor_Name: "s" ,SName: "Electrician", SDetails: "aaaaaaaaa" },
  { VendorId:9 , Vendor_Name: "c" ,SName: "Electrician", SDetails: "aaaaaaaaa" },
  { VendorId:10 , Vendor_Name: "b" ,SName: "Electrician", SDetails: "aaaaaaaaa" },
  { VendorId:11 , Vendor_Name: "a" ,SName: "Electrician", SDetails: "aaaaaaaaa" }];

  data:any=0;
  VendorComp:boolean=false;
  vendorNa:any="";
  findvendor(){
    this.vendorNa="";
    this.data=this.FindVendorForm.value.VendorId;
    for (let j = 0; j < this.collection.length; j++) {
      if (this.data == this.collection[j].VendorId) {
        this.VendorComp=true;
        console.log(this.data)
      this.vendorNa=this.collection[j].Vendor_Name
      console.log(this.vendorNa)
      this.ComplaintForm.patchValue({vendor_name:this.vendorNa});
      this.VendorComp=true;
      }
    }

    if(this.vendorNa=="")
    { this.vendorNa="Please Enter Correct Id";
    this.VendorComp=false;
  }
  }


  FindVendorForm=new FormGroup({
    "VendorId":new FormControl('')
  })

  OtherForm=new FormGroup({
    "complaint_Description":new FormControl('')
  })


  ComplaintForm=new FormGroup({
    "emailId":new FormControl(''),
    "complaint_Title":new FormControl(''),
    "complaint_Description":new FormControl(''),
    "vendor_name":new FormControl('')
  });

  account:boolean=false;

  a2:boolean=false;
  a3:boolean=false;
  a4:boolean=false;
  a5:boolean=false;
  a6:boolean=false;

  subop1(title:any,desc:any)
  {
  //  this.ComplaintForm.setValue.
  this.ComplaintForm.patchValue({complaint_Title:title,complaint_Description:desc})
 
  this.Complainservice.addcom(this.ComplaintForm.value).subscribe(
    response=>{console.log(response);
  this.resdata=response;
  console.log(this.ComplaintForm.value)
     } )

   //alert('Complaint Registered!!');
  this.openSnackBar();
  }

  otherdes:any="";
subop2()
{
  this.otherdes=this.OtherForm.value.complaint_Description;
  this.ComplaintForm.patchValue({complaint_Description:this.otherdes,complaint_Title:"Vendor Related"});

  this.Complainservice.addcom(this.ComplaintForm.value).subscribe(
    response=>{console.log(response);
  this.resdata=response;
  console.log(this.ComplaintForm.value)
     } )

  // alert('Complaint Registered!!');
  this.openSnackBar();

}

  open(data:any)
  {
    if(data==1)
    {
      console.log(this.ComplaintForm.value)
      this.account=true;
      this.a2=false;
      this.a3=false;
      this.a4=false;
      this.a5=false;
      this.a6=false;
    
    }
    else if(data==2)
    {
      console.log(this.ComplaintForm.value)
      this.account=false;
      this.a2=true;
      this.a3=false;
      this.a4=false;
      this.a5=false;
      this.a6=false;
      this.openotherr=false;
    }
    else if(data==3)
    {
      console.log(this.ComplaintForm.value)
      this.account=false;
      this.a2=false;
      this.a3=true;
      this.a4=false;
      this.a5=false;
      this.a6=false;
    }
    else if(data==4)
    {
      this.account=false;
      this.a2=false;
      this.a3=false;
      this.a4=true;
      this.a5=false;
      this.a6=false; 
    }
    else if(data==5)
    {
      this.account=false;
      this.a2=false;
      this.a3=false;
      this.a4=false;
      this.a5=true;
  this.a6=false;
    }

    else if(data==6)
    {
      this.account=false;
      this.a2=false;
      this.a3=false;
      this.a4=false;
      this.a5=false;
      this.a6=true;
  
    }
  }

  resdata:any;
  Complaint(){
       this.Complainservice.addcom(this.ComplaintForm.value).subscribe(
         response=>{console.log(response);
       this.resdata=response;
          } )
  
        this.openSnackBar;
      }
    
  }    
 
  

