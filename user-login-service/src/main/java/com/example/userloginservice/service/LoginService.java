package com.example.userloginservice.service;
import com.example.userloginservice.model.Login;
import java.util.Map;
public interface LoginService {
    public abstract Login register(Login login);
    public abstract Map<String,String> loginCheck(String emailId, String password);


}
