package com.example.userloginservice.rabbitmq;

import com.example.userloginservice.model.Login;
import com.example.userloginservice.service.LoginService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Receiver {
    @Autowired
    private LoginService loginService;

    @RabbitListener(queues = "user_queue")
    public void getDtoFromQueueAndAddToDB(Login login){
        //userdto-->emailId,pwd
        //build auth user object
        //send auth object to service.adduser()
        Login user=new Login();
        user.setEmailId(login.getEmailId());
        user.setPassword(login.getPassword());
        Login result=loginService.register(user);
        System.out.println("\nadduser: "+result);

    }
}
