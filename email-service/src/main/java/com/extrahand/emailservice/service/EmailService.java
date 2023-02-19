package com.extrahand.emailservice.service;

import com.extrahand.emailservice.model.EmailDetails;
import com.extrahand.emailservice.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.util.Date;

@Service
public class EmailService implements EmailServiceI{
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private EmailRepository emailRepository;

    @Value("${spring.mail.username}") private String sender;

    @Override
    public EmailDetails sendSimpleMail(EmailDetails emailDetails)
    {
        try {
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

//            creating a message body
            String messageBody="Congratulations on your booking :)\n" +
                    "Please wait till the vendor reaches your location. We are happy to serve my valuable customers." +
                    "Your appointment details are listed below.\n\n" +
                    "1. Vendor Name:    "+emailDetails.getVendorName()+"\n" +
                    "2. Vendor Mobile:  "+emailDetails.getVendorphoneNo()+"\n" +
                    "3. Vendor EmailId: "+emailDetails.getVendorEmailId()+"\n" +
                    "4. Service Name:   "+emailDetails.getServiceTitle()+"\n" +
                    "5. Appointment Time:"+emailDetails.getAppointmentTime()+"\n\n" +
                    "Don't hesitate to call or chat with the vendor. You can track the live location as well." +
                    "\nThank you for shopping with us :)\n" +
                    "Email us at help@extrahand.com for any queries. ";

            simpleMailMessage.setFrom(sender);
            simpleMailMessage.setTo(emailDetails.getUserEmailId());
            simpleMailMessage.setText(messageBody);
            simpleMailMessage.setSubject("Order placed successfully");
            simpleMailMessage.setSentDate(new Date());

            javaMailSender.send(simpleMailMessage);
            return emailRepository.insert(emailDetails);
        }
        catch (Exception e) {
            return null;
        }
    }

    @Override
    public String sendMailWithAttachment(EmailDetails emailDetails)
    {
        MimeMessage mimeMessage= javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper;

        //            creating a message body
        String messageBody="Congratulations on your booking :)\n" +
                "Please wait till the vendor reaches your location. We are happy to serve my valuable customers." +
                "Your appointment details are listed below.\n\n" +
                "1. Vendor Name:    "+emailDetails.getVendorName()+"\n" +
                "2. Vendor Mobile:  "+emailDetails.getVendorphoneNo()+"\n" +
                "3. Vendor EmailId: "+emailDetails.getVendorEmailId()+"\n" +
                "4. Service Name:   "+emailDetails.getServiceTitle()+"\n" +
                "5. Appointment Time:"+emailDetails.getAppointmentTime()+"\n\n" +
                "Don't hesitate to call or chat with the vendor. You can track the live location as well." +
                "\nThank you for shopping with us :)\n" +
                "Email us at help@extrahand.com for any queries. ";

        try {
            mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setFrom(sender);
            mimeMessageHelper.setTo(emailDetails.getUserEmailId());
            mimeMessageHelper.setText(messageBody);
            mimeMessageHelper.setSubject("Order placed successfully");

            FileSystemResource file = new FileSystemResource(new File(emailDetails.getAttachment()));

            mimeMessageHelper.addAttachment(file.getFilename(), file);

            javaMailSender.send(mimeMessage);
            emailRepository.insert(emailDetails);
            return "Mail sent Successfully";
        }
        catch (MessagingException e) {
            return "Error while sending mail!!!";
        }
    }
}
