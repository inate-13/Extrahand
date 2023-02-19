package com.niit.extrahand.blogs.Service;

import com.niit.extrahand.blogs.Model.Blogs;
import com.niit.extrahand.blogs.Model.Likes;

import java.util.List;

public interface BlogService {

    public abstract Blogs addBlogs(Blogs blogs);

    public abstract List<Blogs> getMyblogsByEmail(String Email);

    public abstract List<Blogs> getAllBlogs();

    public abstract Blogs getBlogById(int BlogId);

    public abstract boolean deleteById(int BlogId);

    //////////////Likes////////////

    public abstract Blogs addLikes(int blogId, Likes likes,int userId);

    public abstract Boolean likedislike(int blogId,int userId);

    public abstract int noOfLikes(int blogId);

}
