package com.example.vendorsuggestionservice.rabbitMQ;

import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.UUID;

@Configuration
public class MessageConfig {
    @Bean
    public Jackson2JsonMessageConverter jsonMessageConverter()
    {

        return new Jackson2JsonMessageConverter();
    }


}
