package com.extrahand.complaintservice.Repository;

import com.extrahand.complaintservice.Model.Complaint;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ComplaintRepository extends MongoRepository<Complaint,Integer> {
}
