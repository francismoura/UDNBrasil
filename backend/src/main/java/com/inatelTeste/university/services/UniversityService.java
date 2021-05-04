package com.inatelTeste.university.services;

import com.inatelTeste.configurations.utils.FilterParams;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.interfaces.IUniversityService;
import com.inatelTeste.university.models.QUniversity;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.repositories.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class UniversityService implements IUniversityService {

    private static final String URL_API = "http://universities.hipolabs.com/search?country=brazil";

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    UniversityRepository universityRepository;

    @Override
    public String starter() {

        universityRepository.deleteAll();

        List<University> universities = new ArrayList<>();

        ResponseEntity<University[]> responseEntity =
                restTemplate.getForEntity(URL_API, University[].class);

        if (responseEntity.getBody() != null) {
            universities = Arrays.asList(responseEntity.getBody());
        }

        List<University> finalListUniversities = checkDuplicateItems(universities);

        //save in mongoDb
        finalListUniversities.forEach(university -> universityRepository.save(university));

        return "OK";

    }

    @Override
    public Page<University> listar(FilterParams searchString, Pageable pageable) {

        QUniversity qUniversity = new QUniversity("university");

        String search = searchString.getSearchString();

        return search.equals("") ?
                universityRepository.findAll(pageable) :
                universityRepository.findAll(qUniversity.name.containsIgnoreCase(search), pageable);

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
    public University remover(UniversityDTO universityDTO) {

        University university = new University();
        Optional<University> universityDb = universityRepository.findById(universityDTO.getId());

        if (universityDb.isPresent()) {
            university = universityDb.get();
        }

        universityRepository.delete(university);

        return university;

    }

    //remove items duplicados
    private List<University> checkDuplicateItems(List<University> universities) {

        List<String> universitiesList = new ArrayList<>();
        List<University> finalList = new ArrayList<>();

        for (University university : universities) {

            if (!universitiesList.contains(university.getName())) {

                finalList.add(university);
                universitiesList.add(university.getName());

            }

        }

        return finalList;

    }

}
