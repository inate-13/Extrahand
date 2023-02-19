package com.niit.extrahand.servicesprovidesservices.repository;
import com.niit.extrahand.servicesprovidesservices.model.ServiceProvider;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProvidedServicesRepository extends MongoRepository<ServiceProvider, Integer> {
    //custom query

    @Query("{'vendorEmailId':?0}")
    public abstract List<ServiceProvider> getServiceProviderByEmail(String Email);

    @Query(value = "{'_id':?0}",delete = true)
    public abstract void DeleteServiceProviderById(int Id);

    @Query(value = "{'_id':?0}")
    public abstract ServiceProvider GetServiceProviderByCustomId(int Id);
    @Query(value = "{'_id':?0}")
    List<ServiceProvider> findServiceProviderByServiceName(String serviceName);

    @Query(value = "{'address.pincode':?0 'serviceName':?1 }")
    public abstract List<ServiceProvider> GetServiceByPincodeForUserUi(String pincode,String ServiceName);
}

