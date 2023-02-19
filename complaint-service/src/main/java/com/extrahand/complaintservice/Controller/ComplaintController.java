package com.extrahand.complaintservice.Controller;

import com.extrahand.complaintservice.Model.Complaint;
import com.extrahand.complaintservice.Service.ComplaintService;
import com.extrahand.complaintservice.Service.SequenceGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/exrahand/complaint/e1")

public class ComplaintController {

@Autowired
private ComplaintService complaintService;

@Autowired
private SequenceGenerator sequenceGenerator;

    //http://localhost:9999/exrahand/complaint/e1/add-compalint
@PostMapping("/add-compalint")
public ResponseEntity<?> addComplaint(@RequestBody Complaint complaint)
{
//    complaint.setComplaintId(sequenceGenerator.getSequNum(complaint.SEQUENECE_NAME)
return new ResponseEntity<>(complaintService.addComplaint(complaint), HttpStatus.OK);
}

}
