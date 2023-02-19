package com.example.userregistrationservice.service;

import com.example.userregistrationservice.exception.UserAlreadyExistingException;
import com.example.userregistrationservice.exception.UserNotFoundException;
import com.example.userregistrationservice.model.Registration;
import com.example.userregistrationservice.model.Role;
import com.example.userregistrationservice.model.WorkShopAddress;
import com.example.userregistrationservice.rabbitmq.RegisterUser;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface RegistrationService {
    public abstract Registration addUser(RegisterUser registration) throws UserAlreadyExistingException, IOException;

    public abstract Registration updateUser(Registration registration) throws UserNotFoundException;

    public abstract List<Registration> getAllUser();

    public abstract Registration getById(String emailId);

    public abstract Registration deleteById(String emailId);
    public abstract Registration getVendorById(String emailId);
    WorkShopAddress getVendorLocationByEmail(String email);
}
