package com.stackroute.apigateway.Config;

import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.cloud.gateway.route.RouteLocator;

@Configuration
public class Appconfig {
    @Bean
    public RouteLocator getRoutes(RouteLocatorBuilder builder)
    {
        return builder.routes()
            //chat
                .route(p -> p
                        .path("/extra-hand/chat/**")
                        .uri("http://localhost:7020/*"))

                .route(p -> p
                        .path("/exrahand/complaint/e1/**")
                        .uri("http://localhost:7001/*"))
                //email

                .route( p->p
                        .path("/extra-hand/email/**")
                        .uri("http://localhost:7002/*"))

                //feedback
                .route( p->p
                        .path("/v1/feedback/**")
                        .uri("http://localhost:7003/*"))

                //payment

                .route( p->p
                        .path("/razorpay/**")
                        .uri("http://localhost:7004/*"))
                //serviceprovidingservice
                .route( p->p
                        .path("/extrahand/**")
                        .uri("http://localhost:7005/*"))
                //login
                .route( p->p
                        .path("/extra-hand/e2/**")
                        .uri("http://localhost:7006/*"))

                //reg
                .route( p->p
                        .path("/extra-hand/e1/**")
                        .uri("http://localhost:7007/*"))
                //suggestion
                .route( p->p
                        .path("/suggest/v1/**")
                        .uri("http://localhost:7008/*"))

                //blog
                .route( p->p
                        .path("/extra-hand/blogs/**")
                        .uri("http://localhost:7778/*"))

                //appointment
                .route( p->p
                        .path("/appointment/**")
                        .uri("http://localhost:7021/*"))

                //location
                .route( p->p
                        .path("/extra-hand/location/**")
                        .uri("http://localhost:7022/*"))


                //product-webApp
                .route( p->p
                        .path("/**")
                        .uri("http://localhost:4200/*"))


                .build();
    }

}
