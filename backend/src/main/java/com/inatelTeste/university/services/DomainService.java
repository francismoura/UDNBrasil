package com.inatelTeste.university.services;

import com.inatelTeste.university.interfaces.IDomainService;
import com.inatelTeste.university.models.Domain;
import com.inatelTeste.university.repositories.DomainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DomainService implements IDomainService {

    @Autowired
    private DomainRepository domainRepository;

    @Override
    public Domain findById(Integer id) {
        return domainRepository.findById(id);
    }

}
