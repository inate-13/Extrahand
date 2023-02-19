package com.stackroute.appointmentsbackend.service;

import com.stackroute.appointmentsbackend.model.Appointment;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface AppointmentsService {


    //custom
    List<Appointment> findAllByServiceId(String vendorEmailId,String serviceTitle);

    List<Appointment> findAllByPandding(String vendorEmailId);
    //custom
    List<Appointment> findAllByUserEmailId(String userEmailId);

    //aa ma shu karvanu
    Appointment findAll(String userEmailId);

boolean DeleteAppointment(int appointmentId);
    Appointment Addappoinment (Appointment appointment);

    Appointment UpdateAppointment(Appointment appointment,int appointmentId);

}
