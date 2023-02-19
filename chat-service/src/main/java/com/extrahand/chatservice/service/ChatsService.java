package com.extrahand.chatservice.service;

import com.extrahand.chatservice.exception.ChatAlreadyExists;
import com.extrahand.chatservice.exception.ChatIsNotAvailable;
import com.extrahand.chatservice.model.Chat;
import com.extrahand.chatservice.model.Message;
import com.extrahand.chatservice.repository.ChatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class ChatsService implements ChatsServiceI{
    private ChatsRepository chatsRepository;

    @Autowired
    public ChatsService(ChatsRepository chatsRepository) {
        this.chatsRepository = chatsRepository;
    }

    public List<Chat> getUserChats(String userId){
        return chatsRepository.findChatByUserId(userId);
    }

    public List<Chat> getVendorChats(String vendorId){
        return chatsRepository.findChatByVendorId(vendorId);
    }

    @Override
    public List<Message> findChatByVendorAndUserId(String vendorId, String userID) throws ChatIsNotAvailable {
        if(chatsRepository.existsById(chatsRepository.findChatByVendorIdAndUserId(vendorId, userID).getChatId())){
            return chatsRepository.findChatByVendorIdAndUserId(vendorId, userID).getMessageList();
        }
        else{
            throw new ChatIsNotAvailable();
        }
    }

    @Override
    public List<Message> insertAMessageIntoAChat(String vendorId, String userID,Message message) throws ChatIsNotAvailable {
        if(chatsRepository.existsById(chatsRepository.findChatByVendorIdAndUserId(vendorId, userID).getChatId())){
            Chat chat= chatsRepository.findChatByVendorIdAndUserId(vendorId, userID);
            List<Message> messageList=chat.getMessageList();
            messageList.add(message);
            chat.setMessageList(messageList);
            chatsRepository.save(chat);
            return messageList;
        }
        else{
            throw new ChatIsNotAvailable();
        }
    }

    @Override
    public List<Message> createAChat(String vendorId,String vendorName, String userID,String userName) throws ChatAlreadyExists {
        System.out.println("****************Create called**********************");
        if(chatsRepository.findChatByVendorIdAndUserId(vendorId, userID)==null){
            chatsRepository.insert(new Chat(new Random().nextLong(),vendorId,vendorName,userID,userName,new ArrayList<Message>()));
            return chatsRepository.findChatByVendorIdAndUserId(vendorId, userID).getMessageList();
        }
        else{
            return chatsRepository.findChatByVendorIdAndUserId(vendorId, userID).getMessageList();
        }
    }

    @Override
    public boolean deleteAChat(String vendorId, String userID) throws ChatIsNotAvailable {
        if(chatsRepository.existsById(chatsRepository.findChatByVendorIdAndUserId(vendorId, userID).getChatId())){
//            chatsRepository.deleteById(chatsRepository.findChatByVendorIdAndUserId(vendorId, userID).getChatId());
            Chat chat= chatsRepository.findChatByVendorIdAndUserId(vendorId,userID);
            chat.getMessageList().clear();
            chatsRepository.save(chat);
            return true;
        }
        else{
            throw new ChatIsNotAvailable();
        }
    }

    @Override
    public List<Chat> getAllChat() {
        return chatsRepository.findAll();
    }

    @Override
    public boolean deleteChatById(long chatId) throws ChatIsNotAvailable {
        if(chatsRepository.existsById(chatId)){
            chatsRepository.deleteById(chatId);
            return true;
        }
        else{
            throw new ChatIsNotAvailable();
        }
    }


}
