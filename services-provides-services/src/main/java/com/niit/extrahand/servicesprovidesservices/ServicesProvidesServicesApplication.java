package com.niit.extrahand.servicesprovidesservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ServicesProvidesServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicesProvidesServicesApplication.class, args);
	}

}
