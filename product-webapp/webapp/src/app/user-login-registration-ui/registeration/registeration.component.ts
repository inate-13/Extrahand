import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterationService } from '../login-registration-services/registeration.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';


  constructor(private RegisterService:RegisterationService,private _snackBar: MatSnackBar,private router:Router) {}
  openSnackBar() {
    this._snackBar.open('Registered Successfully', 'Close', {
      horizontalPosition: this.horizontalPosition,
     
      
    });
  }

  ngOnInit(): void {
  }

  userForm= new FormGroup({
    "emailId":new FormControl('',[Validators.required,Validators.email]),
    "password":new FormControl('',[Validators.required,Validators.minLength(7)]),
    "confirmPassword":new FormControl('',[Validators.required,Validators.minLength(7)]),
    "role":new FormControl('',[Validators.required])
  });

  register(){
    this.RegisterService.register(this.userForm.value).subscribe(response=>{
      console.log(response);
      // alert("user is registered");
      this.openSnackBar();
      // console.log(this.userForm.value);
      this.router.navigate(['login']);
    });
  }


}
