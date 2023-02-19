package com.niit.extrahand.blogs.repository;

import com.niit.extrahand.blogs.Model.Blogs;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface Blogrepository extends MongoRepository<Blogs,Integer> {

    @Query("{'emailId':?0}")
    public abstract List<Blogs> getMyblogsByEmail(String Email);
}
