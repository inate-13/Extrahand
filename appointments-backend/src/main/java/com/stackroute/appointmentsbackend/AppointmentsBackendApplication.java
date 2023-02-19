package com.stackroute.appointmentsbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class AppointmentsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppointmentsBackendApplication.class, args);
	}

}
