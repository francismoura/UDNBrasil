package com.inatelTeste.university.services;

import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.interfaces.IUniversityService;
import com.inatelTeste.university.models.University;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class UniversityService implements IUniversityService {

    private static final String UDM_API = "http://universities.hipolabs.com/search?country=brazil";
    @Autowired
    private RestTemplate restTemplate;

    @Override
    public List<University> listar() {

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

        return universities;

    }

}
