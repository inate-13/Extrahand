package com.niit.extrahand.blogs.Controller;

import com.niit.extrahand.blogs.Model.Blogs;
import com.niit.extrahand.blogs.Model.Likes;
import com.niit.extrahand.blogs.Service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/extra-hand/blogs")
public class BlogController {

    @Autowired
private BlogService blogService;

    //http://localhost:7777/extrahand/blogs/add-blog
    @PostMapping("/add-blog")
public ResponseEntity<?> addBlog(@RequestBody Blogs blogs)
    {
return new ResponseEntity<>(blogService.addBlogs(blogs), HttpStatus.OK);
    }

    //http://localhost:7777/extrahand/blogs/get-blog-By-EmailId/abc@gmail.com
    @GetMapping("/get-blog-By-EmailId/{emailId}")
    public ResponseEntity<?> GetMyBlogsByEmailId(@PathVariable String emailId )
    {
return new ResponseEntity<>(blogService.getMyblogsByEmail(emailId),HttpStatus.OK);
    }

    //http://localhost:7777/extrahand/blogs/get-All-Blogs
    @GetMapping("/get-All-Blogs")
    public ResponseEntity<?> GetAllBlogs(){
return new ResponseEntity<>(blogService.getAllBlogs(),HttpStatus.OK);
    }

    //http://localhost:7777/extrahand/blogs/get-blog-By-BlogId/3
    @GetMapping("/get-blog-By-BlogId/{blogId}")
    public ResponseEntity<?> GetBlogById(@PathVariable int blogId)
    { return new ResponseEntity<>(blogService.getBlogById(blogId),HttpStatus.OK);}

    //http://localhost:7777/extrahand/blogs/delete-by-Id/3
    @DeleteMapping("/delete-by-Id/{blogId}")
    public ResponseEntity<?> DeletebyId(@PathVariable int blogId)
    {
        return new ResponseEntity<>(blogService.deleteById(blogId),HttpStatus.OK);
    }

    ////////////////////Likes///////////////////

//http://localhost:7777/extrahand/blogs/likes/3/3
@PostMapping("likes/{blogId}/{userId}")
    public ResponseEntity<?> dolikes(@PathVariable int blogId,@PathVariable int userId, @RequestBody Likes likes)
    {
        return new ResponseEntity<>(blogService.addLikes(blogId,likes,userId),HttpStatus.OK);
    }
 //   http://localhost:7777/extrahand/blogs/get-likes-dislikes/3/3
    @GetMapping("/get-likes-dislikes/{blogId}/{userId}")
    public ResponseEntity<?> GetLikesDislikes(@PathVariable int blogId,@PathVariable int userId)
    { return new ResponseEntity<>(blogService.likedislike(blogId,userId),HttpStatus.OK);}

    //   http://localhost:7777/extrahand/blogs/number-of-likes/3
    @GetMapping("/number-of-likes/{blogId}")
    public ResponseEntity<?> NumberOfLikes(@PathVariable int blogId)
    { return new ResponseEntity<>(blogService.noOfLikes(blogId),HttpStatus.OK);}

}
