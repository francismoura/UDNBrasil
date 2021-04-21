package com.inatelTeste.university.controllers;

import com.inatelTeste.configurations.components.EnviromentVariables;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.services.UniversityService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/universities/")
@RequiredArgsConstructor
public class UniversityController {

    private static final String HEADER_CORS = "Access-Control-Allow-Origin";

    @Autowired
    private UniversityService universityService;

    @GetMapping(value = "list")
    public ResponseEntity<List<University>> list() {

        List<University> universities = universityService.listar();

        return ResponseEntity.ok()
                .header(HEADER_CORS, EnviromentVariables.baseUrlFrontend())
                .body(universities);

    }

}
