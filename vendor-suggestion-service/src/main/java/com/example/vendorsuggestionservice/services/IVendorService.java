package com.example.vendorsuggestionservice.services;
import com.example.vendorsuggestionservice.exception.VendorAlreadyExistException;
import com.example.vendorsuggestionservice.exception.VendorNotFoundException;
import com.example.vendorsuggestionservice.model.Location;
import com.example.vendorsuggestionservice.model.Vendor;
import java.util.List;


public interface IVendorService {
    public String addNewVendor(Vendor vendor);

    public List<Vendor> suggestVendorByServiceAndCity(String serviceCategory, String district);

    public List<Vendor> getAllVendors();

    public Boolean deleteById(String id) throws VendorNotFoundException;

    public String createVLRelation(String serviceId, String district, int pincode);

    public List<Vendor> findVendorByCity(String district) throws VendorNotFoundException;

    public List<Vendor> SuggestVendorsByServiceAndPincode(String profession, int pincode);

    public List<Vendor> findVendorByPincode(int pincode) throws VendorNotFoundException;

    public Boolean addNewServiceToVendor(String emailId,Vendor vendorDetails) throws VendorAlreadyExistException;

    public Boolean updateVendorDetails(String emailId,Vendor vendorDetails);

    public Boolean deleteVendorService(String emailId,String serviceName);

    public List<Vendor> getVendorsByServiceName(String serviceName);


}