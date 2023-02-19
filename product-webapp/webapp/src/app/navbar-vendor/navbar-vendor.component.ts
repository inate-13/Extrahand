import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppointmentserviceService } from 'app/appointment/appointmentservice.service';
import { AppointmentService } from 'app/appointment/service/appointment.service';
import { LocationService } from 'app/location-tracking/service/location.service';

@Component({
  selector: 'app-navbar-vendor',
  templateUrl: './navbar-vendor.component.html',
  styleUrls: ['./navbar-vendor.component.css']
})
export class NavbarVendorComponent implements OnInit {
  private config:MatSnackBarConfig;
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isLoggedIn!:boolean;

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,
    private observer:BreakpointObserver,private _snackBar: MatSnackBar,
    private appointmentService:AppointmentserviceService,
    private locationService:LocationService) {
    this.config=new MatSnackBarConfig();
    this.config.duration=1000;
    this.loginCheck();
    this.GetPanddingAppointMents();  
   }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.open('', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }

  public open(message:string, duration?: number,action?:string){
    this.config=duration?Object.assign(this.config,{'duration':duration}):this.config;
    this._snackBar.open(message,action,this.config);
  }

  ngAfterViewInit(){
    this.observer.observe(['max-width:800px']).subscribe((res) =>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }
      else{
        this.sidenav.mode='side';
        this.sidenav.close();
      }
    })
  }
  
  
  setService(Service:any){
    this._snackBar.open("",Service,this.config);
    //alert(Service)
  }
  

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  //  images = [944, 1011, 984].map((n) => `/assets/carousel/pexels-christina-morillo-1181352.jpg`);

  loginCheck(){
    if(localStorage.getItem('email')){
      this.isLoggedIn=true;
    }
  }

  logout(){
    localStorage.clear();
    this.isLoggedIn=false;
    this.router.navigate(['/']).then(
      ()=>{
        window.location.reload();
        
      }
    )
  }

  locationFlag(){
    this.locationService.disableAllFlags();
    this.locationService.enableLiveLocationFlag();
    this.router.navigate(['/location']).then(
      ()=>{
        window.location.reload;
      }
     )
  }

  home(){
   this.router.navigate(['/my-services']).then(
    ()=>{
      window.location.reload;
    }
   )
  }

  GetVendorEmail=localStorage.getItem('email');
  appointments:any;
  count:any;
  GetPanddingAppointMents(){
   // this.GetVendorEmail=this.appointmentService.GetVendorEmailFromSuggetion;
    console.log(this.GetVendorEmail)
    this.appointmentService.Get_PendingAppoint(this.GetVendorEmail).subscribe(
      res=>{
        console.log(res)
        this.appointments=res;
        console.log(this.appointments)
        console.log(this.appointments.length);
        this.count=this.appointments.length;
        window.location.reload;
      }
    )
  }
  

}
