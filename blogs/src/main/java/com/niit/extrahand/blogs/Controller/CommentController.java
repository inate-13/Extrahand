package com.niit.extrahand.blogs.Controller;

import com.niit.extrahand.blogs.Model.Comments;
import com.niit.extrahand.blogs.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/extra-hand/blogs/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    //http://localhost:7777/extrahand/blogs/comments/add-comments
    @PostMapping("/add-comments")
    public ResponseEntity<?> addComments(@RequestBody Comments comments)
    {return new ResponseEntity<>(commentService.addComents(comments), HttpStatus.OK);}

    //http://localhost:7777/extrahand/blogs/comments/get-Comments-By-blogId/{blogId}
    @GetMapping("/get-Comments-By-blogId/{blogId}")
    public ResponseEntity<?> getCommentdByblogId(@PathVariable int blogId)
    {
        return new ResponseEntity<>(commentService.getCommentsByBlogId(blogId),HttpStatus.OK);
    }

    //http://localhost:7777/extrahand/blogs/comments/get-Comments-By-ParentCommentId/2
    @GetMapping("/get-Comments-By-ParentCommentId/{ParentCommentId}")
    public ResponseEntity<?> getCommentdByCommentId(@PathVariable int ParentCommentId)
    {
        return new ResponseEntity<>(commentService.getCommentsByCommentId(ParentCommentId),HttpStatus.OK);
    }
}
