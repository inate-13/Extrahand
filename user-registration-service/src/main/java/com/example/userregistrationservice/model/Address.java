package com.example.userregistrationservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Address {

    private String doorNo,buildingName,area,city;
    private String pinCode;
    private String landMark;
    private String country;
    private double latitude;
    private double longitude;

}
