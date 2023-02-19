package com.example.feedbackservice.controller;

import com.example.feedbackservice.exceptions.FeedbackAlreadySubmitted;
import com.example.feedbackservice.exceptions.FeedbackNotFound;
import com.example.feedbackservice.model.Feedback;
import com.example.feedbackservice.service.FeedbackServiceI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//http://localhost:8888/v1/feedback/post
//http://localhost:8888/v1/feedback/email/{emailId}
//http://localhost:8888/v1/feedback/booking/{serviceBookingId}
//http://localhost:8888/v1/feedback/all



@RestController
@RequestMapping("/v1/feedback")
public class FeedbackController {
    @Autowired
    FeedbackServiceI feedbackServiceI;

    @PostMapping("/post")
    public ResponseEntity<?> addNewFeedback(@RequestBody Feedback feedback) throws FeedbackAlreadySubmitted {
        return new ResponseEntity<>(feedbackServiceI.addFeedbackToRepo(feedback), HttpStatus.CREATED);
    }

    @GetMapping("/email/{userEmailId}")
    public ResponseEntity<?> findAllFeedbacksByEmailId(@PathVariable String userEmailId){
        return new ResponseEntity<>(feedbackServiceI.getAllFeedbackByEmailId(userEmailId),HttpStatus.OK);
    }

    @GetMapping("/booking/{serviceBookingId}")
    public ResponseEntity<?> findFeedBackOfService(@PathVariable String serviceBookingId) throws FeedbackNotFound {
        return new ResponseEntity<>(feedbackServiceI.getFeedbackOfService(serviceBookingId),HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<?> getAllFeedBacks(){
        return new ResponseEntity<>(feedbackServiceI.getAllFeedbacks(),HttpStatus.OK);
    }
}
