import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { VendorServiceListUiComponent } from 'app/vendor-service-list-ui/vendor-service-list-ui.component';
import { BlogservicesService } from './blogservices.service';
import { ReadblogsComponent } from './readblogs/readblogs.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  constructor(private blogservice:BlogservicesService,public dialog: MatDialog,private _snackBar: MatSnackBar) {
this.UserOrVenor();   
this.BydefaultCards(); 
   }
   openSnackBar() {
    this._snackBar.open('Blog Uploded successfully', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,
  
    });
  }

  ngOnInit(): void {
  }
//role:string="Vendor"
SelectMenu:boolean=false;
bloguploadForm:boolean=false;
opneCardsofBlog:boolean=true;
DUbutton:boolean=false;

Role=localStorage.getItem('role');
UserOrVenor(){
  console.log(localStorage.getItem('role'))
  if(this.Role=="CONSUMER")
  {
    this.SelectMenu=false;
    this.bloguploadForm=false;
  }
  else if(this.Role=="VENDOR")
  {
this.SelectMenu=true;
this.bloguploadForm=false;
  }
}



  BlogForm=new FormGroup({
    "emailId":new FormControl(''),
    "vendorName":new FormControl(''),
    "uploadDate":new FormControl(''),
    "blogTitle":new FormControl(''),
    "blogSmallDescription":new FormControl(''),
    "blogContent":new FormControl(''),
    "blogImage":new FormControl('')
  })
//fetch from register

emailId=localStorage.getItem('email');
vendorName=localStorage.getItem('name');


  ValueSelectForm = new FormGroup({
    "Select":new FormControl('')
  })

  object:any;
  GetValueFromOption:string="";

BydefaultCards() {
  this.bloguploadForm=false;
  this.opneCardsofBlog=true;

  this.blogservice.GetAllBlogs().subscribe(
    response=>{
this.object=response;
console.log(this.object)
    }
  )
}

BlogServicemethod(){
  const currentDate = new Date();
    const a=formatDate(currentDate,'yyyy-MM-dd','en-US');
    this.BlogForm.patchValue({vendorName:this.vendorName,emailId:this.emailId,uploadDate:a})
  this.blogservice.Submitblog(this.BlogForm.value).subscribe(
    response=>{
     // alert('Blog Uploded successfully');
     this.openSnackBar();
      console.log(response);
      this.BydefaultCards(); 
    }
  )
}

  GetValue(){

   if(this.GetValueFromOption=="AllBlogs")
   {
     this.DUbutton=false;
    this.bloguploadForm=false;
    this.opneCardsofBlog=true;
     this.blogservice.GetAllBlogs().subscribe(
       response=>{
this.object=response;
       }
     )
   }
   else if(this.GetValueFromOption=="MyBlogs"){
    this.opneCardsofBlog=true;
    this.bloguploadForm=false;
    this.DUbutton=true;

     this.blogservice.GetMyBlogs(this.emailId).subscribe(
       response=>{
         this.object=response;
       }
     )
   }
   else if(this.GetValueFromOption=="UpoadBlogs"){
    this.bloguploadForm=true;
    this.opneCardsofBlog=false;
   }
  }

//to delete blog
deleteBlogById(blogIdd:any){
this.blogservice.DeleteBlogById(blogIdd).subscribe(
  response=>{
    this.GetValue();
  }
)}


  //for read the blog
  openDialog(Bid:any) {
    console.log(Bid)
    
    this.blogservice.dataany=Bid;

    this.dialog.open(ReadblogsComponent,{width:"90%"}
   ).afterClosed().subscribe(responseee => {
   });
  }
   


  /*
  openDialog() {
    const dia=this.dialog.open(ReadblogsComponent,{ data: {dataofId:this.blogIgfromcards}});
//    dia.afterClosed().subscribe(data => {})

  }
  */

  // BlogServicemethod(){
  //   const currentDate = new Date();
  //   const a=formatDate(currentDate,'yyyy-MM-dd','en-US');
  //   this.BlogForm.patchValue({vendorName:this.vendorName,emailId:this.emailId,uploadDate:a})
  //   console.log(this.BlogForm.value);
  //   this.blogservice.Submitblog(this.BlogForm.value).subscribe(
  //     response=>{
  //      // alert('Blog Uploded successfully');
  //      this.openSnackBar();
  //       console.log(response);
  //       this.BydefaultCards();
  //     }
  //   )
  // }
  }


