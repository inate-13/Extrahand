package com.stackroute.appointmentsbackend.controller;


import com.stackroute.appointmentsbackend.model.Appointment;
import com.stackroute.appointmentsbackend.service.AppointmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
//import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/appointment")
public class AppoinmentsController {

    @Autowired
    private AppointmentsService appointmentsService;

    @PostMapping("/Add-Appointment")
    public ResponseEntity<?> AddAppointment(@RequestBody Appointment appointment)
    {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now=LocalDateTime.now();

        appointment.setAppointmentTime(formatter.format(now));
return new ResponseEntity<>(appointmentsService.Addappoinment(appointment), HttpStatus.OK);
    }

    @GetMapping("/Get-Appointment-By-EmailId/{EmailId}")
    public ResponseEntity<?> GetAppointmentsByEmailId(@PathVariable String EmailId)
    {
        return new ResponseEntity<>(appointmentsService.findAllByUserEmailId(EmailId),HttpStatus.OK);
    }

    @GetMapping("/Get-Apointment-By-ServiceId/{vendorEmailId}/{serviceTitle}")
    public ResponseEntity<?> GetAppointMentByServiceId(@PathVariable String vendorEmailId,@PathVariable String serviceTitle)
    {
        return new ResponseEntity<>(appointmentsService.findAllByServiceId(vendorEmailId,serviceTitle),HttpStatus.OK);
    }

    @DeleteMapping("/Delete-Appointment/{appointmentId}")
    public ResponseEntity<?> DeleteAppointment(@PathVariable int appointmentId)
    {
        return new ResponseEntity<>(appointmentsService.DeleteAppointment(appointmentId),HttpStatus.OK);
    }

    @PutMapping("update/{appointmentId}")
    public ResponseEntity<?> UpdateAppointment(@PathVariable int appointmentId,@RequestBody  Appointment appointment)
    {
        return new ResponseEntity<>(appointmentsService.UpdateAppointment(appointment,appointmentId),HttpStatus.OK);
    }

    @GetMapping("Find-Pandding/{email}")
    public ResponseEntity<?> FindPandding(@PathVariable String email)
    {
        return new ResponseEntity<>(appointmentsService.findAllByPandding(email),HttpStatus.OK);
    }
}
