package com.extrahand.chatservice.controller;

import com.extrahand.chatservice.exception.ChatAlreadyExists;
import com.extrahand.chatservice.exception.ChatIsNotAvailable;
import com.extrahand.chatservice.model.Message;
import com.extrahand.chatservice.service.ChatsServiceI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Path;

@RestController
@RequestMapping("/extra-hand/chat")
// http://localhost:8080/extra-hand/chat/
public class ChatController {
    private ChatsServiceI chatsServiceI;

    @Autowired
    public ChatController(ChatsServiceI chatsServiceI) {
        this.chatsServiceI = chatsServiceI;
    }

    @PostMapping("/create/{vendorId}/{vendorName}/{userId}/{userName}")
    public ResponseEntity<?> createAChat(@PathVariable String vendorId, @PathVariable String userId, @PathVariable String vendorName, @PathVariable String userName) throws ChatAlreadyExists {
        return new ResponseEntity<>(chatsServiceI.createAChat(vendorId,vendorName,userId,userName), HttpStatus.CREATED);
    }

    @GetMapping("/get-chats")
    public ResponseEntity<?> getAllChats(){
        return new ResponseEntity<>(chatsServiceI.getAllChat(), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{vendorId}/{userId}")
    public ResponseEntity<?> deleteAChat(@PathVariable String vendorId, @PathVariable String userId) throws ChatIsNotAvailable {
        return new ResponseEntity<>(chatsServiceI.deleteAChat(vendorId, userId), HttpStatus.CREATED);
    }

    @PostMapping("/insert-message/{vendorId}/{userId}")
    public ResponseEntity<?> insertAMessageIntoAChat(@PathVariable String vendorId, @PathVariable String userId, @RequestBody Message message) throws ChatIsNotAvailable {
        return new ResponseEntity<>(chatsServiceI.insertAMessageIntoAChat(vendorId,userId,message), HttpStatus.CREATED);
    }

    @GetMapping("/find-chat/{vendorId}/{userId}")
    public ResponseEntity<?> findChatByUserIdAndVendorID(@PathVariable String vendorId, @PathVariable String userId) throws ChatIsNotAvailable {
        return new ResponseEntity<>(chatsServiceI.findChatByVendorAndUserId(vendorId, userId), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete-chat/{chatID}")
    public ResponseEntity<?> deleteChatById(@PathVariable long chatId) throws ChatIsNotAvailable {
        return new ResponseEntity<>(chatsServiceI.deleteChatById(chatId), HttpStatus.OK);
    }

    @GetMapping("/user-chats/{userId}")
    public ResponseEntity<?> getAllUserChats(@PathVariable String userId){
        return new ResponseEntity<>(chatsServiceI.getUserChats(userId), HttpStatus.OK);
    }

    @GetMapping("/vendor-chats/{vendorId}")
    public ResponseEntity<?> getAllVendorChats(@PathVariable String vendorId){
        return new ResponseEntity<>(chatsServiceI.getVendorChats(vendorId), HttpStatus.OK);
    }
}
