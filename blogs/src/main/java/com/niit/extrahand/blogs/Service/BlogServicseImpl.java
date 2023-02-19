package com.niit.extrahand.blogs.Service;

import com.niit.extrahand.blogs.Model.Blogs;
import com.niit.extrahand.blogs.Model.Likes;
import com.niit.extrahand.blogs.repository.Blogrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlogServicseImpl implements BlogService {

    @Autowired
    private Blogrepository blogrepository;

    @Autowired
    private SequenceGenerator sequenceGenerator;


    @Override
    public Blogs addBlogs(Blogs blogs) {
        blogs.setBlogId(sequenceGenerator.getSequNum(blogs.SEQUENECE_NAME));
        Blogs blogs1 = new Blogs(blogs.getBlogId(), blogs.getEmailId(), blogs.getVendorName(), blogs.getUploadDate(),
                blogs.getBlogTitle(), blogs.getBlogSmallDescription(), blogs.getBlogContent(), blogs.getBlogImage(), new ArrayList<Likes>());
        return blogrepository.insert(blogs1);
    }

    @Override
    public List<Blogs> getMyblogsByEmail(String Email) {
        return blogrepository.getMyblogsByEmail(Email);
    }

    @Override
    public List<Blogs> getAllBlogs() {
        return blogrepository.findAll();
    }

    @Override
    public Blogs getBlogById(int BlogId) {
        return blogrepository.findById(BlogId).get();
    }

    @Override
    public boolean deleteById(int BlogId) {

        if (blogrepository.findById(BlogId).isPresent()) {
            Blogs blogs = blogrepository.findById(BlogId).get();
            blogrepository.delete(blogs);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public Blogs addLikes(int blogId, Likes likes, int userId) {

        if (blogrepository.findById(blogId).isPresent()) {
            Blogs blogs = blogrepository.findById(blogId).get();
            System.out.println(blogs);
            List<Likes> likes1 = blogs.getLikes();

            if (likes1 != null) {
                int temp = 0;
                for (int i = 0; i < likes1.size(); i++) {
                    if (likes1.get(i).getUserId() == userId) {
                        temp = 1;
                    }
                }

                if (temp == 1) {

                    Likes liketemp = likes1.stream().filter(pr -> pr.getUserId() == (userId)).findAny().get();
                    if (liketemp != null) {
                        likes1.remove(liketemp);
                        blogrepository.save(blogs);
                    }
                    return blogs;
                } else {
                    Likes likes2 = new Likes(likes.getUserId());
                    likes1.add(likes2);
                    blogrepository.save(blogs);
                    return blogs;
                }
            } else {
                Likes likes2 = new Likes(likes.getUserId());
                likes1.add(likes2);
                blogrepository.save(blogs);
                return blogs;
            }
        } else {
            return null;
        }
    }

    @Override
    public Boolean likedislike(int blogId, int userId) {
//male to (already like)  false nomale to true
        boolean value = true;
        if (blogrepository.findById(blogId).isPresent()) {
            Blogs blogs = blogrepository.findById(blogId).get();
            System.out.println(blogs);
            List<Likes> likes1 = blogs.getLikes();

            int temp = 2;

            if (likes1 != null) {
                for (int i = 0; i < likes1.size(); i++) {
                    if (likes1.get(i).getUserId() == userId) {
                        temp = 0;
                        value = false;
                    }
                }
                if (temp != 0) {
                    value = true;
                }
            } else {
                value = true;
            }
            return value;
        } else {
            return null;
        }

    }

    @Override
    public int noOfLikes(int blogId)
    {
        int number=0;
        if (blogrepository.findById(blogId).isPresent()) {
            Blogs blogs = blogrepository.findById(blogId).get();
            System.out.println(blogs);
            List<Likes> likes1 = blogs.getLikes();
number=likes1.size();
        }
        return number;
    }
}

