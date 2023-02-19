package com.niit.extrahand.servicesprovidesservices.controller;



import com.niit.extrahand.servicesprovidesservices.exceptions.AllreadyExistsException;
import com.niit.extrahand.servicesprovidesservices.exceptions.ServiceNotFoundException;
import com.niit.extrahand.servicesprovidesservices.model.ServiceProvider;
import com.niit.extrahand.servicesprovidesservices.service.ServiceProvidedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/extrahand")
public class ProvidedServiceController {

    @Autowired
    private ServiceProvidedService serviceProvidedService;

    //Custom
    @GetMapping("/get-service-provider-By-EmailId/{EmailId}")
    public ResponseEntity<?> getServiceByEmailId(@PathVariable String EmailId)
    {
        return new ResponseEntity<>(serviceProvidedService.getServiceProviderByEmail(EmailId),HttpStatus.OK);
    }

    @DeleteMapping("/Delete-service-provider-By-Id/{ServiceId}")
    @ResponseStatus(value = HttpStatus.OK)
    public void DeleteServiceById(@PathVariable int ServiceId)
    {
        serviceProvidedService.DeleteServiceProviderById(ServiceId);
    }


    @GetMapping("/getbyId/{ServiceId}")
    public ResponseEntity<?> GetbydS(@PathVariable int ServiceId){
            return new ResponseEntity<>(serviceProvidedService.getServiceProviderByID(ServiceId),HttpStatus.OK);
    }

    @PostMapping("/add-service-provider")
    public ResponseEntity<?> addServiceProvider(@RequestBody ServiceProvider serviceProvider) throws IOException, AllreadyExistsException {

        return new ResponseEntity<>(serviceProvidedService.addServiceProvider(serviceProvider),HttpStatus.CREATED);

        }

    @DeleteMapping("/delete-service-provider/{ServiceId}")
    public ResponseEntity <?> deleteService(@PathVariable int ServiceId){
        return new ResponseEntity<>(serviceProvidedService.deleteServiceProvider(ServiceId),HttpStatus.OK);
    }


    @GetMapping("/all-provided-services")
    public ResponseEntity<?> getAllProvidedServices(){
      //  List<ProvidedServices> providedServices = serviceProvidedService.getAllProvidedServices();
        return new ResponseEntity<>(serviceProvidedService.getAllServicesProvider(),HttpStatus.OK);
    }

    @PutMapping("/update-service-provider/{ServiceId}")
    public ResponseEntity<?> updateServiceProvider(@PathVariable int ServiceId,@RequestBody ServiceProvider serviceProvider) throws IOException, ServiceNotFoundException, AllreadyExistsException {
        return new ResponseEntity<>(serviceProvidedService.updateServiceProvider(ServiceId, serviceProvider),HttpStatus.OK);
    }

    @GetMapping("/get-service-provider/{ServiceId}")
        public ResponseEntity <?> getServiceProviderById(@PathVariable int ServiceId){
        return new ResponseEntity<>(serviceProvidedService.getServiceProviderByID(ServiceId),HttpStatus.OK);
    }

    @GetMapping("/get-by-service/{serviceName}")
    public  ResponseEntity<?> getByServiceName(@PathVariable String serviceName){
        return new ResponseEntity<>(serviceProvidedService.getServiceProviderByServiceName(serviceName),HttpStatus.OK);
    }


    //for userview

    @GetMapping("/get-by-pincode-userview/{pincode}/{ServiceName}")
    public ResponseEntity<?> GetByPinCode(@PathVariable String pincode,@PathVariable String ServiceName)
    {
        return new ResponseEntity<>(serviceProvidedService.GetServiceByPincodeForUserUi(pincode,ServiceName),HttpStatus.OK);
    }



}
