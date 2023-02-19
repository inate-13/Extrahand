import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'app/user-login-registration-ui/login-registration-services/login.service';
import { LocationService } from 'app/location-tracking/service/location.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private config:MatSnackBarConfig | undefined;
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isLoggedIn!:boolean;

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private observer:BreakpointObserver,
    private _snackBar: MatSnackBar,public translate:TranslateService, private loginService:LoginService,
    private locationService:LocationService) {
        translate.addLangs(['eng','hin']);
        translate.setDefaultLang('eng');
        const browserLang= translate.getBrowserLang();
        this.config=new MatSnackBarConfig();
        this.config.duration=1000;
        translate.use(browserLang?.match(/eng|hin/)?browserLang:'eng');
  }

  ngOnInit(): void {
    this.loginCheck();
  }

  openSnackBar() {
    this._snackBar.open('Booking History', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }

  public open(message:string, duration?: number,action?:string){
    // this.config=duration?Object.assign(this.config,{'duration':duration}):this.config;
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

  //to send data to suggestion
  setService(Service:any){
    this._snackBar.open("",Service,this.config);
    //alert(Service)
  }
  
  
  getVendors1(){}
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // images = [944, 1011, 984].map((n) => `/assets/carousel/pexels-christina-morillo-1181352.jpg`);

  loginCheck(){
    if(localStorage.getItem('jwt')){
      this.isLoggedIn=true;
    }
  }

  logout(){
    localStorage.clear();
    this.isLoggedIn=false;
    this.router.navigate(['/']).then(()=>{window.location.reload()});
  }

  op() {
  }
    
  login(){
    this.router.navigate(['/login']);
  }

  suggestion(){
    this.router.navigate(['/suggest']);
  }

  update(){
    this.router.navigate(['/update'])
  }

  vendorUpdate(){
    this.router.navigate(['/vendor-update'])
  }

  openChatBox(){
    this.router.navigate(['/chat'])
  }

  home(){
    this.router.navigate(['']).then(()=>window.location.reload());
  }

  openBookingHistory(){
    this.openSnackBar();
  }

  openComplaintComponent(){
    this.router.navigate(['/complaint'])
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

  chat(){
    this.router.navigate(['/chat']);
  }

  register(){
    this.router.navigate(['/registeration'])
  }

  english(){}
  hindi(){}
}
