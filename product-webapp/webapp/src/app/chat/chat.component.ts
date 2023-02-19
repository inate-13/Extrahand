import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { ChatServiceService } from '../chat/services/chat-service.service';
;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  private config:MatSnackBarConfig;
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start'; 
  messages:any;
  role:any=localStorage.getItem('role');
  flag=false;
  profile:any;
  profile2:any;
  contactList:any[]=[];
  imgsrc="/assets/chat-profile/profileImages.jpeg";

  @ViewChild('endOfChat')
  endOfChat!: ElementRef;

  constructor(private chatService:ChatServiceService,private _snackBar: MatSnackBar){
    this.config=new MatSnackBarConfig();
    this.config.duration=1000;
    this.getAllContacts();

    setInterval(() => {
      this.getMessages();
    }, 2000)
  
  }
  
  openSnackBar() {
    this._snackBar.open('"All mesages deleted', '', {
      horizontalPosition: this.horizontalPosition,
      duration: this.durationInSeconds * 1000,

    });
  }
  public open(message:string, duration?: number,action?:string){
    this.config=duration?Object.assign(this.config,{'duration':duration}):this.config;
    this._snackBar.open(message,action,this.config);
  }
  
 

  messageControl=new FormControl('');
  sendMessage(){
    let message=({
      'role':localStorage.getItem('role'),
      'messageTime':new Date().toLocaleString(),
      'message':this.messageControl.value
    });
    this.chatService.sendAMessage(message).subscribe(
      respo=>{
        this.messages=respo;
        this.scrollToBottom();
        this.messageControl.setValue('');
      })
  }


  
  showProfileChats(vendorId:any,userId:any){
    this.profile2=null;
    this.profile= this.contactList.filter(c=>(c.vendorId==vendorId && c.userId==userId));
    this.profile2=this.profile[0];
    this.chatService.vendorId=vendorId;
    this.chatService.userId=userId;
    this.profile=null;
    this.showprofile();
    this.getMessages();
  
  }


  showprofile(){
    if(this.flag==false){
      this.flag=true;
    }
  }


  getMessages(){
    this.chatService.getMessagesByVendorAndUserIDs().subscribe(
      respo=>{
        this.messages=respo;
        this.scrollToBottom();
      },
    )}

     clearchat(){
      this.chatService.deleteAllMessages().subscribe(
        respo=>{
        this.openSnackBar();
        this.getMessages();
        })
    }

    getAllMessages(){

    }

    getAllContacts(){
      this.chatService.getAllChats().subscribe(
        resp=>{
         this.contactList=resp;
         console.log(resp);
        })
       
    }

  scrollToBottom() {
    setTimeout(() => {
      if (this.endOfChat) {
        this.endOfChat.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

}
