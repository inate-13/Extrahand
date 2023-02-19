import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServicesService } from 'app/service-provider-user-ui/services.service';
import { Observable, ObservableLike, Subscriber } from 'rxjs';
import { UpdateService } from './update.service';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  durationInSeconds = 3;
  selectedValue: string | undefined;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  
//for sending data
    updateDt:any|undefined;
  
 // this is the main constructor 
   constructor(private service:UpdateService,private _snackBar: MatSnackBar,private router:Router) {
    this.getAll();
  }

  // Location tracking code
  locationFlag=false;
  latitude:any=0;
  longitude:any=0;
  userData:any;
  flagEnable(){
    this.locationFlag=!this.locationFlag;
    if(this.locationFlag){
      navigator.geolocation.getCurrentPosition(
        position=>{
          console.log(position.coords.latitude,position.coords.longitude)
          this.latitude=position.coords.latitude;
          this.longitude=position.coords.longitude;
        }
      )
    }
  }  
    
   openSnackBar() {
    this._snackBar.open('Record Updated!!', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }

  genders: any = [  'MALE' ,'FEMALE' , 'OTHERS' ];
  countries: any = [  'India' ,'others'  ];

 
  private _formBuilder: FormBuilder = new FormBuilder;
  data:any;
 
  updateForm =  new FormGroup({
    "firstName"   : new FormControl('', [Validators.required,Validators.minLength(3)]),
    "lastName"    : new FormControl('', [Validators.required,Validators.minLength(3)]),
    "gender"      : new FormControl(''),
    "dob"         : new FormControl('', [Validators.required]),
    "mobileNo"    : new FormControl('', [Validators.required,Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]),
    "image"       : new FormControl(''),
    "doorNo"      : new FormControl('', [Validators.required]),
    "buildingName": new FormControl('', [Validators.required,Validators.minLength(4)]),
    "area"        : new FormControl('', [Validators.required,Validators.minLength(4)]),
    "city"        : new FormControl('', [Validators.required,Validators.minLength(4)]),
    "pinCode"     : new FormControl('', [Validators.required,Validators.minLength(4)]),
    "landMark"    : new FormControl('', [Validators.required,Validators.minLength(4)]),
    "country"    : new FormControl(''),
  });

  firstName=this.updateForm.value.firstName;
  vall:boolean=false;
  updateData:any;
  isLinear = false;


 //for image
   myImage!:Observable<any>;
   base64code!:any;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // by id api call
    this.getAll();
  }
   UpdateData:any;
  update(){
    this.userData={
      "emailId": localStorage.getItem('email'),
      "firstName": this.updateForm.controls.firstName.value,
      "lastName": this.updateForm.controls.lastName.value,
      "mobileNo": this.updateForm.controls.mobileNo.value,
      "image": this.updateForm.controls.image.value,
      "dob": this.updateForm.controls.dob.value,
      "address":{
        "doorNo"      :this.updateForm.controls.doorNo.value,
        "buildingName":this.updateForm.controls.buildingName.value,
        "area"        :this.updateForm.controls.area.value,
        "city"        :this.updateForm.controls.city.value,
        "pinCode"     :this.updateForm.controls.pinCode.value,
        "landMark"    :this.updateForm.controls.landMark.value,
        "country"    :this.updateForm.controls.country.value,
        "latitude":this.latitude,
        "longitude":this.longitude
      },
      "role": localStorage.getItem('role'),
    }
    // localStorage.setItem('name',this.firstName!);
    this.service.update(this.userData).subscribe(
      res=>{
        console.log(res);
        this.UpdateData=res;
        this.router.navigate(['/']).then(()=>window.location.reload);
       }
    )
    // alert("Record updated");
     this.openSnackBar();
    //  this.updateForm.reset();
  }

  //dropdown  for gender function
  changeGender(e:any) {
    console.log(e.value)
    this.gender!.setValue(e.target.value, {
       onlySelf: true
    })
  }
  //dropdown country function
  changeCountry(e:any) {
    this.country!.setValue(e.target.value, {
      onlySelf: true
     })   
  } 

  //for settting image
  changeImage(e:any){
    this.image!.setValue(e.target.value, {
      onlySelf: true
     })   
  }
  //for accessing form control  country
  get country(){
    return this.updateForm.get('country');
  }

  //for accessing form control   gender 
  get gender(){
     return this.updateForm.get('gender');
  }

    //for accessing form control   image
       get image(){
        return this.updateForm.get('image'); 
       }

       //for accessing form control   email
       get emailId(){
        return this.updateForm.get('emailId'); 
       }
     
        getMail(){
          return localStorage.getItem('email');
          console.log(localStorage.getItem('email'))
        } 
         
    


  getAll(){
     this.service.get().subscribe(
      response=>{
        this.updateForm.controls['firstName'].setValue(response.firstName)
        this.updateForm.controls['lastName'].setValue(response.lastName)
        this.updateForm.controls['gender'].setValue(response.gender)
        this.updateForm.controls['dob'].setValue(response.dob)
        this.updateForm.controls['mobileNo'].setValue(response.mobileNo)
        this.updateForm.controls['doorNo'].setValue(response.address.doorNo)
        this.updateForm.controls['buildingName'].setValue(response.address.buildingName)
        this.updateForm.controls['area'].setValue(response.address.area)
        this.updateForm.controls['city'].setValue(response.address.city)
        this.updateForm.controls['pinCode'].setValue(response.address.pinCode)
        this.updateForm.controls['country'].setValue(response.address.country)

        this.updateData=response;
        console.log(response);
      }
    );
  }


  onChange($event :Event,e:any){  
    //this.image!.setValue(e.target.value );
    const  target=$event.target as HTMLInputElement;    
    const file :File=(target.files  as FileList)[0] ;
    console.log(file);
    this.convertToBase64(file);
  }
 
  convertToBase64(file :File){
    const observable=new Observable ((subscriber:Subscriber<any>)=>{
      this.readFile(file,subscriber);
    })

    observable.subscribe((d)=>{
      //setting value of image here 
      this.image!.setValue(d);
  
       console.log ("key "+ d);
      } )
  }

  readFile(file:File,subscriber:Subscriber<any>){
    const filereader=new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload=() =>{
      subscriber.next(filereader.result);
      subscriber.complete();
    }

    filereader.onerror=() =>{
      subscriber.error();
      subscriber.complete();
    }
  }

}

