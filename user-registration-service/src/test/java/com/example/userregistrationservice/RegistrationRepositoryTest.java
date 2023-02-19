//package com.example.userregistrationservice;
//
//import com.example.userregistrationservice.model.Address;
//import com.example.userregistrationservice.model.Gender;
//import com.example.userregistrationservice.model.Registration;
//import com.example.userregistrationservice.model.Role;
//import com.example.userregistrationservice.repository.RegistrationRepository;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//@ExtendWith(SpringExtension.class)
//@DataMongoTest
//public class RegistrationRepositoryTest {
//    @Autowired
//    private RegistrationRepository registrationRepository;
//
//    private Registration registration;
//    private Gender gender;
//    private Address address;
//    private Role role;
//    private byte[] image;
//
//    @BeforeEach
//    public  void init(){
//        registration=new Registration(20,"kaviya@gmail.com","kaviya","vasudevan",1234567890, new ArrayList<>() ,role,gender,image);
//        address=new Address("78/96","park Avenue","burma","bangalore",456789,"near royal park","India");
//    }
//    @AfterEach
//    public void clean(){
//        registration=null;
//        address=null;
//        role=null;
//        gender=null;
//        image=null;
//        registrationRepository.deleteAll();
//    }
//    @Test
//    public void getAllProducts(){
//        registrationRepository.insert(registration);
//        registration.setUserId((30));
//        registrationRepository.insert(registration);
//        List<Registration> registrations=registrationRepository.findAll();
//        assertEquals(2,registrations.size());
//    }
//
//    @Test
//    public void productToDelete(){
//        registrationRepository.insert(registration);
//        registrationRepository.deleteById(registration.getEmailId());
//        assertEquals(Optional.empty(),registrationRepository.findById((registration.getEmailId())));
//    }
//    @Test
//    public void getProductById(){
//        registrationRepository.findById(registration.getEmailId());
//        assertEquals(Optional.empty(),registrationRepository.findById(registration.getEmailId()));
//    }
//}
