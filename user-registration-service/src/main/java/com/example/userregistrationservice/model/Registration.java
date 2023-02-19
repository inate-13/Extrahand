package com.example.userregistrationservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document
public class Registration {
//    @Transient
//    public static final String SEQUENCE_NAME="user_sequence";
    //private String userId;

    @Id
    private String emailId;
    private String firstName;
    private String lastName;
    private long mobileNo;
    private Address address;
    private Role role;
    private Gender gender;
    private String image;
    private Experience experience;
    private WorkShopAddress workShopAddress;
    private Date dob;
    private int age;

}
