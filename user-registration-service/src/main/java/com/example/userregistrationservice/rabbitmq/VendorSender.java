package com.example.userregistrationservice.rabbitmq;

import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class VendorSender {

    @Autowired
    private RabbitTemplate rabbitTemplate;
    @Autowired
    private DirectExchange directExchange;

    public  boolean sendDatatoToVendorQueue(VendorDTO vendorDTO){
        System.out.println("Request sent to rabbitMQ");
        rabbitTemplate.convertAndSend(directExchange.getName(),"vendor_routing",vendorDTO);
        return true;
    }
}
