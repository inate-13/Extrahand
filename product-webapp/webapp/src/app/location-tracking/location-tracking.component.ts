import { Component, OnInit } from '@angular/core';
import { timeInterval, timeout, windowToggle } from 'rxjs';
import { LocationService } from './service/location.service';

declare const L:any;

@Component({
  selector: 'app-location-tracking',
  templateUrl: './location-tracking.component.html',
  styleUrls: ['./location-tracking.component.css']
})
export class LocationTrackingComponent implements OnInit {

  title = 'locationApp';
  role:string="USER";
  userEmail:any='';
  vendorEmail:any="";
  workShopLat=0;
  workShopLong=0;
  userLatitude=0;
  userLongtude=0;
  vendorLatitude=0;
  vendorLongtude=0;
  // latLong:any;

  constructor(private locationService:LocationService){
    
  }

  ngOnInit() {
    if(this.locationService.liveLocation){
      this.locationTrack();
    }
    else if(this.locationService.workShopLocation){
      this.vendorEmail=this.locationService.vendorEmail;
      console.log("Workshop location is called");
      this.getVendorWorkShopLocation(this.vendorEmail);
    }
    else if(this.locationService.vendorTracking){
      this.vendorEmail=this.locationService.vendorEmail;
      this.userEmail=localStorage.getItem('email');
      console.log("Vendor location tracking is called");
      this.getVendorCoords();
      setInterval(()=>{
        this.getVendorCoords();
      },5000)
      this.locationTrackForUser();
    }
    else if(this.locationService.addressTracking){
      this.vendorEmail=localStorage.getItem('email');
      this.userEmail=this.locationService.userEmail;
      console.log("User location tracking is called");
      this.updateVendorCoordsInDb();
      setInterval(()=>{
        this.updateVendorCoordsInDb();
      },5000);
      this.getUserAddressCoords();
      this.locationTrackForVendor();
    }
    else{
      this.locationTrack();
    }
  }

// for tracking vendors live location
  locationTrackForUser(){
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    this.locationService.getUserAddressCoords(this.userEmail).subscribe(
      respo=>{
        let response:any=respo;
        console.log(response.latitude);
        console.log(response.longitude);
        // this.latLong = [response.latitude, response.longitude];
        const latLong = [response.latitude, response.longitude];
        let mymap = L.map('map').setView(latLong, 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mymap);
        let marker = L.marker(latLong).addTo(mymap),
        vendorMarker = L.marker([this.vendorLatitude, this.vendorLongtude]).addTo(mymap).bindPopup('Vendor').openPopup();
        var sourceDestinationMarkers = L.layerGroup([marker,vendorMarker]).addTo(mymap);
        marker.bindPopup('<p>You are here!</p>').openPopup();
        vendorMarker.bindPopup('<p>Vendor</p>').openPopup();
        let popup = L.popup().setLatLng(latLong).setContent("You're here!").openOn(mymap);
      }
    )
    
  }

  // clearing map if both coords matches
  watchPositionOfUser(){
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === this.vendorLatitude) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

  // for retrieving the live coords of vendor
  getVendorCoords(){
    this.locationService.getVendorLiveCoords(this.userEmail,this.vendorEmail).subscribe(
      resp=>{
        let response:any=resp;
        this.vendorLatitude=response.latitude;
        this.vendorLongtude=response.longitude;
        console.log(
          `Vlat: ${this.vendorLatitude}, Vlon: ${this.vendorLongtude}`
        );
      }
    )
  }

  // tracking user address for vendor
  locationTrackForVendor(){
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 15);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mymap);

      let marker = L.marker(latLong).addTo(mymap),
      userAddressMarker = L.marker([this.userLatitude, this.userLongtude]).bindPopup('Destination').openPopup();
      var sourceuserAddressMarkers = L.layerGroup([marker,userAddressMarker]).addTo(mymap);

      marker.bindPopup('<p>You are here!</p>').openPopup();
      userAddressMarker.bindPopup('<p>Destination</p>')

      let popup = L.popup().setLatLng(latLong).setContent("You're here!").openOn(mymap);
    });
  }

  //  clear if both coords matches
  watchPositionOfVendor() {
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === this.userLatitude) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

  // retrieving user address coords
  getUserAddressCoords(){
    this.locationService.getUserAddressCoords(this.userEmail).subscribe(
      resp=>{
        let response:any=resp;
        console.log(resp);
        this.userLatitude=response.latitude;
        this.userLongtude=response.longitude;
      }
    )
  }

  // Update vendor coords in DB
  updateVendorCoordsInDb(){
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      let vendorLat=position.coords.latitude;
      let vendorLong=position.coords.longitude;
      this.locationService.updateVendorCoords(this.userEmail,this.vendorEmail,vendorLat,vendorLong).subscribe(
        res=>{
          console.log(res);
        }
      )
    });
  }


// retrieving the vendor workshop coords
  getVendorWorkShopLocation(vendorEmail:string){
    this.locationService.getVendorWorkShopCoords(vendorEmail).subscribe(
      resp=>{
        console.log(resp);
        let workShopAddress:any=resp;
        this.workShopLat=workShopAddress.latitude;
        this.workShopLong=workShopAddress.longitude;
        this.trackWorkShopLocation(this.workShopLat,this.workShopLong);
      }
    )
  }

// tracking workshop location
  trackWorkShopLocation(workShopLat:number,workShopLong:number){
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 15);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mymap);

      let marker = L.marker(latLong).addTo(mymap),
      workShopMarker = L.marker([workShopLat, workShopLong]).addTo(mymap).bindPopup('WorkShop').openPopup();

      marker.bindPopup('<p>You are here!</p>').openPopup();
      workShopMarker.bindPopup('<p>WorkShop</p>').openPopup();

      let popup = L.popup().setLatLng(latLong).setContent("You're here!").openOn(mymap);
      let popup1 = L.popup().setLatLng([workShopLat, workShopLong]).setContent("Vendor").openOn(mymap);
    });
  }

  
// common location track
  locationTrack(){
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 15);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mymap);

      let marker = L.marker(latLong).addTo(mymap);

      marker.bindPopup('<p>You are here!</p>').openPopup();

      let popup = L.popup().setLatLng(latLong).setContent("You're here!").openOn(mymap);
    },
    (err) => {
      alert("Some error has occurred!");
    },
    {
      enableHighAccuracy:true
    });
  }


  watchPosition(){
    navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

}