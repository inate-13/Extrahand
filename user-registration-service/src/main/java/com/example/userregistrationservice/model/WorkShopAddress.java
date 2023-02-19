package com.example.userregistrationservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkShopAddress {
    private String workShopName;
    private String doorNo;
    private String addressLine;
    private String district;
    private int pincode;
    private String State;
    private String Country;
    private double latitude;
    private double longitude;
}
