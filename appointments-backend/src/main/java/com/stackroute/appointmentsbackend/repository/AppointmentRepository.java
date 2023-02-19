package com.stackroute.appointmentsbackend.repository;

import com.stackroute.appointmentsbackend.model.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment,Integer> {

    @Query("{'vendorEmailId':?0,'serviceTitle':?1}")
    List<Appointment> findAllByServiceId(String vendorEmailId,String serviceTitle);

    @Query("{'vendorEmailId':?0,'status':'pending'}")
    List<Appointment> findAllByPandding(String vendorEmailId);

    @Query("{'userEmailId':?0}")
    List<Appointment> findAllByUserEmailId(String userEmailId);
}


