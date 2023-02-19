package com.niit.extrahand.blogs.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Blogs {

    @Transient
    public static final String SEQUENECE_NAME="vendor_uploadBlogs";


    @Id
    private int blogId;

    private String emailId,vendorName,uploadDate,blogTitle,blogSmallDescription,blogContent,blogImage;

    private List<Likes> Likes;


}
