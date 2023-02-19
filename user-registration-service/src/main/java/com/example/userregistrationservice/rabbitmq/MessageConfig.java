package com.example.userregistrationservice.rabbitmq;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


    @Configuration
    public class MessageConfig {
        //exchange/queue/jackson/rabbittemplate/binding

        private String exchange_name="user_exchange";

        private String register_queue="user_queue";

        private String vendor_queue= "vendor_queue";


        @Bean
        public DirectExchange getDirectExchange(){
            return new DirectExchange(exchange_name);

        }
        @Bean
        public Queue getQueue(){
            return new Queue(register_queue);
        }

        @Bean
        public Queue getVendorQueue() {return new Queue(vendor_queue);}


        @Bean
        public Jackson2JsonMessageConverter getProducerJacksonConvertor(){
            return new Jackson2JsonMessageConverter();
        }
        @Bean
        public RabbitTemplate getRabbitTemplate(final ConnectionFactory connectionFactory){
            RabbitTemplate rabbitTemplate=new RabbitTemplate(connectionFactory);
            rabbitTemplate.setMessageConverter(getProducerJacksonConvertor());
            return rabbitTemplate ;
        }



        @Bean
        public Binding getBinding(){
            return BindingBuilder.bind(getQueue()).to(getDirectExchange()).with("user_routing");
        }

        @Bean
        public Binding getVendorBinding(){
            return BindingBuilder.bind(getVendorQueue()).to(getDirectExchange()).with("vendor_routing");

        }
}
