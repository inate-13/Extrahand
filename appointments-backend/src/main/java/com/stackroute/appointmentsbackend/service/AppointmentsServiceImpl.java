package com.stackroute.appointmentsbackend.service;

import com.stackroute.appointmentsbackend.model.Appointment;
import com.stackroute.appointmentsbackend.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

//
@Service
public class AppointmentsServiceImpl implements AppointmentsService{

    @Autowired
   private AppointmentRepository appointmentRepository;

    @Autowired
private SequenceGenerator sequenceGenerator;

//    public List<Appointment> getAppointments() {
//        return appointmentRepository.findAll();
//    }
//
//    public Appointment getAppointmentByUserEmailId(String UserEmailId) {
//        return appointmentRepository.findAll(UserEmailId);
//    }
//
//    public Appointment getAppointmentByServiceId(String serviceId) {
//        return appointmentRepository.findAll(serviceId);
//    }

    @Override
    public List<Appointment> findAllByServiceId(String vendorEmailId,String serviceTitle) {
        return appointmentRepository.findAllByServiceId(vendorEmailId,serviceTitle);
    }

    @Override
    public List<Appointment> findAllByPandding(String vendorEmailId) {
        return appointmentRepository.findAllByPandding(vendorEmailId);
    }

    @Override
    public List<Appointment> findAllByUserEmailId(String userEmailId) {
        return appointmentRepository.findAllByUserEmailId(userEmailId);
    }

    @Override
    public Appointment findAll(String userEmailId) {
        return null;
    }

    @Override
    public boolean DeleteAppointment(int appointmentId) {
      if(appointmentRepository.findById(appointmentId).isPresent())
      {
        Appointment appointment=appointmentRepository.findById(appointmentId).get();
        appointmentRepository.delete(appointment);
        return true;
      }else {
          return false;
      }
    }

    @Override
    public Appointment Addappoinment(Appointment appointment) {
        DateTimeFormatter dateTimeFormatter=DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now=LocalDateTime.now();
        appointment.setAppointmentTime(dateTimeFormatter.format(now));
        appointment.setAppointmentId(sequenceGenerator.getSequNum(appointment.SEQUENECE_NAME));
        return appointmentRepository.insert(appointment);
    }

    @Override
    public Appointment UpdateAppointment(Appointment appointment,int appointmentId) {
        if( appointmentRepository.findById(appointment.getAppointmentId()).isPresent()){
return appointmentRepository.save(appointment);
        }
        else
            return null;
    }
}
