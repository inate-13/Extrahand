package com.example.userloginservice.controller;

import com.example.userloginservice.model.Login;
import com.example.userloginservice.service.LoginService;
import com.example.userloginservice.service.SecurityTokenGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/extra-hand/e2")
public class LoginController {

    @Autowired
    private LoginService loginService;
    @Autowired
    private SecurityTokenGenerator securityTokenGenerator;

    //http://localhost:8888/extra-hand/e1/register
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Login login) {
        return new ResponseEntity<>(loginService.register(login), HttpStatus.OK);
    }

    //http://localhost:8888/extra-hand/e1/authenticate
    @PostMapping("/authenticate")
    public ResponseEntity<?> loginCheck(@RequestBody Login login) {
//        Login result = loginService.loginCheck(login.getEmailId(), login.getPassword());
////
//        if (result != null) {
//            Map<String, String> key = securityTokenGenerator.generateToken(result);
//            return new ResponseEntity<>(key, HttpStatus.OK);
//        } else {
            return new ResponseEntity<>(loginService.loginCheck(login.getEmailId(), login.getPassword()), HttpStatus.OK);
        }
    }
//}
//}

