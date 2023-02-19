package com.extrahand.complaintservice.Service;

import com.extrahand.complaintservice.Model.Complaint;
import com.extrahand.complaintservice.Repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComplainServiceImpl implements ComplaintService{

   @Autowired
private ComplaintRepository complaintRepository;

    @Autowired
    private SequenceGenerator sequenceGenerator;


    @Override
    public Complaint addComplaint(Complaint complaint)
    {
        complaint.setComplaintId(sequenceGenerator.getSequNum(complaint.SEQUENECE_NAME));
        return complaintRepository.insert(complaint);
    }
}
