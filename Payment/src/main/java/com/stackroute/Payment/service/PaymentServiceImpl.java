package com.stackroute.Payment.service;

import com.stackroute.Payment.model.PaymentDetails;
import com.stackroute.Payment.model.Status;
import com.stackroute.Payment.repository.PaymentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import static com.stackroute.Payment.model.Status.SUCCESS;

@Slf4j
@Service
public class PaymentServiceImpl implements PaymentService{
    private final PaymentRepository paymentRepository;
    @Autowired
    public PaymentServiceImpl(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }



    @Override
    @Transactional
    public PaymentDetails savePayment(PaymentDetails paymentDetails) {
        System.out.println("creating order");
        DateTimeFormatter formatter
                = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss a");
        LocalDateTime now = LocalDateTime.now();
        paymentDetails.setDateTime(now.format(formatter));
        return paymentRepository.save(paymentDetails);
    }

    @Override
    public List<PaymentDetails> getDetailsByEmailId(String emailId) {
        return paymentRepository.findAllByEmailId(emailId);
    }

    @Override
    @Transactional
    public PaymentDetails ValidateAndUpdatePayment(int paymentId) {
        Optional<PaymentDetails> updatedPaymentDetails=paymentRepository.findById(paymentId);
        if(updatedPaymentDetails.isPresent()) {
            updatedPaymentDetails.get().setStatus(SUCCESS);
            DateTimeFormatter formatter
                        = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss a");
                LocalDateTime now = LocalDateTime.now();
            updatedPaymentDetails.get().setDateTime(now.format(formatter));
            return updatedPaymentDetails.get();
        }
        return null;
    }


//    @Override
//    @Transactional
//    public String ValidateAndUpdatePayment(final String razorpayOrderId, final int paymentId, final String razorpaySignature, final String secretKey) {
//        String errorMsg = null;
//        try {
//            PaymentDetails paymentDetails = paymentRepository.findByRazorpayOrderId(razorpayOrderId);
//            // Verify if the razorpay signature matches the generated one to
//            // confirm the authenticity of the details returned
//            String generatedSignature = Signature.calculateRFC2104HMAC(paymentDetails.getRazorpayOrderId() + "|" + paymentId, secretKey);
//            if (generatedSignature.equals(razorpaySignature)) {
//                paymentDetails.setRazorpayOrderId(razorpayOrderId);
//                paymentDetails.setPaymentId(paymentId);
//                paymentDetails.setRazorpaySignature(razorpaySignature);
//                paymentDetails.setStatus(SUCCESS);
//                DateTimeFormatter formatter
//                        = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss a");
//                LocalDateTime now = LocalDateTime.now();
//                paymentDetails.setDateTime(now.format(formatter));
//                paymentRepository.save(paymentDetails);
//                System.out.println("validate and update");
//            } else {
//                paymentDetails.setStatus(FAILURE);
//                DateTimeFormatter formatter
//                        = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss a");
//                LocalDateTime now = LocalDateTime.now();
//                paymentDetails.setDateTime(now.format(formatter));
//                paymentRepository.save(paymentDetails);
//                errorMsg = "Payment validation failed: Signature doesn't match";
//            }
//        } catch (Exception e) {
//            log.error("Payment validation failed", e);
//            errorMsg = e.getMessage();
//        }
//        return errorMsg;
//    }



}