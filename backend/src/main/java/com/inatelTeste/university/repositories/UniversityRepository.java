package com.inatelTeste.university.repositories;

import com.inatelTeste.university.models.University;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UniversityRepository extends MongoRepository<University, String> {

    Optional<University> findById(String id);

}