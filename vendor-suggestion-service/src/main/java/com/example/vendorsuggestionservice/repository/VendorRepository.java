package com.example.vendorsuggestionservice.repository;

import com.example.vendorsuggestionservice.model.Vendor;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
//import org.springframework.data.neo4j.annotation.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VendorRepository extends Neo4jRepository<Vendor,String> {

    @Query("MATCH (v:Vendor {serviceName: $serviceName}) RETURN v ")
    public List<Vendor> findByVendorProfession(String serviceName);

    @Query("MATCH (v:Vendor {serviceId: $serviceId}),(l:Location {pincode: $pincode}) CREATE(v)-[:from]->(l)")
    void createVendorLocationRelationship(String serviceId,int pincode);

    @Query("MATCH (v:Vendor {district: $district}) RETURN v ")
    public List<Vendor> findByVendorLocation(String district);

    @Query("MATCH (v:Vendor {pincode: $pincode}) RETURN v ")
    public List<Vendor> findByPincode(int pincode);

    @Query("MATCH (v:Vendor {vendorEmailId: $vendorEmailId}) RETURN v ")
    public List<Vendor> findByVendorEmailId(String vendorEmailId);

    @Query("MATCH (v:Vendor {vendorEmailId: $vendorEmailId}) RETURN true ")
    public Boolean existByVendorEmailId(String vendorEmailId);

    @Query("MATCH (v:Vendor {serviceId: $serviceId})-[r:from]-> () DELETE r")
    public void deleteRelationship(String serviceId);
      }

//MATCH (v:Vendor {serviceId: $serviceId})<-[r:from]-() DELETE r
////MATCH (n {name: 'Andy'})-[r:KNOWS]->() DELETE r