package com.niit.extrahand.blogs.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Comments {

    @Transient
    public static final String SEQUENECE_NAME="blog_comments";


    @Id
    private int commentId;

    private int parentCommentId;
    private String body,userName;
    private int userId;
    private int blogId;


}
