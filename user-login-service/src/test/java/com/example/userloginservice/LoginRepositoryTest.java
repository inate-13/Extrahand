//package com.example.userloginservice;
//
//import com.example.userloginservice.model.Login;
//import com.example.userloginservice.repository.LoginRepository;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.Mock;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//@ExtendWith(SpringExtension.class)
//@DataJpaTest
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
//public class LoginRepositoryTest {
//
//    @Autowired
//    private LoginRepository repository;
//
//    private Login login;
//
//    @BeforeEach
//    public void setup(){
//        login=new Login("kaviya@gmail.com","ka123");
//    }
//    @AfterEach
//    public void clean(){
//        login=null;
//      // repository.deleteById("kaviya@gmail.com");
//    }
//    @Test
//    public void register(){
//     Login login1=repository.save(login);
//       assertEquals(login1,login);
//    }
//    @Test
//    public void findById(){
//        repository.save(login);
//        Login l1=repository.findById("kaviya@gmail.com").get();
//        assertEquals(login,l1);
//
//    }
//
//}
