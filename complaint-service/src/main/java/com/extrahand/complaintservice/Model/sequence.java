package com.extrahand.complaintservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "seq")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class sequence {

    @Id
    private String id;
    private int num;

}
