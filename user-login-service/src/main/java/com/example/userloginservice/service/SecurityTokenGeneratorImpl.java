package com.example.userloginservice.service;

import com.example.userloginservice.model.Login;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator {
    @Override
    public Map<String, String> generateToken(Login login) {
        Map<String, String> result = new HashMap<>();

        Map<String, Object> data = new HashMap<>();
        data.put("userObject", login);
        String jwtToken = Jwts.builder()
                .setClaims(data)
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS512, "mysecurekey").compact();
        result.put("token", jwtToken);
        result.put("message", "User Successfully logged in");
        return result;

    }
}