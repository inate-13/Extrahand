package com.example.feedbackservice.repository;

import com.example.feedbackservice.model.Feedback;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends MongoRepository<Feedback,String> {
    List<Feedback> findFeedbackByUserEmailId(String userEmailId);
}
