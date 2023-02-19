package com.niit.extrahand.servicesprovidesservices.service;

import com.niit.extrahand.servicesprovidesservices.exceptions.AllreadyExistsException;
import com.niit.extrahand.servicesprovidesservices.exceptions.ServiceNotFoundException;
import com.niit.extrahand.servicesprovidesservices.model.ServiceProvider;

import java.io.IOException;
import java.util.List;

public interface ServiceProvidedService {

   ServiceProvider addServiceProvider(ServiceProvider serviceProvider) throws AllreadyExistsException, IOException;
   Boolean deleteServiceProvider(int SericeId);
   ServiceProvider updateServiceProvider(int ServiceId, ServiceProvider serviceProvider) throws AllreadyExistsException, IOException, ServiceNotFoundException;
    List<ServiceProvider> getAllServicesProvider();
    ServiceProvider getServiceProviderByID(int ServiceId);
    List<ServiceProvider> getServiceProviderByEmail(String Email);
    void DeleteServiceProviderById(int ServiceId);
    ServiceProvider GetServiceProviderByCustomId(int Id);
    List<ServiceProvider> getServiceProviderByServiceName(String serviceName);

    //for userview

    List<ServiceProvider> GetServiceByPincodeForUserUi(String pincode,String ServiceName);
}


