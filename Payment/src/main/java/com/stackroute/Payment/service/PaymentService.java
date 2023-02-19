package com.stackroute.Payment.service;

import com.stackroute.Payment.model.PaymentDetails;

import java.util.List;
import java.util.Optional;

public interface PaymentService {
    public PaymentDetails savePayment(PaymentDetails paymentDetails);
    public List<PaymentDetails> getDetailsByEmailId(String emailId);
    public PaymentDetails ValidateAndUpdatePayment(final int paymentId);

}
