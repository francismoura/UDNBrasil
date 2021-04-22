package com.inatelTeste.university.controllers;

import com.inatelTeste.configurations.components.EnviromentVariables;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.services.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/universidades/listar")
public class UniversityController {

    @Autowired
    UniversityService universityService;

    @RequestMapping(value = "/salvar")
    public ResponseEntity<University> salvar(@RequestBody UniversityDTO universityDTO) {

        University university = universityService.salvar(universityDTO);

        return ResponseEntity.ok()
                .header(EnviromentVariables.header_cors(), EnviromentVariables.baseUrlFrontend())
                .body(university);

    }

    @GetMapping(value = "/listar")
    public ResponseEntity<List<University>> listar() {

        List<University> universities = universityService.listar();

        return ResponseEntity.ok()
                .header(EnviromentVariables.header_cors(), EnviromentVariables.baseUrlFrontend())
                .body(universities);

    }

    @PostMapping(value = "/remover")
    public ResponseEntity<University> remover(@RequestBody UniversityDTO universityDTO) {

        University university = universityService.remover(universityDTO);

        return ResponseEntity.ok()
                .header(EnviromentVariables.header_cors(), EnviromentVariables.baseUrlFrontend())
                .body(universityService.remover(universityDTO));

    }

    @PostMapping(value = "/atualizar")
    public ResponseEntity<University> atualizar(@RequestBody UniversityDTO universityDTO) {

        return ResponseEntity.ok()
                .header(EnviromentVariables.header_cors(), EnviromentVariables.baseUrlFrontend())
                .body(universityService.atualizar(universityDTO));

    }

}
