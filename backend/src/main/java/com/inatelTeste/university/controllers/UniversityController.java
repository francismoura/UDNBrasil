package com.inatelTeste.university.controllers;

import com.inatelTeste.configurations.components.EnviromentVariables;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.interfaces.IUniversityService;
import com.inatelTeste.university.models.University;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/universidades")
public class UniversityController {

    private static final String HEADER_CORS = "Access-Control-Allow-Origin";

    @Autowired
    IUniversityService IUniversityService;

    @GetMapping(value = "/listar")
    public ResponseEntity<List<University>> listar() {

        List<University> universities = IUniversityService.list();

        return ResponseEntity.ok()
                .header(HEADER_CORS, EnviromentVariables.baseUrlFrontend())
                .body(universities);

    }

    @PostMapping(value = "/salvar")
    public ResponseEntity<University> salvar(@RequestBody UniversityDTO universityDTO) {

        return ResponseEntity.ok()
                .header(HEADER_CORS, EnviromentVariables.baseUrlFrontend())
                .body(IUniversityService.create(universityDTO));

    }

    @PostMapping(value = "/remover")
    public ResponseEntity<University> remover(@RequestBody UniversityDTO universityDTO) {

        return ResponseEntity.ok()
                .header(HEADER_CORS, EnviromentVariables.baseUrlFrontend())
                .body(IUniversityService.delete(universityDTO));

    }

    @PostMapping(value = "/atualizar")
    public ResponseEntity<University> atualizar(@RequestBody UniversityDTO universityDTO) {

        return ResponseEntity.ok()
                .header(HEADER_CORS, EnviromentVariables.baseUrlFrontend())
                .body(IUniversityService.update(universityDTO));

    }

}
