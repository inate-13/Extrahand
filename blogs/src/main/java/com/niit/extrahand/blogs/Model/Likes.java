package com.niit.extrahand.blogs.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Likes {

    @Id
    private int userId;
}
