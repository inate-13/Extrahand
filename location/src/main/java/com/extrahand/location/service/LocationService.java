package com.extrahand.location.service;

import com.extrahand.location.model.Location;
import com.extrahand.location.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class LocationService implements LocationServiceI{
    @Autowired
    private LocationRepository locationRepository;

    @Override
    public Location findLocationByUserIdAndVendorId(String userId, String vendorId) {
        return locationRepository.findLocationByUserIdAndVendorId(userId, vendorId);
    }

    @Override
    public boolean deleteLocationByUserIdAndVendorId(String userId, String vendorId) {
        locationRepository.deleteById(locationRepository.findLocationByUserIdAndVendorId(userId, vendorId).getLocationId());
        return true;
    }

    @Override
    public Location updateLocation(String userId, String vendorId,double latitude,double longitude) throws Exception {
        if(locationRepository.existsById(locationRepository.findLocationByUserIdAndVendorId(userId, vendorId).getLocationId())){
            Location location=locationRepository.findLocationByUserIdAndVendorId(userId, vendorId);
            location.setLatitude(latitude);
            location.setLongitude(longitude);
            return locationRepository.save(location);
        }
        else {
            throw new Exception("Location is not existed");
        }
    }

    @Override
    public Location createLocation(String userId, String vendorId) {
        if (locationRepository.findLocationByUserIdAndVendorId(userId, vendorId)==null){
            Random random=new Random();
            return locationRepository.insert(new Location(random.nextLong(), userId,vendorId,0,0));
        }
        else{
            return findLocationByUserIdAndVendorId(userId,vendorId);
        }
    }
}