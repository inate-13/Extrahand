package com.stackroute.Payment.repository;

import com.stackroute.Payment.model.PaymentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<PaymentDetails,Integer>{
    List<PaymentDetails> findAllByEmailId(String emailId);
    PaymentDetails findByRazorpayOrderId(String razorpayOrderId);
}