package com.extrahand.emailservice.repository;

import com.extrahand.emailservice.model.EmailDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepository extends MongoRepository<EmailDetails,String> {
}
