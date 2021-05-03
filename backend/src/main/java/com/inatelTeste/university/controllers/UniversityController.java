package com.inatelTeste.university.controllers;

import com.inatelTeste.configurations.components.EnviromentVariables;
import com.inatelTeste.configurations.utils.FilterParams;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.services.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/universidades")
public class UniversityController {

    private static final String HEADER = "Access-Control-Allow-Origin";

    @Autowired
    UniversityService universityService;

    @GetMapping(value = "/iniciar")
    public ResponseEntity<String> iniciar() {

        String starter = universityService.starter();

        return ResponseEntity.ok()
                .body(starter);

    }

    @PostMapping(value = "/salvar")
    public ResponseEntity<University> salvar(@RequestBody UniversityDTO universityDTO) {

        University university = universityService.salvar(universityDTO);

        return ResponseEntity.ok()
                .body(university);

    }

    @PostMapping(value = "/listar")
    public ResponseEntity<Page<University>> listar(@PageableDefault(size = 20) Pageable pageable,
                                                   @RequestBody FilterParams stringSearch) {

        String search = stringSearch.getStringSearch();
        Page<University> universities = search.isEmpty() ?
                universityService.listar(pageable) :
                universityService.listar(pageable, search);

        return ResponseEntity.ok()
                .body(universities);
    }

    @PostMapping(value = "/remover")
    public ResponseEntity<University> remover(@RequestBody UniversityDTO universityDTO) {

        return ResponseEntity.ok()
                .body(universityService.remover(universityDTO));

    }

    @PostMapping(value = "/atualizar")
    public ResponseEntity<University> atualizar(@RequestBody UniversityDTO universityDTO) {

        return ResponseEntity.ok()
                .body(universityService.atualizar(universityDTO));

    }

}
