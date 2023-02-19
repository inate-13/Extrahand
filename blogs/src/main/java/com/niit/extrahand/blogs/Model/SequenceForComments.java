package com.niit.extrahand.blogs.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "comment")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class SequenceForComments {


    @Id
    private String id;
    private int num;

}
