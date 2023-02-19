package com.niit.extrahand.blogs.Service;

import com.niit.extrahand.blogs.Model.Comments;
import com.niit.extrahand.blogs.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    private SequenceGenerator sequenceGenerator;

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Comments addComents(Comments comments) {
        comments.setCommentId(sequenceGenerator.getSeqNumForComments(comments.SEQUENECE_NAME));
        return commentRepository.insert(comments);

    }

    @Override
    public List<Comments> getCommentsByBlogId(int blogId) {
        return commentRepository.getMyblogsByBlogId(blogId);
    }

    @Override
    public List<Comments> getCommentsByCommentId(int ParentCommentId) {
        return commentRepository.getMyblogsByCommentId((ParentCommentId));
    }
}
