package com.example.userregistrationservice.rabbitmq;
import com.example.userregistrationservice.model.*;
import com.example.userregistrationservice.model.Address;
import com.example.userregistrationservice.model.Experience;
import com.example.userregistrationservice.model.Gender;
import com.example.userregistrationservice.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Transient;

import java.util.Date;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class RegisterUser {
    private String emailId;
    private String password;
    private String confirmPassword;
    private String firstName;
    private String lastName;
    private long mobileNo;
    private Address address;
    private Role role;
    private Gender gender;
    private String image;
    private Experience experience;
    private WorkShopAddress workShopAddress;
    private int age;
    private Date dob;
}
