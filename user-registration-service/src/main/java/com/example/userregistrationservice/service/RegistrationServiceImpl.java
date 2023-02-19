package com.example.userregistrationservice.service;
import com.example.userregistrationservice.exception.UserAlreadyExistingException;
import com.example.userregistrationservice.exception.UserNotFoundException;
import com.example.userregistrationservice.model.Registration;
import com.example.userregistrationservice.model.WorkShopAddress;
import com.example.userregistrationservice.rabbitmq.*;
import com.example.userregistrationservice.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;


@Service
public class RegistrationServiceImpl implements RegistrationService{

    @Autowired
    private RegistrationRepository registrationRepository;
    @Autowired
    private Sender sender;
    @Autowired
    private VendorSender vendorSender;


    //Not using addUser as it is written  in accordance with image upload
    @Override
    public Registration addUser(RegisterUser registrationUser) throws UserAlreadyExistingException, IOException {
        LoginDTO loginDTO = new LoginDTO(registrationUser.getEmailId(), registrationUser.getPassword());
        sender.sendDtoToQueue(loginDTO);
        if (registrationRepository.findById(registrationUser.getEmailId()).isPresent()) {
            throw new UserAlreadyExistingException();
        } else {
            //registrationUser.setImage(registrationUser.getImage());
            Registration registration=new Registration(registrationUser.getEmailId(),registrationUser.getFirstName(),registrationUser.getLastName(),registrationUser.getMobileNo(),registrationUser.getAddress(),registrationUser.getRole(),registrationUser.getGender(),registrationUser.getImage(),registrationUser.getExperience(),registrationUser.getWorkShopAddress(),registrationUser.getDob(),registrationUser.getAge());   //registrationUser.getImage());
            // Registration registration=new Registration();
            //this is not useful but only for error reduction ,above constructor works in real
            registrationRepository.save(registration);
            return registration;
            //registration.setImage(file.getBytes());
            // registrationRepository.save(registration);
            //  return registration;

        }

    }

    @Override
    public Registration updateUser(Registration registration) throws UserNotFoundException {
        if(registrationRepository.findById(registration.getEmailId()).isEmpty()){
            throw new UserNotFoundException();
        }else {

            System.out.println(registration.getRole());
            if(String.valueOf(registration.getRole()).equals("VENDOR")){
                VendorDTO vendorDTO = new VendorDTO(registration.getEmailId(),registration.getFirstName(),
                        registration.getMobileNo(),registration.getExperience().getExperience(),
                        registration.getExperience().getProfession(),registration.getExperience().getDescription(),
                        registration.getImage(),registration.getWorkShopAddress().getWorkShopName(),
                        registration.getWorkShopAddress().getDoorNo(),registration.getWorkShopAddress().getAddressLine(),
                        registration.getWorkShopAddress().getDistrict(),registration.getWorkShopAddress().getPincode(),
                        registration.getWorkShopAddress().getState(),registration.getWorkShopAddress().getCountry());
                vendorSender.sendDatatoToVendorQueue(vendorDTO);
            }
            return registrationRepository.save(registration);
        }

    }


    @Override
    public List<Registration> getAllUser() {
        return registrationRepository.findAll();
    }

    @Override
    public Registration getById(String emailId) {

        return registrationRepository.findById(emailId).get();
    }

    @Override
    public Registration deleteById(String emailId) {
        registrationRepository.deleteById(emailId);
        return null;
    }
    @Override
    public Registration getVendorById(String emailId) {
        return registrationRepository.findById(emailId).get();
    }

    @Override
    public WorkShopAddress getVendorLocationByEmail(String email) {
        return registrationRepository.findById(email).get().getWorkShopAddress();
    }

}