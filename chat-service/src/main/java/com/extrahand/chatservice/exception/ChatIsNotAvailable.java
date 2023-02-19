package com.extrahand.chatservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND,reason = "Chat does not exist")
public class ChatIsNotAvailable extends Exception{
}
