//package com.example.userloginservice;
//
//import com.example.userloginservice.model.Login;
//import com.example.userloginservice.rabbitmq.Receiver;
//import com.example.userloginservice.repository.LoginRepository;
//import com.example.userloginservice.service.LoginService;
//import com.example.userloginservice.service.LoginServiceImpl;
//import com.example.userloginservice.service.SecurityTokenGenerator;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//
//import java.util.HashMap;
//import java.util.Map;
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.*;
//
//@ExtendWith(MockitoExtension.class)
//public class LoginServiceTest {
//    @Mock
//    private LoginRepository loginRepository;
//
//    @Mock
//    private Receiver receiver;
//
//    @InjectMocks
//    private LoginServiceImpl loginService;
//
//    @Mock
//    SecurityTokenGenerator securityTokenGenerator;
//
//    private Login login;
//
//    @BeforeEach
//    public  void init(){
//        login=new Login("kaviya@gmail.com","ka123");
//    }
//    public void clean(){
//        login=null;
//    }
//
//    @Test
//    public void registerUsersuccess(){
//        when(loginRepository.save(login)).thenReturn(login);
//        assertEquals(login,loginService.register(login));
//        verify(loginRepository,times(1)).save(login);
//
//    }
//
//    @Test
//    public void loginSuccess(){
//        Map<String,String> map=new HashMap<>();
//        when(loginRepository.findById(login.getEmailId())).thenReturn(Optional.ofNullable(login));
//        map=securityTokenGenerator.generateToken(login);
//        assertEquals(map,loginService.loginCheck("kaviya@gmail.com","ka123"));
//        verify(loginRepository,times(2)).findById(login.getEmailId());
//
//    }
//
//}
