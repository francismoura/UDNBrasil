package com.inatelTeste.university.controllers;

import com.inatelTeste.configurations.components.EnviromentVariables;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping(value= "/api/universidades/externa")
public class UniversityExternalController {

    private static final String UDM_API = "http://universities.hipolabs.com/search?country=brazil";

    static RestTemplate restTemplate = new RestTemplate();

    @GetMapping(value = "/listar")
    public ResponseEntity<List<Object>> listar() {

        ResponseEntity<List<Object>> rateResponse =
                restTemplate.exchange(UDM_API,
                        HttpMethod.GET, null, new ParameterizedTypeReference<>() {
                        });

        List<Object> universities = rateResponse.getBody();

        return ResponseEntity.ok()
                .header(EnviromentVariables.header_cors(), EnviromentVariables.baseUrlFrontend())
                .body(universities);

    }

}
