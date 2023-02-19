package com.extrahand.chatservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT,reason = "Chat already exists")
public class ChatAlreadyExists extends Exception{
}
