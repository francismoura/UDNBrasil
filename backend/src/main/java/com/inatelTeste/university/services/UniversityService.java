package com.inatelTeste.university.services;

import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.interfaces.IUniversityService;
import com.inatelTeste.university.models.QUniversity;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.repositories.UniversityRepository;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
public class UniversityService implements IUniversityService {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    UniversityRepository universityRepository;

    private final QUniversity qUniversity = new QUniversity("university");

    @Override
    public Page<University> listar(Integer page, Integer size, String sortBy, String filterParams) {

        Pageable pageable = PageRequest.of(0, 20, Sort.by(sortBy));

        Predicate predicate = qUniversity.name.containsIgnoreCase(filterParams);

        return universityRepository.findAll(predicate, pageable);

    }

    @Override
    public University salvar(UniversityDTO universityDTO) {

        University university = new University.UniversityBuilder(universityDTO).build();

        return universityRepository.save(university);

    }

    @Override
    public University atualizar(UniversityDTO universityDTO) {
        

        return null;
    }

    @Override
    public University remover(String id) {

        University university = new University();
        Optional<University> universityDb = universityRepository.findById(id);

        if (universityDb.isPresent()) {
            university = universityDb.get();
        }

        universityRepository.delete(university);

        return university;

    }

}
