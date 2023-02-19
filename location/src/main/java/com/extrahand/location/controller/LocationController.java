package com.extrahand.location.controller;

import com.extrahand.location.model.Location;
import com.extrahand.location.service.LocationServiceI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/extra-hand/location")
public class LocationController {
    @Autowired
    private LocationServiceI locationServiceI;

    @GetMapping("/{userId}/{vendorId}")
    public ResponseEntity<?> getVendorLiveLocation(@PathVariable String userId,@PathVariable String vendorId){
        System.out.println("get method called");
        return new ResponseEntity<>(locationServiceI.findLocationByUserIdAndVendorId(userId, vendorId), HttpStatus.OK);
    }

    @PutMapping("/{userId}/{vendorId}/{latitude}/{longitude}")
    public ResponseEntity<?> updateVendorLiveLocation(@PathVariable String userId, @PathVariable String vendorId,@PathVariable double latitude,@PathVariable double longitude) throws Exception {
        return new ResponseEntity<>(locationServiceI.updateLocation(userId,vendorId,latitude,longitude), HttpStatus.OK);
    }

    @PostMapping("/{userId}/{vendorId}")
    public ResponseEntity<?> createLocation(@PathVariable String userId, @PathVariable String vendorId){
        return new ResponseEntity<>(locationServiceI.createLocation(userId, vendorId), HttpStatus.OK);
    }

    @DeleteMapping("/{userId}/{vendorId}")
    public ResponseEntity<?> deleteLocation(@PathVariable String userId, @PathVariable String vendorId){
        return new ResponseEntity<>(locationServiceI.deleteLocationByUserIdAndVendorId(userId, vendorId), HttpStatus.OK);
    }
}
