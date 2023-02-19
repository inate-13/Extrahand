package com.example.vendorsuggestionservice.controller;

import com.example.vendorsuggestionservice.exception.VendorAlreadyExistException;
import com.example.vendorsuggestionservice.exception.VendorNotFoundException;
import com.example.vendorsuggestionservice.model.Vendor;
import com.example.vendorsuggestionservice.services.IVendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

//http://localhost:8888/suggest/v1/add
//http://localhost:8888/suggest/v1/all
//http://localhost:8888/suggest/v1/vendor/profession/city
//http://localhost:9999/suggest/v1/vendor/plumber/vzm
//http://localhost:9999/suggest/v1/profession/pincode
//http://localhost:9999/suggest/v1/city
//http://localhost:9999/suggest/v1/all/pincode

@RestController
@RequestMapping("/suggest/v1")
public class VendorController {

    @Autowired
    private IVendorService iVendorService;

//    to add new vendor
    @PostMapping("/add")
    public ResponseEntity<?> addNewVendor(@RequestBody Vendor vendor){
        vendor.setServiceId(UUID.randomUUID().toString());
        return new ResponseEntity<>(iVendorService.addNewVendor(vendor), HttpStatus.OK);
    }

//    to get all vendors based on profession and city
    @GetMapping("/vendor/{profession}/{city}")
    public ResponseEntity<?> suggestVendorByProfessionAndCity(@PathVariable String serviceCategory, @PathVariable String city){
        return new ResponseEntity<>(iVendorService.suggestVendorByServiceAndCity(serviceCategory,city),HttpStatus.OK);
    }

//    to get all vendors
    @GetMapping("/all")
    public ResponseEntity<?> getAllVendors(){
       return new ResponseEntity<>(iVendorService.getAllVendors(),HttpStatus.OK);
    }

//    to get vendors based on profession and pincode
    @GetMapping("/{serviceName}/{pincode}")
    public ResponseEntity<?> getAllVendorsByProfessionAndPincode(@PathVariable String serviceName, @PathVariable int pincode){
         return new ResponseEntity<>(iVendorService.SuggestVendorsByServiceAndPincode(serviceName,pincode),HttpStatus.OK);
    }

    //    to get all vendors based on location
    @GetMapping("/{city}")
    public ResponseEntity<?> getAllVendorsByLocation(@PathVariable String city) throws VendorNotFoundException {
        return new ResponseEntity<>(iVendorService.findVendorByCity(city),HttpStatus.OK);
    }

    //    to get all vendors based on  pincode
    @GetMapping("/pin/{pincode}")
    public ResponseEntity<?> getAllVendorsByPincode(@PathVariable int pincode) throws VendorNotFoundException {

        return new ResponseEntity<>(iVendorService.findVendorByPincode(pincode),HttpStatus.OK);
    }

    @GetMapping("/serviceName/{serviceName}")
    public ResponseEntity<?> getAllVendorsByServiceName(@PathVariable String serviceName){
        return new ResponseEntity<>(iVendorService.getVendorsByServiceName(serviceName),HttpStatus.OK);
    }

//    create new service to vendor
    @PostMapping("/addNewService/{emailId}")
    public ResponseEntity<?> postNewServiceOfVendor(@PathVariable String emailId, @RequestBody Vendor vendorDetails) throws VendorAlreadyExistException {
        vendorDetails.setServiceId(UUID.randomUUID().toString());
        return new ResponseEntity<>(iVendorService.addNewServiceToVendor(emailId,vendorDetails),HttpStatus.OK);
    }

//    to delete vendor
    @DeleteMapping("/id/{id}")
    public ResponseEntity<?> deleteById(@PathVariable String id) throws VendorNotFoundException {
       return new ResponseEntity<>(iVendorService.deleteById(id),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{emailId}/{serviceName}")
    public  ResponseEntity<?> deleteByemailIdAndServiceName(@PathVariable String emailId,@PathVariable String serviceName){
        return new ResponseEntity<>(iVendorService.deleteVendorService(emailId,serviceName),HttpStatus.OK);
    }

    @PutMapping("/update/{emailId}")
    public ResponseEntity<?> updateVendorServiceDetails(@PathVariable String emailId, @RequestBody Vendor vendor){
        return new ResponseEntity<>(iVendorService.updateVendorDetails(emailId,vendor),HttpStatus.OK);
    }

}
