package com.example.feedbackservice.service;

import com.example.feedbackservice.exceptions.FeedbackAlreadySubmitted;
import com.example.feedbackservice.exceptions.FeedbackNotFound;
import com.example.feedbackservice.model.Feedback;

import java.util.List;

public interface FeedbackServiceI {

     boolean addFeedbackToRepo(Feedback feedback) throws FeedbackAlreadySubmitted;
     List<Feedback> getAllFeedbackByEmailId(String userEmailId);
     Feedback getFeedbackOfService(String serviceBookingId) throws FeedbackNotFound;
     List<Feedback> getAllFeedbacks();
}
