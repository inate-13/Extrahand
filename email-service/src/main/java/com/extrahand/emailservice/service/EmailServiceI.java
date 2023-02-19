package com.extrahand.emailservice.service;

import com.extrahand.emailservice.model.EmailDetails;

public interface EmailServiceI {
    public EmailDetails sendSimpleMail(EmailDetails emailDetails);
    public String sendMailWithAttachment(EmailDetails emailDetails);
}
