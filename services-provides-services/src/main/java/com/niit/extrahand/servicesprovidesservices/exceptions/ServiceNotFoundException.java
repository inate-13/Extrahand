package com.niit.extrahand.servicesprovidesservices.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "Service Not Found!")
public class ServiceNotFoundException extends Exception{

}
