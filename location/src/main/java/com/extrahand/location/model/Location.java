package com.extrahand.location.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Location {
    @Id
    private long locationId;
    private String userId;
    private String vendorId;
    private double latitude;
    private double longitude;
}
