package com.inatelTeste.university.services;

import com.inatelTeste.configurations.utils.FilterParams;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.interfaces.IUniversityService;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.repositories.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UniversityService implements IUniversityService {

    private static final String UDM_API = "http://universities.hipolabs.com/search?country=brazil";

    static RestTemplate restTemplate = new RestTemplate();

    @Autowired
    UniversityRepository universityRepository;

    @Override
    public String starter() {

        universityRepository.deleteAll();

        List<University> universities = new ArrayList<>();

        ResponseEntity<List<UniversityDTO>> rateResponse =
                restTemplate.exchange(UDM_API,
                        HttpMethod.GET, null, new ParameterizedTypeReference<>() {
                        });

        List<UniversityDTO> universityDTOS = rateResponse.getBody();

        if (universityDTOS != null && !universityDTOS.isEmpty()) {
            universityDTOS.forEach(universityDTO -> {
                universities.add(new University.UniversityBuilder(universityDTO).build());
            });
        }

        universities.forEach(university -> universityRepository.save(university));

        return "OK";

    }

    @Override
    public Page<University> listar(Pageable pageable,  String stringSearch) {
        return universityRepository.findByName(stringSearch, pageable);
    }

    @Override
    public Page<University> listar(Pageable pageable) {
        return universityRepository.findAll(pageable);
    }

    @Override
    public University salvar(UniversityDTO universityDTO) {

        University university = new University.UniversityBuilder(universityDTO).build();

        universityRepository.save(university);

        return university;

    }

    @Override
    public University atualizar(UniversityDTO universityDTO) {
        return null;
    }

    @Override
    public University remover(UniversityDTO universityDTO) {

        University university = new University();
        Optional<University> universityDb = universityRepository.findById(universityDTO.getId());

        if (universityDb.isPresent()) {
            university = universityDb.get();
        }

        universityRepository.delete(university);

        return university;

    }

}
