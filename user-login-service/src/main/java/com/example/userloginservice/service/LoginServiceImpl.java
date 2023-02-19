package com.example.userloginservice.service;

import com.example.userloginservice.model.Login;
import com.example.userloginservice.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class LoginServiceImpl implements LoginService{
    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private SecurityTokenGenerator securityTokenGenerator;

    @Override
    public Map<String,String> loginCheck(String emailId, String password) {
        if (loginRepository.findById(emailId).isPresent()) {
            Login result = loginRepository.findById(emailId).get();
            if (result.getPassword().equals(password)) {
                result.setPassword("");
                Map<String ,String> key=securityTokenGenerator.generateToken(result);
                return key;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    @Override
    public Login register(Login login) {
        return loginRepository.save(login);
    }
}
