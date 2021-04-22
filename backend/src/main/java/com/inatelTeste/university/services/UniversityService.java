package com.inatelTeste.university.services;

import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.interfaces.IUniversityService;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.repositories.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class UniversityService implements IUniversityService {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    UniversityRepository universityRepository;

    @Override
    public List<University> listar() {
        return universityRepository.findAll();
    }

    @Override
    public University salvar(UniversityDTO universityDTO) {

        University university = new University.UniversityBuilder(universityDTO).build();

        universityRepository.save(university);

        return  university;

    }

    @Override
    public University atualizar(UniversityDTO universityDTO) {
        return null;
    }

    @Override
    public University remover(UniversityDTO universityDTO) {

        University university = universityRepository.findById(universityDTO.getId());

        universityRepository.delete(university);

        return university;

    }

}
