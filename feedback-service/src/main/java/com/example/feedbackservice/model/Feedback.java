package com.example.feedbackservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Feedback {
    @Id
    String serviceBookingId;
    String userName;
    String userEmailId;
    String review;   //excelent ,very good,good,unsatisfied
    String suggestion;
}
