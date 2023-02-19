package com.example.userregistrationservice.rabbitmq;

import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Sender {
    @Autowired
    private RabbitTemplate rabbitTemplate;
    @Autowired
    private DirectExchange directExchange;

    public  boolean sendDtoToQueue(LoginDTO loginDTO){
        rabbitTemplate.convertAndSend(directExchange.getName(),"user_routing",loginDTO);
        return true;
    }
}
