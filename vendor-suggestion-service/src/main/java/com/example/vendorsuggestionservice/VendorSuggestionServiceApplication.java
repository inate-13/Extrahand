package com.example.vendorsuggestionservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class VendorSuggestionServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(VendorSuggestionServiceApplication.class, args);
	}
}
