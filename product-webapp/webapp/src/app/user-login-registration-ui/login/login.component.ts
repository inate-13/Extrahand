import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { VendorSuggestionRegService } from '../../suggestions/services/vendor-suggestion-reg.service';
import { LoginService } from '../login-registration-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  durationInSeconds=3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  constructor(private loginService:LoginService,private vendorSuggestionService: VendorSuggestionRegService,
  
  private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  openSnackBar() {
    this._snackBar.open('Login Successfull!', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,
      
      
    });
  }
  openSnackBars(emailId:any) {
    this._snackBar.open(emailId,'', {
     
      horizontalPosition: this.horizontalPosition,

       duration: this.durationInSeconds * 1000,
      
    });
  }
  
  loginForm= new FormGroup({
    "emailId": new FormControl(''),
    "password": new FormControl('')
  });

  respdata:any;
  respdata2:any;
  email:any;
  name:any;

  loginCheck(){
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(
      response=>{
        this.respdata=response;
        console.log(this.respdata);
        localStorage.setItem('jwt',this.respdata.token);
        localStorage.setItem('email',this.loginForm.value.emailId!);
        this.openSnackBar();
        this.loginService.isLoggedIn=true;
        let email=localStorage.getItem('email');
        this.loginService.getData(email).subscribe(
          res=>{
            this.respdata2=res;
            localStorage.setItem('role',this.respdata2.role);
            localStorage.setItem('name',this.respdata2.firstName);
            this.name=this.respdata2.firstName;
            this.router.navigate(['/']);//
            if(localStorage.getItem('role')=="CONSUMER"){
              if(this.name==null){
                this.router.navigate(['/update']).then(
                  ()=>{
                    window.location.reload();
                  }
                );
              }
              else{
                this.router.navigate(['/']).then(
                  ()=>{
                    window.location.reload();
                  }
                );
              }
            }
            else{
              if(this.name==null){
                this.router.navigate(['/vendor-update']).then(
                  ()=>{
                    window.location.reload();
                  }
                );
              }
              else{
                this.router.navigate(['/my-services']).then(
                  ()=>{
                    window.location.reload();
                  }
                );
              }
            }
          }
        )
      }
    );
  }
}