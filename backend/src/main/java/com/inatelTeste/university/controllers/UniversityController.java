package com.inatelTeste.university.controllers;

import com.inatelTeste.university.models.University;
import com.inatelTeste.university.services.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UniversityController {

    private static final String HEADER_CORS = "Access-Control-Allow-Origin";

    @Autowired
    private UniversityService universityService;


    @RequestMapping(value = "/")
    public ResponseEntity<List<University>> home() {

        List<University> universities = universityService.listar();

        return ResponseEntity.ok()
                .header(HEADER_CORS)
                .body(universities);

    }

}
