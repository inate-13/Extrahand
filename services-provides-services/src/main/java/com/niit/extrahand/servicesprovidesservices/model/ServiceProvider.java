package com.niit.extrahand.servicesprovidesservices.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.util.List;


@Document
@NoArgsConstructor
@AllArgsConstructor
@Data

public class ServiceProvider {
    @Transient
    public static final String SEQUENECE_NAME="vendor_serviceprovider";

    @Id
    private int serviceId;
    private String vendorEmailId;
    private String vendorName;
    private long phoneNo;
    private int experience;
    private String otherServices;
    private Address address;
    private ServiceCatogeries serviceCatogries;
    private String serviceName;
    private String serviceDuration;
    private String description;
    private double cost;
    private String serviceImage;
}

