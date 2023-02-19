package com.extrahand.chatservice.service;

import com.extrahand.chatservice.exception.ChatAlreadyExists;
import com.extrahand.chatservice.exception.ChatIsNotAvailable;
import com.extrahand.chatservice.model.Chat;
import com.extrahand.chatservice.model.Message;

import java.util.List;

public interface ChatsServiceI {
    public List<Message> findChatByVendorAndUserId(String vendorId,String userID) throws ChatIsNotAvailable;
    public List<Message> insertAMessageIntoAChat(String vendorId, String userID,Message message) throws ChatIsNotAvailable;
    public List<Message> createAChat(String vendorId,String vendorName, String userID,String userName) throws ChatAlreadyExists;
    public boolean deleteAChat(String vendorId,String userID) throws ChatIsNotAvailable;
    public List<Chat> getAllChat();
    public boolean deleteChatById(long chatId) throws ChatIsNotAvailable;
    public List<Chat> getUserChats(String userId);
    public List<Chat> getVendorChats(String userId);
}
