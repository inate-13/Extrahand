package com.niit.extrahand.servicesprovidesservices.service;

import com.niit.extrahand.servicesprovidesservices.model.sequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

@Service
public class SequenceGenerator {

    @Autowired
    private MongoOperations mongoOperations;


    public int getSequNum(String sequenceName)
    {
        Query query=new Query(Criteria.where("ServiceId").is(sequenceName));
        Update update=new Update().inc("num",1);

        sequence sequence=mongoOperations
                .findAndModify(query,
                        update,options().returnNew(true).upsert(true),
                        com.niit.extrahand.servicesprovidesservices.model.sequence.class);
                        //com.extrahand.complaintservice.Model.sequence.class);

        return !Objects.isNull(sequence) ? sequence.getNum() :1;
    }

}
