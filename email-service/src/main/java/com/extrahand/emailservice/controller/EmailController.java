package com.extrahand.emailservice.controller;

import com.extrahand.emailservice.model.EmailDetails;
import com.extrahand.emailservice.service.EmailServiceI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/extra-hand/email")
public class EmailController {
    @Autowired
    private EmailServiceI emailServiceI;

    @PostMapping("/sendMail")
    public ResponseEntity<?> sendMail(@RequestBody EmailDetails emailDetails)
    {
        return new ResponseEntity<>(emailServiceI.sendSimpleMail(emailDetails), HttpStatus.OK);
    }

    @PostMapping("/sendMailWithAttachment")
    public ResponseEntity<?> sendMailWithAttachment(@RequestBody EmailDetails emailDetails)
    {
        return new ResponseEntity<>(emailServiceI.sendMailWithAttachment(emailDetails), HttpStatus.OK);
    }
}
