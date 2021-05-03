package com.inatelTeste.university.repositories;

import com.inatelTeste.configurations.utils.FilterParams;
import com.inatelTeste.university.models.University;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UniversityRepository extends MongoRepository<University, String> {

    Optional<University> findById(String id);

    Page<University> findByName(String name, Pageable pageable);

    Page<University> findAll( Pageable pageable);
}