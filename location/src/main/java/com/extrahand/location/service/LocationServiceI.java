package com.extrahand.location.service;

import com.extrahand.location.model.Location;

public interface LocationServiceI {
    public Location findLocationByUserIdAndVendorId(String userId,String vendorId);
    public boolean deleteLocationByUserIdAndVendorId(String userId,String vendorId);
    public Location updateLocation(String userId, String vendorId,double latitude,double longitude) throws Exception;
    public Location createLocation(String userId,String vendorId);
}
