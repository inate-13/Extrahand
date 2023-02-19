package com.example.userloginservice.service;

import com.example.userloginservice.model.Login;

import java.util.Map;

public interface SecurityTokenGenerator {
    public  abstract Map<String,String> generateToken(Login login);
}
