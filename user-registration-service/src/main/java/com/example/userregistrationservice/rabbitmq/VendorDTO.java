package com.example.userregistrationservice.rabbitmq;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class VendorDTO {

    private String vendorEmailId;
    private String vendorName;
    private long phoneNo;
    private int experience;
//    private String otherServices;
    private String serviceCatogries;
//    private String serviceName;
//    private String serviceDuration;
    private String description;
//    private double cost;
    private String serviceImage;
    private String workShopName;
    private String doorNo;
    private String addressLine;
    private String district;
    private int pincode;
    private String state;
    private String country;
}
