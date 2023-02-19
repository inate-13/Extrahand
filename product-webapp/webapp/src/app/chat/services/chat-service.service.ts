import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private httpClient:HttpClient) { }

  baseUrl=`${environment.API_URL}/extra-hand/chat`;
  regester_service_url=`${environment.API_URL}/extra-hand/e1/get-name/`;

  
  userId:any;
  vendorId:any;
  vendorName:any;
  userName:any;

  getMessagesByVendorAndUserIDs(){
    
    return this.httpClient.get(this.baseUrl+"/find-chat/"+this.vendorId+"/"+this.userId);
  }

  getChatsByUserId(){
    
  }

  sendAMessage(msg:any){
    return this.httpClient.post(this.baseUrl+"/insert-message/"+this.vendorId+"/"+this.userId,msg);
  }

  deleteAllMessages(){
    return this.httpClient.delete(this.baseUrl+"/delete/"+this.vendorId+"/"+this.userId);
  }

  getAllChats(){
     let id=localStorage.getItem('email')
    if(localStorage.getItem('role')=="VENDOR"){
      return this.httpClient.get<any[]>(this.baseUrl+"/vendor-chats/"+id)
    }
    else{
      return this.httpClient.get<any[]>(this.baseUrl+"/user-chats/"+id);
    }
  }

  
  getName(){
    this.userId=localStorage.getItem('email');
    return this.httpClient.get(this.regester_service_url+this.userId);
  }

  createNewChat(vendorId:any,vendorName:any,userId:any,userName:any){
    this.vendorId=vendorId;
    this.vendorName=vendorName;
    this.userId=userId;
    this.userName=userName;
    console.log(1+this.userId+2+this.userName.value+3+vendorId+4+vendorName);
    return this.httpClient.post(this.baseUrl+"/create/"+vendorId+"/"+vendorName+"/"+this.userId+"/"+this.userName,null);
  }
}

