package com.example.userregistrationservice.controller;
import com.example.userregistrationservice.exception.UserAlreadyExistingException;
import com.example.userregistrationservice.exception.UserNotFoundException;
import com.example.userregistrationservice.model.PincodeClasses.PincodeContainer;
import com.example.userregistrationservice.model.Registration;
import com.example.userregistrationservice.model.Role;
import com.example.userregistrationservice.rabbitmq.RegisterUser;
import com.example.userregistrationservice.repository.RegistrationRepository;
import com.example.userregistrationservice.service.RegistrationService;
import com.example.userregistrationservice.service.SequenceGeneratorService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
@RestController
@RequestMapping("/extra-hand/e1")
public class RegistrationController {

    @Autowired
    private SequenceGeneratorService service;

    @Autowired
    private RegistrationRepository repository;

    @Autowired
    private RegistrationService registrationService;

    // http://localhost:9999/extra-hand/e1/register
//    @PostMapping("/register")
//    public ResponseEntity<?> registeruser(@RequestBody Registration registration) throws UserAlreadyExistingException {
//         return  new ResponseEntity<>(registrationService.regUser(registration),HttpStatus.CREATED);
//    }

    @PostMapping("/register")
    public ResponseEntity<?> addUser(@RequestBody RegisterUser registerUser) throws UserAlreadyExistingException, IOException {
        return new ResponseEntity<>(registrationService.addUser(registerUser), HttpStatus.CREATED);
    }

    //http://localhost:9999/extra-hand/e1/register
    // @PostMapping("/register")
//    public ResponseEntity<?> addUser(@RequestParam("user") String user , @RequestParam("file")MultipartFile file) throws UserAlreadyExistingException {
//    try{
//        RegisterUser reg=new ObjectMapper().readValue(user,RegisterUser.class);
//       reg.setUserId(service.getSequenceNumber(reg.SEQUENCE_NAME));
//        return new ResponseEntity<>(registrationService.addUser(reg,file), HttpStatus.CREATED);
//    }catch (UserAlreadyExistingException | JsonProcessingException ex){
//        throw new UserAlreadyExistingException();
//    } catch (IOException e) {
//        throw new RuntimeException(e);
//    }
//    }
    //http:localhost:9999/extra-hand/e1/user
    @PutMapping("/user")
    public ResponseEntity<?> updateUser(@RequestBody Registration registration) throws UserNotFoundException {
        if (repository.findById(registration.getEmailId()).isPresent()) {
            Registration result = registrationService.updateUser(registration);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } else throw new UserNotFoundException();
    }
//    @PutMapping("/user")
//    public ResponseEntity<?> updateUser(@RequestBody Registration registration) throws UserNotFoundException {
//        try {
//            Registration result=registrationService.updateUser(registration);
//            return new ResponseEntity<>(result,HttpStatus.OK);
//        }catch (UserNotFoundException ex){
//            throw new UserNotFoundException();
//        }
    // }

    //http://localhost:9999/extra-hand/e1/user
    @GetMapping("/user")
    public ResponseEntity<?> getAllUser() {
        List<Registration> registrations = registrationService.getAllUser();
        return new ResponseEntity<>(registrations, HttpStatus.OK);
    }

    @GetMapping("/pin/{pinCode}")
    public List<Object> getByPincode(@PathVariable int pinCode) {
        String url = "https://api.postalpincode.in/pincode/" + pinCode;
        RestTemplate template = new RestTemplate();
        Object[] pincodes = template.getForObject(url, Object[].class);
        return Arrays.asList(pincodes);
    }

    @PostMapping("/pin/{pinCode}")
    public List<Object> postByPincode(@PathVariable int pinCode) throws JsonProcessingException {
        String url = "https://api.postalpincode.in/pincode/" + pinCode;
        RestTemplate template = new RestTemplate();
        Object[] pincodes = template.getForObject(url, Object[].class);
        Object[] pincodesr = template.getForObject(url, PincodeContainer[].class);
//        Object[] pincodess=template.postForEntity()  ;
        Gson gson = new Gson();
        JsonElement jsonElement = gson.toJsonTree(pincodes);
        JsonObject object = gson.fromJson("PostOffice", JsonObject.class);
        System.out.println("object " + object);
//        JsonArray jsonArray = jsonElement.getAsJsonObject().get("PostOffice").getAsJsonArray();
//        System.out.println(gson.toJson(jsonArray));
//        ObjectMapper mapper = new ObjectMapper();
//        JsonNode jsonNode = mapper.readTree("[PostOffice]");
//        jsonNode.get("PostOffice").get("State").asText();
        return Arrays.asList(pincodes);
    }

    //http://localhost:9999/extra-hand/e1/get-by-id/{emailId}
    @GetMapping("/get-by-id/{emailId}")
    public ResponseEntity<?> getById(@PathVariable String emailId) {
        return new ResponseEntity<>(registrationService.getById(emailId), HttpStatus.OK);
    }

    //http://localhost:9999/extra-hand/e1/delete-by-id/{emailId}
    @DeleteMapping("/delete-by-id/{emailId}")
    public ResponseEntity<?> deleteById(@PathVariable String emailId) {
        // registrationService.deleteById(emailId);
        return new ResponseEntity<>(registrationService.deleteById(emailId), HttpStatus.OK);
        // return true;
    }

    @GetMapping("/get-user/{emailId}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String emailId){
        return new ResponseEntity<>(registrationService.getById(emailId),HttpStatus.OK);
    }

    @GetMapping("/get-name/{emailId}")
    public ResponseEntity<?> getNameByEmail(@PathVariable String emailId){
        return new ResponseEntity<>(registrationService.getById(emailId),HttpStatus.OK);
    }


    @GetMapping("/get-address/{emailId}")
    public ResponseEntity<?> getUserAddressByEmail(@PathVariable String emailId){
        System.out.println("user location called");
        return new ResponseEntity<>(registrationService.getById(emailId).getAddress(),HttpStatus.OK);
    }

    @GetMapping("vendor-location/{email}")
    public ResponseEntity<?> getVendorWorkShopLocation(@PathVariable String email){
        System.out.println("workshop called");
        return new ResponseEntity<>(registrationService.getVendorLocationByEmail(email),HttpStatus.OK);
    }


}
