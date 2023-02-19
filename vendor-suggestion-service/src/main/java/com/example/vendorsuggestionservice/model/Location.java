package com.example.vendorsuggestionservice.model;

import lombok.*;
//import org.neo4j.ogm.annotation.GeneratedValue;
//import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Relationship;
import org.springframework.data.neo4j.core.schema.Id;
import org.neo4j.ogm.annotation.NodeEntity;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@NodeEntity
public class Location {
    @Id
    private int pincode;
    private String district;
}