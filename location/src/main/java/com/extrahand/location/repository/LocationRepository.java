package com.extrahand.location.repository;

import com.extrahand.location.model.Location;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends MongoRepository<Location,Long> {
    Location findLocationByUserIdAndVendorId(String userId, String vendorId);
}
