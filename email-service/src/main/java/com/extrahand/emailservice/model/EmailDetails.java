package com.extrahand.emailservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class EmailDetails {
    @Id
    private String bookingId;
    private String userEmailId;
    private String attachment;

//    imported from appointmentService
    private String vendorName;
    private String vendorEmailId;
    private String serviceTitle;
    private String appointmentTime;
    private long VendorphoneNo;
    private int appointmentId;
}
