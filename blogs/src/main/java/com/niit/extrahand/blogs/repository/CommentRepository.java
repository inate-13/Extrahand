package com.niit.extrahand.blogs.repository;

import com.niit.extrahand.blogs.Model.Blogs;
import com.niit.extrahand.blogs.Model.Comments;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CommentRepository extends MongoRepository<Comments,Integer> {


    @Query("{'blogId':?0, 'parentCommentId':0 }")
    public abstract List<Comments> getMyblogsByBlogId(int blogId);

    @Query("{'parentCommentId':?0}")
    public abstract List<Comments> getMyblogsByCommentId(int parentCommentId);
}
