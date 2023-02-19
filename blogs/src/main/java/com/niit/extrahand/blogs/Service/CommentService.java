package com.niit.extrahand.blogs.Service;

import com.niit.extrahand.blogs.Model.Comments;

import java.util.List;

public interface CommentService {

        Comments addComents(Comments comments);

        List<Comments> getCommentsByBlogId(int blogId);

        List<Comments> getCommentsByCommentId(int ParentCommentId);
}
