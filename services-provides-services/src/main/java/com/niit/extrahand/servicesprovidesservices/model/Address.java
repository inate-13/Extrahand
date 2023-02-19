package com.niit.extrahand.servicesprovidesservices.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Address {
    private String workShopName;
    private String doorNo;
    private String addressLine;
    private String district;
    private String pincode;
    private String State;
    private String Country;
}
