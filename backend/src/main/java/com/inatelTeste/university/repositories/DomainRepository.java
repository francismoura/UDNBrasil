package com.inatelTeste.university.repositories;

import com.inatelTeste.university.models.Domain;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DomainRepository extends MongoRepository<Domain, String> {

    Domain findById(Integer id);

}
