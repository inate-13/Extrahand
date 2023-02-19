package com.extrahand.chatservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Chat {
    @Id
    @Generated
    private long chatId;
    private String vendorId;
    private String vendorName;
    private String userId;
    private String userName;
    private List<Message> messageList;

}
