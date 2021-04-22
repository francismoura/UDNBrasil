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

    private static final String UDM_API = "http://universities.hipolabs.com/search?country=brazil";

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    UniversityRepository universityRepository;

    @Override
    public List<University> list() {

//        List<University> universities = new ArrayList<>();
//
//        ResponseEntity<List<UniversityDTO>> rateResponse =
//                restTemplate.exchange(UDM_API,
//                        HttpMethod.GET, null, new ParameterizedTypeReference<>() {
//                        });
//        List<UniversityDTO> universityDTOS = rateResponse.getBody();
//
//        if (universityDTOS != null && !universityDTOS.isEmpty()) {
//            universityDTOS.forEach(universityDTO -> {
//                universities.add(new University.UniversityBuilder(universityDTO).build());
//            });
//        }

        return this.universityRepository.findAll();

    }

    @Override
    public University create(UniversityDTO universityDTO) {
        return null;
    }

    @Override
    public University update(UniversityDTO universityDTO) {
        return null;
    }

    @Override
    public University delete(UniversityDTO universityDTO) {
        return null;
    }

}
