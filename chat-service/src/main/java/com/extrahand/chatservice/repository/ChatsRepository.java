package com.extrahand.chatservice.repository;

import com.extrahand.chatservice.model.Chat;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatsRepository extends MongoRepository<Chat,Long> {
    Chat findChatByVendorIdAndUserId(String vendorId, String userID);

    @Query("{userId:?0}")
    List<Chat> findChatByUserId(String userId);

    @Query("{vendorId:?0}")
    List<Chat> findChatByVendorId(String vendorId);
}
