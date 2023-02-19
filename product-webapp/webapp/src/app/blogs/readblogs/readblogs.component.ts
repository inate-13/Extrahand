import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlogservicesService } from '../blogservices.service';
import { ActiveCommentInterface } from './activeCommentInterface';

@Component({
  selector: 'app-readblogs',
  templateUrl: './readblogs.component.html',
  styleUrls: ['./readblogs.component.css']
})
export class ReadblogsComponent implements OnInit {

  activecommentinterface: ActiveCommentInterface | null =null;

  @Output() SetActivecomments =new EventEmitter<ActiveCommentInterface | null>(); 

  datafrompa:any;
  constructor( @Inject(MAT_DIALOG_DATA) public data:any,private blogService:BlogservicesService) { 
   
   this.getData();
  }

  ngOnInit(): void {
  }

  reciveData:any;
  cardData:any;
  blogId:any;
  getData(){
this.reciveData=this.blogService.dataany;
console.log(this.reciveData);

this.blogService.GetBlogById(this.reciveData).subscribe(
  response=>{
      console.log(response)
      this.cardData=response;
      console.log(this.cardData)
      this.blogId=this.cardData.blogId;
      this.AlreadyLikedOrNot(this.blogId,this.userIda);
      this.TofindnumberOfLikes(this.blogId);
      //true to like karel nathi  
  }
)
}

////////////////////////Comments//////////////
OpenCommentBox:boolean=false;
parentCommentId=0;
CommentsofBlog:any;
getCommentsByBlogId(bloggId:any){
  this.OpenCommentBox=true;
this.blogService.GetCommentsByBlogId(bloggId).subscribe(
  response=>{
    console.log(response);
    this.CommentsofBlog=response;
    
  }
)
}
SubCommentsOfBlog:any;
OpenSubCommentBox:boolean=false;
/*
getSubComments(ParentCommentId:any){
this.blogService.GetSubComments(ParentCommentId).subscribe(
  response=>{
    this.SubCommentsOfBlog=true;
    console.log(response);
    this.SubCommentsOfBlog=response;
    alert("B")
  }
)
}

setActivecomment(activecomment:ActiveCommentInterface | null):void{
this.activecommentinterface=activecomment;  
}
*/


/////////////////Add Comment /////////////////////
CommentForm= new FormGroup({
  "body":new FormControl(''),
  "userName":new FormControl(''),
  "userId":new FormControl(''),
  "blogId":new FormControl(''),
})
//fetch from registratio
hide:boolean=false;
userName=localStorage.getItem('name');
userIda:any=7;
CommentObJ:any;
CommentService(blogId:any){
  this.CommentForm.patchValue({blogId:blogId,userName:this.userName,userId:this.userIda})
  console.log(this.CommentForm.value);
  this.CommentObJ=this.CommentForm.value;
  this.addComment(this.CommentObJ);
}
TocalledFunction:any;
addComment(CommentObject:any){
  this.blogService.AddComments(CommentObject).subscribe(
    response=>{
      console.log(response);
      this.TocalledFunction=response
      this.getCommentsByBlogId(this.TocalledFunction.blogId);

    }
  )
}

//likes
LikeForm= new FormGroup({
  
  "userId":new FormControl('')
  });
LikeObj:any;
LikeLenght:any;
LikeSize:any;

LikesOrDislike(blogId:any,userId:any){
  this.LikeForm.patchValue({userId:userId})
  this.LikeObj=this.LikeForm.value;
  console.log(this.LikeObj);

  this.blogService.LikeOrDisLike(this.LikeObj,blogId,userId).subscribe(
    response=>{
      console.log(response);
      this.LikeLenght=response;
      this.LikeSize=this.LikeLenght.likes.length
      console.log(this.LikeSize);
      this.AlreadyLikedOrNot(blogId,userId);
      //true to like karel nathi  
    
    }
  )
}

LikedOrNot:any=true;

Liked:boolean=false;
NotLiked:boolean=true;
AlreadyLikedOrNot(blogId:any,userId:any){
  this.blogService.AlreadyLikedOrNot(blogId,userId).subscribe(
    response=>{
      console.log(response);
      this.LikedOrNot=response;
  if(this.LikedOrNot==true)
    {
      this.Liked=false;
      this.NotLiked=true;
    }
  else
    {
      this.Liked=true;
      this.NotLiked=false;
    }
             }
  )
}

//to find number of likes

TofindnumberOfLikes(blogId:any){
  this.blogService.NumberOfLikes(blogId).subscribe(
    response=>{
      console.log(response);
      this.LikeSize=response;
    }
  )
}

}
