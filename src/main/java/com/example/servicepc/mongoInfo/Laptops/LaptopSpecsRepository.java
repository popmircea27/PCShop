package com.example.servicepc.mongoInfo.Laptops;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface LaptopSpecsRepository extends MongoRepository<LaptopInfo, ObjectId> {

    @Query("{ 'id': ?0 }")
    Optional<LaptopInfo> findByCustomId(int id);
}
