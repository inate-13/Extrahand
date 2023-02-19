package com.example.vendorsuggestionservice.rabbitMQ;

import com.example.vendorsuggestionservice.exception.VendorAlreadyExistException;
import com.example.vendorsuggestionservice.model.Vendor;
import com.example.vendorsuggestionservice.services.IVendorService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class Consumer {

    @Autowired
    private IVendorService vendorService;

    @RabbitListener(queues = "vendor_queue")
    public void get_DTO_From_Queues(Vendor vendor)
    {
        System.out.println("Listened to the Sender");
        vendor.setServiceName("NA");
        vendor.setOtherServices("NA");
        vendor.setServiceDuration("NA");
        vendor.setCost(0);
        vendorService.addNewVendor(vendor);
    }
}
