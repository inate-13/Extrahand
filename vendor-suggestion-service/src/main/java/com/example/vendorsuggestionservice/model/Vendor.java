package com.example.vendorsuggestionservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.NodeEntity;
import org.springframework.data.neo4j.core.schema.Id;

import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@NodeEntity("Vendor")
public class Vendor {

    @Id
    private String serviceId;
    private String vendorEmailId;
    private String vendorName;
    private long phoneNo;
    private int experience;
    private String otherServices;
    private String serviceCatogries;
    private String serviceName;
    private String serviceDuration;
    private String description;
    private double cost;
    private String serviceImage;
//    *********************************************

    private String workShopName;
    private String doorNo;
    private String addressLine;
    private String district;
    private int pincode;
    private String state;
    private String country;
  }
