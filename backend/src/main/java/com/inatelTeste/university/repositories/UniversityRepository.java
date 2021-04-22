package com.inatelTeste.university.repositories;

import com.inatelTeste.university.models.University;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniversityRepository extends MongoRepository<University, String> {

    University findById(Integer id);

}
