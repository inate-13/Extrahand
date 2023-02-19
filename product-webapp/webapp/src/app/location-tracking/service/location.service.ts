import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

declare const L:any;

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string=`${environment.API_URL}/extra-hand/location/`;
  registrationUrl=`${environment.API_URL}/extra-hand/e1/`;

  liveLocation=false;
  workShopLocation=false;
  vendorTracking=false;
  addressTracking=false;
  vendorEmail='';
  userEmail="";

  createLocation(user:any,vendor:any){
    return this.httpClient.post(this.baseUrl+user+'/'+vendor,null);
  }

  getUserAddressCoords(user:any){
    return this.httpClient.get(this.registrationUrl+"get-address/"+user);
  }

  getVendorLiveCoords(user:any,vendor:any){
    return this.httpClient.get(this.baseUrl+user+'/'+vendor);
  }
  
  updateVendorCoords(user:any,vendor:any,latitude:any,longitude:any){
    return this.httpClient.put(this.baseUrl+user+'/'+vendor+"/"+latitude+'/'+longitude,null);
  }

  deleteLocation(user:any,vendor:any){
    return this.httpClient.delete(this.baseUrl+user+'/'+vendor);
  }

  getVendorWorkShopCoords(email:any){
    return this.httpClient.get(this.registrationUrl+'vendor-location/'+email);
  }

  enableLiveLocationFlag(){
    this.liveLocation=true;
    this.workShopLocation=false;
    this.vendorTracking=false;
    this.addressTracking=false;
  }

  enableWorkShopLocationFlag(){
    this.liveLocation=false;
    this.workShopLocation=true;
    this.vendorTracking=false;
    this.addressTracking=false;
  }

  enableVendorTrackingFlag(){
    this.liveLocation=false;
    this.workShopLocation=false;
    this.vendorTracking=true;
    this.addressTracking=false;
  }

  enableAddressTackingFlag(){
    this.liveLocation=false;
    this.workShopLocation=false;
    this.vendorTracking=false;
    this.addressTracking=true;
  }

  disableAllFlags(){
    this.liveLocation=false;
    this.workShopLocation=false;
    this.vendorTracking=false;
    this.addressTracking=false;
  }
}
