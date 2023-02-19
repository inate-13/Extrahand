package com.example.vendorsuggestionservice.repository;
import com.example.vendorsuggestionservice.model.Location;
import org.springframework.data.neo4j.repository.Neo4jRepository;
//import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends Neo4jRepository<Location,Integer> {


    @Query("MATCH (l:Location {district: $district}) RETURN l ")
    List<Location> findByCity(String district);

    @Query("MATCH (l:Location {pincode: $pincode}) RETURN l ")
    List<Location> findByPincode(int pincode);

      }





