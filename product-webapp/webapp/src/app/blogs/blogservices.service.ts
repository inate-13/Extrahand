import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogservicesService {

  constructor(private httpClient:HttpClient) { }

  
  dataany:any;

  base_url=`${environment.API_URL}/extra-hand/blogs/add-blog`;

  Submitblog(Blog:any)
  {
    return this.httpClient.post(this.base_url,Blog);
  }

  

  base_url_AllBlogs=`${environment.API_URL}/extra-hand/blogs/get-All-Blogs`;
  GetAllBlogs()
  {
return this.httpClient.get(this.base_url_AllBlogs);
  }

  Base_url_Myblogs=`${environment.API_URL}/extra-hand/blogs/get-blog-By-EmailId/`;
  GetMyBlogs(Email:any)
  {
    return this.httpClient.get(this.Base_url_Myblogs+Email);
  }

  Base_url_blogById=`${environment.API_URL}/extra-hand/blogs/get-blog-By-BlogId/`;
  GetBlogById(Id:any)
  {
    return this.httpClient.get(this.Base_url_blogById+Id);
  }

Base_url_deleteblog=`${environment.API_URL}/extra-hand/blogs/delete-by-Id/`;
DeleteBlogById(Id:any)
{
  return this.httpClient.delete(this.Base_url_deleteblog+Id);
}

////////////////Comments/////////////////
parentCommentId=0;

Base_url_CommentsByBlogId=`${environment.API_URL}/extra-hand/blogs/comments/get-Comments-By-blogId/`
GetCommentsByBlogId(Id:any)
{
  return this.httpClient.get(this.Base_url_CommentsByBlogId+Id);
}

//////
Base_url_Sub_Comments=`${environment.API_URL}/extra-hand/blogs/comments/get-Comments-By-ParentCommentId/`;
GetSubComments(Id:any)
{
  return this.httpClient.get(this.Base_url_Sub_Comments+Id);
}

Base_url_cooment_add=`${environment.API_URL}/extra-hand/blogs/comments/add-comments`;
AddComments(CommentObj:any)
{
  return this.httpClient.post(this.Base_url_cooment_add,CommentObj);
}
////likes

Base_url_likes=`${environment.API_URL}/extra-hand/blogs/likes/`
LikeOrDisLike(LikeObj:any,blogId:any,userId:any)
{
  return this.httpClient.post(this.Base_url_likes+blogId+"/"+userId,LikeObj);
}
//to find already liked or not
Base_url_Already_liked=`${environment.API_URL}/extra-hand/blogs/get-likes-dislikes/`
AlreadyLikedOrNot(blogId:any,userId:any){
  return this.httpClient.get(this.Base_url_Already_liked+blogId+"/"+userId);
}
//to find number of likes
Base_url_number_likes=`${environment.API_URL}/extra-hand/blogs/number-of-likes/`
NumberOfLikes(blogId:any){
  return this.httpClient.get(this.Base_url_number_likes+blogId);
}

}

