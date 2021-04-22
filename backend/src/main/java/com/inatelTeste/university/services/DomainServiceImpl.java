package com.inatelTeste.university.services;

import com.inatelTeste.university.interfaces.DomainService;
import com.inatelTeste.university.models.Domain;
import com.inatelTeste.university.repositories.DomainRepository;
import com.inatelTeste.university.repositories.UniversityRepository;
import com.inatelTeste.university.repositories.WebPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Service;

@Service
public class DomainServiceImpl implements DomainService {

    @Autowired
    private DomainRepository domainRepository;

    @Override
    public Domain findById(Integer id) {
        return domainRepository.findById(id);
    }

}
