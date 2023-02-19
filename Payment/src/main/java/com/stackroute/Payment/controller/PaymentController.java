package com.stackroute.Payment.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.stackroute.Payment.model.PaymentDetails;
import com.stackroute.Payment.service.PaymentService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.math.BigInteger;
import java.util.Objects;

@RestController
@RequestMapping("razorpay")
public class PaymentController {

    private RazorpayClient razorpayClient;
    private final PaymentService paymentService;
    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }



    private static final String SECRET_ID = "rzp_test_uzJz1DmiglWe9W";
    private static final String SECRET_KEY = "mN7RnUYJZzESvVkx172Y5wIP";

    @PatchMapping("/paymentStatus/{paymentId}")
    public ResponseEntity<?> updateDetails(@PathVariable int paymentId){

        PaymentDetails paymentDetails = paymentService.ValidateAndUpdatePayment(paymentId);
        if (paymentDetails == null) {
            return new ResponseEntity<>(paymentId +" is not Found",HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<>(paymentDetails,HttpStatus.OK);
        }
    }
    @GetMapping("/byEmail/{emailId}")
    public ResponseEntity<?> paymentDetailsByEmailId(@PathVariable String emailId){
        return new ResponseEntity<>(paymentService.getDetailsByEmailId(emailId),HttpStatus.OK);
    }

    @PostMapping("/createPay")
    public PaymentDetails createOrder(@RequestBody PaymentDetails paymentDetails) {

        try {
            razorpayClient = new RazorpayClient(SECRET_ID, SECRET_KEY);

            Order order = createRazorPayOrder(paymentDetails.getAmount());
            System.out.println("---------------------------");
            String orderId = (String) order.get("id");
            System.out.println("Order ID: " + orderId);
            System.out.println("---------------------------");
            paymentDetails.setRazorpayOrderId(orderId);
            paymentDetails.setAmount( paymentDetails.getAmount());
            paymentService.savePayment(paymentDetails);

            return paymentDetails;

        } catch (RazorpayException e) {
            e.printStackTrace();
        }

        return paymentDetails;

    }

    private Order createRazorPayOrder(BigInteger amount) throws RazorpayException {

        JSONObject options = new JSONObject();
        options.put("amount", amount.multiply(new BigInteger("100")));
        options.put("currency", "INR");
        options.put("receipt", "123456");
        options.put("payment_capture", 1);
        return razorpayClient.orders.create(options);
    }
}

