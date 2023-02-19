//package com.example.userloginservice;
//
//import com.example.userloginservice.controller.LoginController;
//import com.example.userloginservice.model.Login;
//import com.example.userloginservice.service.LoginService;
//import com.example.userloginservice.service.SecurityTokenGenerator;
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
//import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import java.util.HashMap;
//import java.util.Map;
//
//import static org.mockito.Mockito.*;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//@ExtendWith(MockitoExtension.class)
//public class LoginControllerTest {
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Mock
//    private LoginService loginService;
//
//    @Autowired
//    private SecurityTokenGenerator securityTokenGenerator;
//
//    @InjectMocks
//    private LoginController loginController;
//
//    private Login login;
//
//    @BeforeEach
//    public void init(){
//        login=new Login("kaviya@gmail.com","ka123");
//
//        mockMvc= MockMvcBuilders.standaloneSetup(loginController).build();
//    }
//
//    @AfterEach
//    public void clean(){
//        login=null;
//    }
//    @Test
//    public void loginUserSuccess() throws Exception {
//       // SecurityTokenGenerator s1=new SecurityTokenGenerator() ;
//        when(loginService.register(login)).thenReturn(login);
//        mockMvc.perform(post("/extra-hand/e1/register").contentType(MediaType.APPLICATION_JSON).content(convertToJson(login)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(loginService, times(1)).register(login);
//    }
//    @Test
//    public void loginUserFailure() throws Exception {
//        Map<String,String> map1=new HashMap<>();
//        when(loginService.loginCheck("kaviya@gmail.com","ka123")).thenReturn(map1);
//       // SecurityTokenGenerator s1=new SecurityTokenGenerator() ;
//
//        mockMvc.perform(post("/extra-hand/e1/authenticate").contentType(MediaType.APPLICATION_JSON).content(convertToJson(login)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(loginService, times(1)).loginCheck("kaviya@gmail.com","ka123");
//    }
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
//}
