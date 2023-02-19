import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FeedbackBookingDetailsService } from './services/feedback-booking-details.service';
import { FeedbackService } from './services/feedback.service';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  serviceBookingId:any=this.feedBackBook.bookingId;      //below details get it from booking details
  userName:any=this.feedBackBook.userName;
  userEmailId:any=this.feedBackBook.userEmailId;
  suggestionControl= new FormControl('');
  suggestion:any;
  rattingControl= new FormControl('');
  rating:any;


  constructor(private feedbackService:FeedbackService,private _snackBar: MatSnackBar,
    private feedBackBook:FeedbackBookingDetailsService, private router:Router) {
    // this.getUserName();
    // ******************************

    this.suggestionControl.valueChanges.subscribe(
      resp1=>{
        this.suggestion=resp1;
      }) ;

    this.rattingControl.valueChanges.subscribe(
      resp2=>{
        this.rating=resp2;
      })  ;
  }

 


  openSnackBar() {
    this._snackBar.open('feedback submitted successfully!', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,
      //  verticalPosition: this.verticalPosition,
    });
  }
  
  


  ngOnInit(): void {
  }

  open:boolean=true;
  onestar:boolean=false;
  twostar:boolean=false;
  threestar:boolean=false;
  fourstar:boolean=false;
  fivestar:boolean=false;

  openfe(){
    this.open=!this.open;
  }

star(star:any){
  if(star==1)
  {
    this.onestar=true;
    this.twostar=false;
    this.threestar=false;
    this.fourstar=false;
    this.fivestar=false;
    
  }
  else if(star==2)
  {
    this.onestar=false;
    this.twostar=true;
    this.threestar=false;
    this.fourstar=false;
    this.fivestar=false;
  }
  else if(star==3)
  {
    this.onestar=false;
    this.twostar=false;
    this.threestar=true;
    this.fourstar=false;
    this.fivestar=false;
  }
  else if(star==4)
  {
    this.onestar=false;
    this.twostar=false;
    this.threestar=false;
    this.fourstar=true;
    this.fivestar=false;
  }
  else if(star==5)
  {
    this.onestar=false;
    this.twostar=false;
    this.threestar=false;
    this.fourstar=false;
    this.fivestar=true; 
  }
}

getUserName(){
  this.feedBackBook.getName().subscribe(
    res=>{
      let resp:any=res;
      this.userName=resp.firstName;
    })
}




submitFeedback(){
  this.getUserName()

  const feedback={
    "serviceBookingId":this.serviceBookingId,
    "userName":this.userName,
    "userEmailId":this.userEmailId,
    "review":this.rating,
    "suggestion":this.suggestion
  }
  console.log(this.serviceBookingId+"\n"+this.userName+"\n"+this.userEmailId+"\n"+this.rating+"\n"+this.suggestion)
  this.feedbackService.submitFeedback(feedback).subscribe(
    resp=>{
    this.openSnackBar();
     console.log(resp);
     this.suggestionControl.setValue("");
     this.rattingControl.setValue("");
     this.router.navigate(['/']);
    })
}

}
