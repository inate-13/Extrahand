import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate() {
    let role = localStorage.getItem('role');
    if(role=="CONSUMER"){
      return true;
    }
    this.router.navigate(['/my-services'])
    return false;
  }
}
