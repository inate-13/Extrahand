package com.example.userregistrationservice.repository;

import com.example.userregistrationservice.model.Registration;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RegistrationRepository extends MongoRepository<Registration,String> {

}
