//package com.example.userregistrationservice;
//import com.example.userregistrationservice.controller.RegistrationController;
//import com.example.userregistrationservice.exception.UserAlreadyExistingException;
//import com.example.userregistrationservice.exception.UserNotFoundException;
//import com.example.userregistrationservice.model.Address;
//import com.example.userregistrationservice.model.Gender;
//import com.example.userregistrationservice.model.Registration;
//import com.example.userregistrationservice.model.Role;
//import com.example.userregistrationservice.rabbitmq.RegisterUser;
//import com.example.userregistrationservice.service.RegistrationService;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//import org.springframework.web.multipart.MultipartFile;
//import java.util.ArrayList;
//import java.util.List;
//import static org.mockito.Mockito.*;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@ExtendWith(MockitoExtension.class)
//public class RegistrationControllerTest {
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Mock
//    private RegistrationService registrationService;
//
//    @InjectMocks
//    private RegistrationController registrationController;
//
//    private Registration registration;
//    private RegisterUser registerUser;
//
//
//    private Gender gender;
//    private Address address;
//    private Role role;
//    private MultipartFile file;
//
//    private byte[] images;
//    List<Address> addresses=new ArrayList<>();
//
//    String user;
//
//    @BeforeEach
//    public  void init(){
//       // List<Address> addresses=new ArrayList<>();
//
//        addresses.add(address);
//        registration=new Registration(10,"kaviya@gmail.com","kaviya","vasudevan",1234567890,addresses  ,role,gender,images);
//        address=new Address("78/96","park Avenue","burma","bangalore",456789,"near royal park","India");
//
//        registerUser=new RegisterUser(10,"kaviya@gmail.com","ka123","kaviya","vasudevan",1234567890,addresses,role,gender,images);
//        address=new Address("78/96","park Avenue","burma","bangalore",456789,"near royal park","India");
//        user= String.valueOf(registerUser);
//        System.out.println(user);
//        mockMvc = MockMvcBuilders.standaloneSetup(registrationController).build();
//    }
//    @AfterEach
//    public void clean(){
//        registration=null;
//        address=null;
//        addresses=null;
//        role=null;
//        gender=null;
//       images=null;
////        file=null;
//    }
//
//    @Test
//    public void addUserSuccess() throws   Exception {
//        when(registrationService.addUser(registerUser,file)).thenReturn(registration);
//        mockMvc.perform(post("/extra-hand/e1/register").contentType(MediaType.APPLICATION_JSON).content(convertToJson1(user,file)))
//                        .andExpect(status().isCreated()).andDo(MockMvcResultHandlers.print());
//       // verify(registrationService,times(1)).addUser(registerUser,file);
//
//
//
//    }
//    @Test
//    public void addUserFailure() throws Exception{
//        when(registrationService.addUser(registerUser,file)).thenThrow(UserAlreadyExistingException.class);
//        mockMvc.perform(post("/extra-hand/e1/register").contentType(MediaType.APPLICATION_JSON).content(convertToJson(registerUser)))
//                .andExpect(status().isConflict()).andDo(MockMvcResultHandlers.print());
//        verify(registrationService,times(1)).addUser(registerUser,file);
//    }
//    @Test
//    public void updateUserSuccess() throws   Exception {
//        when(registrationService.updateUser(registration)).thenReturn(registration);
//        mockMvc.perform(MockMvcRequestBuilders.put("/extra-hand/e1/user").contentType(MediaType.APPLICATION_JSON).content(convertToJson(registration)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(registrationService, times(1)).updateUser(registration);
//
//    }
//    @Test
//    public void updateUserFailure() throws   Exception {
//        when(registrationService.updateUser(registration)).thenThrow(UserNotFoundException.class);
//        mockMvc.perform(MockMvcRequestBuilders.put("/extra-hand/e1/user").contentType(MediaType.APPLICATION_JSON).content(convertToJson(registration)))
//                .andExpect(status().isNotFound()).andDo(MockMvcResultHandlers.print());
//        verify(registrationService, times(1)).updateUser(registration);
//
//    }
//    @Test
//    public void deleteUserSuccess() throws   Exception {
//        when(registrationService.deleteById(registration.getEmailId())).thenReturn(true);
//        mockMvc.perform(MockMvcRequestBuilders.delete("/extra-hand/e1/delete-by-id/kaviya@gmail.com").contentType(MediaType.APPLICATION_JSON).content(convertToJson(registration)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(registrationService, times(1)).deleteById(registration.getEmailId());
//
//    }
//    @Test
//    public void getAllUserSuccess() throws   Exception {
//        List<Registration> registrations=new ArrayList<>();
//        when(registrationService.getAllUser()).thenReturn((registrations));
//        mockMvc.perform(MockMvcRequestBuilders.get("/extra-hand/e1/user").contentType(MediaType.APPLICATION_JSON).content(convertToJson(registration)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(registrationService, times(1)).getAllUser();
//
//    }
//    @Test
//    public void getById() throws   Exception {
//        when(registrationService.getById(registration.getEmailId())).thenReturn(registration);
//        mockMvc.perform(MockMvcRequestBuilders.get("/extra-hand/e1/get-by-id/kaviya@gmail.com").contentType(MediaType.APPLICATION_JSON).content(convertToJson(registration)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(registrationService, times(1)).getById(registration.getEmailId());
//
//    }
//
//
//    private static String convertToJson(final Object object) {
//        String result="";
//        try{
//            ObjectMapper mapper=new ObjectMapper();
//            result=mapper.writeValueAsString(object);
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//        return result;
//    }
//    private static String convertToJson1(final String object, MultipartFile file) {
//        String result="";
//        try{
//            ObjectMapper mapper=new ObjectMapper();
//            result=mapper.writeValueAsString(object);
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//        return result;
//    }
//}
