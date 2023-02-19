package com.extrahand.complaintservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;



@AllArgsConstructor
@NoArgsConstructor
@Data
@Document
public class Complaint {

    @Transient
public static final String SEQUENECE_NAME="user_complain";


@Id
private int complaintId;

private String emailId,vendor_name,Complaint_Title,Complaint_Description,Status;

}
