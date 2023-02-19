//package com.example.userregistrationservice;
//
//import com.example.userregistrationservice.exception.UserAlreadyExistingException;
//import com.example.userregistrationservice.exception.UserNotFoundException;
//import com.example.userregistrationservice.model.Address;
//import com.example.userregistrationservice.model.Gender;
//import com.example.userregistrationservice.model.Registration;
//import com.example.userregistrationservice.model.Role;
//import com.example.userregistrationservice.rabbitmq.LoginDTO;
//import com.example.userregistrationservice.rabbitmq.RegisterUser;
//import com.example.userregistrationservice.rabbitmq.Sender;
//import com.example.userregistrationservice.repository.RegistrationRepository;
//
//import com.example.userregistrationservice.service.RegistrationServiceImpl;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//import org.springframework.web.multipart.MultipartFile;
//
//
//import java.awt.*;
//import java.io.IOException;
//import java.util.ArrayList;
//
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertThrows;
//import static org.mockito.Mockito.*;
//import static org.mockito.Mockito.times;
//
//@ExtendWith(SpringExtension.class)
//public class RegistrationServiceTest {
//    @Mock
//    private RegistrationRepository registrationRepository;
//    @Mock
//    private Sender sender;
//
//    @InjectMocks
//    private RegistrationServiceImpl registrationService;
//
//    private Registration registration;
//    private RegisterUser registerUser;
//    private Gender gender;
//    private Address address;
//    private Role role;
//    private byte[] image;
//
//    private MultipartFile file;
//
//
//
//    @BeforeEach
//    public void init() {
//
//        registration=new Registration(10,"kaviya@gmail.com","kaviya","vasudevan",1234567890, new ArrayList<>() ,role,gender,image);
//        address=new Address("78/96","park Avenue","burma","bangalore",456789,"near royal park","India");
//
////        role=Role.CONSUMER;
////         gender=Gender.FEMALE;
//     //   image="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";
//
//
//        registerUser=new RegisterUser(10,"kaviya@gmail.com","ka123","kaviya","vasudevan",1234567890,new ArrayList<>(),role,gender,image);
//        address=new Address("78/96","park Avenue","burma","bangalore",456789,"near royal park","India");
//
//    }
//
//    @AfterEach
//    public void clean() {
//        registration = null;
//        registerUser=null;
//        address = null;
//        role = null;
//        gender = null;
//        image=null;
//    }
//
//    @Test //addProduct() :: success
//    public void addProductSuccess() throws UserAlreadyExistingException, IOException {
//
//       when(registrationRepository.findById(registration.getEmailId())).thenReturn(Optional.ofNullable(null));
//        when(registrationRepository.insert(registration)).thenReturn(registration);
//        //Registration reg=registrationRepository.insert(registration);
//        assertEquals(registration, registrationService.addUser(registerUser,file));
//        verify(registrationRepository, times(1)).findById(registration.getEmailId());
//        verify(registrationRepository, times(1)).insert(registration);
//    }
//
//    @Test //addProduct() :: failure
//    public void addUserFailure() throws UserAlreadyExistingException {
//        when(registrationRepository.findById(registration.getEmailId())).thenReturn(Optional.ofNullable(registration));
//        assertThrows(UserAlreadyExistingException.class, () -> registrationService.addUser(registerUser,file));
//
//        verify(registrationRepository, times(1)).findById(registration.getEmailId());
//        verify(registrationRepository, times(0)).insert(registration);
//    }
//
//    @Test //deleteCustomer :: success
//    public void deleteProductByIdSuccess() {
//        when(registrationRepository.findById(registration.getEmailId())).thenReturn(Optional.ofNullable(registration));
//        boolean result = registrationService.deleteById(registration.getEmailId());
//        assertEquals(true, result);
//        // verify(registrationRepository, times(1)).findById(registration.getEmailId());
//        verify(registrationRepository, times(1)).deleteById(registration.getEmailId());
//    }
//
//
//    @Test
//    public void updateByIdSuccess() throws UserNotFoundException {
//        when(registrationRepository.findById(registration.getEmailId())).thenReturn(Optional.ofNullable(registration));
//        when(registrationRepository.save(registration)).thenReturn(registration);
//        assertEquals(registration, registrationService.updateUser(registration));
//        verify(registrationRepository, times(1)).findById(registration.getEmailId());
//        verify(registrationRepository, times(1)).save(registration);
//    }
//
//    @Test
//    public void updateProductFailure() throws UserNotFoundException {
//        when(registrationRepository.findById(registration.getEmailId())).thenReturn(Optional.ofNullable(null));
//        assertThrows(UserNotFoundException.class, () -> registrationService.updateUser(registration));
//        verify(registrationRepository, times(1)).findById(registration.getEmailId());
//        verify(registrationRepository, times(0)).save(registration);
//    }
//}