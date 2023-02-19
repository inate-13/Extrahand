package com.niit.extrahand.servicesprovidesservices.service;

import com.niit.extrahand.servicesprovidesservices.exceptions.AllreadyExistsException;
import com.niit.extrahand.servicesprovidesservices.exceptions.ServiceNotFoundException;
import com.niit.extrahand.servicesprovidesservices.model.ServiceProvider;
import com.niit.extrahand.servicesprovidesservices.repository.ProvidedServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceProvidedImpl implements ServiceProvidedService {

    @Autowired
    private ProvidedServicesRepository providedServicesRepository;

    @Autowired
    private SequenceGenerator sequenceGenerator;



    @Override
    public ServiceProvider addServiceProvider(ServiceProvider serviceProvider) throws AllreadyExistsException, IOException {

        serviceProvider.setServiceId(sequenceGenerator.getSequNum(serviceProvider.SEQUENECE_NAME));
        return providedServicesRepository.insert(serviceProvider);
    }

    @Override
    public Boolean deleteServiceProvider(int ServiceId) {
        if (providedServicesRepository.findById(ServiceId).isPresent()) {
            providedServicesRepository.deleteById(ServiceId);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public ServiceProvider updateServiceProvider(int ServiceId, ServiceProvider serviceProvider) throws ServiceNotFoundException, IOException {
        if (providedServicesRepository.existsById(ServiceId)) {
            return providedServicesRepository.save(serviceProvider);
        } else {
            throw new ServiceNotFoundException();
        }
    }

    @Override
    public List<ServiceProvider> getAllServicesProvider() {
        return providedServicesRepository.findAll();
    }

    @Override
    public ServiceProvider getServiceProviderByID(int ServiceId) {
        return providedServicesRepository.findById(ServiceId).get();
    }
    //Custom

    @Override
    public List<ServiceProvider> getServiceProviderByEmail(String Email) {
        return providedServicesRepository.getServiceProviderByEmail(Email);
    }

    @Override
    public void DeleteServiceProviderById(int ServiceId) {
        providedServicesRepository.DeleteServiceProviderById(ServiceId);
    }

    @Override
    public ServiceProvider GetServiceProviderByCustomId(int Id) {
        return providedServicesRepository.GetServiceProviderByCustomId(Id);
    }

    @Override
    public List<ServiceProvider> getServiceProviderByServiceName(String serviceName) {
        return providedServicesRepository.findAll().stream().filter(s->s.getServiceName().startsWith(serviceName)).collect(Collectors.toList());
    }

    //useerView
    @Override
    public List<ServiceProvider> GetServiceByPincodeForUserUi(String pincode,String ServiceName) {
        return providedServicesRepository.GetServiceByPincodeForUserUi(pincode,ServiceName);
    }


}
