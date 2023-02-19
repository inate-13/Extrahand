package com.example.vendorsuggestionservice.services;
import com.example.vendorsuggestionservice.exception.VendorAlreadyExistException;
import com.example.vendorsuggestionservice.exception.VendorNotFoundException;
import com.example.vendorsuggestionservice.model.Location;
import com.example.vendorsuggestionservice.model.Vendor;
import com.example.vendorsuggestionservice.repository.LocationRepository;
import com.example.vendorsuggestionservice.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class VendorServiceImpl implements IVendorService {

    private VendorRepository vendorRepository;
    private LocationRepository locationRepository;



    @Autowired
    public VendorServiceImpl(VendorRepository vendorRepository, LocationRepository locationRepository) {
        this.vendorRepository = vendorRepository;
        this.locationRepository = locationRepository;
    }


    //to add new vendor
    @Override
    public String addNewVendor(Vendor vendor){
        if(vendorRepository.findByVendorEmailId(vendor.getVendorEmailId()).isEmpty()){
            vendor.setServiceId(UUID.randomUUID().toString());
            vendorRepository.save(vendor);
            System.out.println("vendor saved sucessfully");
            createVLRelation(vendor.getServiceId(),vendor.getDistrict(),vendor.getPincode());
            return "vendor saved";
        }
        else{
            System.out.println(vendorRepository.findByVendorEmailId(vendor.getVendorEmailId()));
            List<Vendor> vendorList = vendorRepository.findByVendorEmailId(vendor.getVendorEmailId());
            for(Vendor v:vendorList){
                System.out.println("for loop called");
                v.setVendorName(vendor.getVendorName()); v.setPhoneNo(vendor.getPhoneNo());
                 v.setServiceCatogries(vendor.getServiceCatogries());
                v.setDescription(vendor.getDescription()); v.setWorkShopName(vendor.getWorkShopName());
                v.setDoorNo(vendor.getDoorNo()); v.setAddressLine(vendor.getAddressLine());
                v.setDistrict(vendor.getDistrict());
                v.setState(vendor.getState());v.setCountry(vendor.getCountry());
                if(v.getPincode()!=vendor.getPincode()){
                    System.out.println("mincode miss matched");
                    vendorRepository.deleteRelationship(v.getServiceId());
                    v.setPincode(vendor.getPincode());
                    vendorRepository.save(v);
                    createVLRelation(v.getServiceId(),v.getDistrict(),v.getPincode());
                }
               else{
                    System.out.println("profile updated");
                    vendorRepository.save(v);
                }
            }

            return "Vendor Updated";

        }
    }


    //    to suggest vendor by service and location
    @Override
    public List<Vendor> suggestVendorByServiceAndCity(String serviceCategory, String district) {
        ArrayList<Vendor> vendorList = (ArrayList<Vendor>) vendorRepository.findByVendorProfession(serviceCategory);
        ArrayList<Vendor> shortedList = (ArrayList<Vendor>) vendorList.stream().filter(v -> v.getDistrict().equalsIgnoreCase(district)).collect(Collectors.toList());
        return shortedList;
    }


    //    to get all vendors
    @Override
    public List<Vendor> getAllVendors() {
        return  vendorRepository.findAll();
    }


    //    to delete vendor based on ID
    @Override
    public Boolean deleteById(String id) throws VendorNotFoundException {
        if(vendorRepository.findById(id).isPresent()) {
            vendorRepository.deleteById(id);
            return true;
        }
        else
            return false;
    }


    //   to create relation between vendorNode and locationNode
    @Override
    public String createVLRelation( String serviceId,String district, int pincode) {
        System.out.println("relation called");
        List<Location> locations=locationRepository.findByPincode(pincode);
        if(locations.size()==0){
            Location locationNode=new Location();
            locationNode.setDistrict(district);
            locationNode.setPincode(pincode);
            locationRepository.save(locationNode);
        }
        vendorRepository.createVendorLocationRelationship(serviceId,pincode);
        return "Relation Created ";
    }


    //  to search vendor based on pincode and profession
    @Override
        public List<Vendor> SuggestVendorsByServiceAndPincode(String serviceName,int pincode) {
            if(vendorRepository.findByPincode(pincode).isEmpty()){
                System.out.println("No vendors available at that pincode");
                return new ArrayList<>();
            }
            else{
                List<Vendor> vendorList= vendorRepository.findByPincode(pincode);
                List<Vendor> shortedList=vendorList.stream().filter(v->v.getServiceName().equalsIgnoreCase(serviceName)).collect(Collectors.toList());
                return shortedList;
            }
        }


    // to get all vendors based on pincode
    @Override
    public List<Vendor> findVendorByPincode(int pincode) throws VendorNotFoundException {
        if(vendorRepository.findByPincode(pincode).isEmpty()){
            System.out.println("No vendors available at that pincode");
            return new ArrayList<>();
        }
        else{
            List<Vendor> vendorList= vendorRepository.findByPincode(pincode);
            List<Vendor> shortedList= vendorList.stream().filter(v->!v.getServiceName().equals("NA")).collect(Collectors.toList());
            return shortedList;
        }
    }


    //     to get all vendors based on location
    @Override
    public List<Vendor> findVendorByCity(String district) throws VendorNotFoundException {
        if(vendorRepository.findByVendorLocation(district).isEmpty()){
            throw new VendorNotFoundException();
        }
        else{
            return   vendorRepository.findByVendorLocation(district);
        }
    }




    @Override
    public Boolean addNewServiceToVendor(String emailId, Vendor vendorDetails) throws VendorAlreadyExistException {
        if(vendorRepository.findByVendorEmailId(emailId)==null){
            return false;
        }
        else{
         List<Vendor> vendorList =  vendorRepository.findByVendorEmailId(emailId);
         List<Vendor> shortedList = vendorList.stream().filter(v->v.getServiceName().equalsIgnoreCase(vendorDetails.getServiceName())).collect(Collectors.toList());

          if(shortedList.size()==0){
              Vendor vendor= vendorRepository.findByVendorEmailId(vendorDetails.getVendorEmailId()).get(0);
              vendor.setServiceId(vendorDetails.getServiceId());
              vendor.setServiceCatogries(vendorDetails.getServiceCatogries());
              vendor.setServiceName(vendorDetails.getServiceName());
              vendor.setServiceDuration(vendorDetails.getServiceDuration());
              vendor.setCost(vendorDetails.getCost());
              vendor.setDescription(vendorDetails.getDescription());
              vendor.setServiceImage(vendorDetails.getServiceImage());
              vendorRepository.save(vendor);
              createVLRelation(vendor.getServiceId(),vendor.getDistrict(),vendor.getPincode());
              return true;

          }
        }
        throw new VendorAlreadyExistException();
     }


    @Override
    public Boolean updateVendorDetails(String emailId, Vendor vendorDetails) {
        List<Vendor>vendorList=  vendorRepository.findByVendorEmailId(emailId);
        List<Vendor> vendor = vendorList.stream().filter(v->v.getServiceName().equalsIgnoreCase(vendorDetails.getServiceName())).collect(Collectors.toList());
        vendor.get(0).setServiceCatogries(vendorDetails.getServiceCatogries());
        vendor.get(0).setServiceDuration(vendorDetails.getServiceDuration());
        vendor.get(0).setCost(vendorDetails.getCost());
        vendor.get(0).setDescription(vendorDetails.getDescription());
        vendor.get(0).setServiceImage(vendorDetails.getServiceImage());
        vendorRepository.save(vendor.get(0));
        return true;
    }

    @Override
    public List<Vendor> getVendorsByServiceName(String serviceName){
        List<Vendor> vendorList=vendorRepository.findByVendorProfession(serviceName);
        return vendorList;
    }

    @Override
    public Boolean deleteVendorService(String emailId, String serviceName) {
        List<Vendor>vendorList=  vendorRepository.findByVendorEmailId(emailId);
        List<Vendor> vendorToDelete=vendorList.stream().filter(v->String.valueOf(v.getServiceName()).equals(serviceName)).collect(Collectors.toList());
        vendorRepository.deleteById(vendorToDelete.get(0).getServiceId());
        return true;
    }
}

