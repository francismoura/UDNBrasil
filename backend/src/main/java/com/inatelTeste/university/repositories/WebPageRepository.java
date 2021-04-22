package com.inatelTeste.university.repositories;

import com.inatelTeste.university.models.WebPage;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WebPageRepository extends MongoRepository<WebPage, String> {

    WebPage findById(Integer id);

}
