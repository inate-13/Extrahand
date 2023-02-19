package com.stackroute.appointmentsbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Appointment
{
    @Transient
    public static final String SEQUENECE_NAME="appointment";

    @Id
    private int appointmentId;
//    private String userName;

    private String userEmailId;

    // private LocalDateTime appointmentTime;
    private String appointmentTime;

    private long VendorphoneNo;
private long UserPhoneNo;
    private String serviceTitle;
    //private String description;

    private String status;

    private String serviceId;

    private String vendorName;
    private String userName;

    private String vendorEmailId;
private String area;

}
