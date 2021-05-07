package com.inatelTeste.university.controllers;

import com.inatelTeste.configurations.components.EnviromentVariables;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.interfaces.IUniversityService;
import com.inatelTeste.university.models.University;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping(value = "/app/universidades")
public class UniversityController {

    @Autowired
    IUniversityService universityService;

    @PostMapping(value = "/salvar")
    public University salvar(@RequestBody UniversityDTO universityDTO) {
        return universityService.salvar(universityDTO);
    }

    @GetMapping(value = "/listar")
    public ResponseEntity<Page<University>> listar(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "") String filterParams) {

        Page<University> universities = universityService.listar(page, size, sortBy, filterParams);

        return ResponseEntity.ok()
                .header(String.valueOf(new HttpHeaders()), EnviromentVariables.baseUrlFrontend())
                .body(universities);

    }

    @PostMapping(value = "/remover/{id}")
    public ResponseEntity<University> remover(@RequestBody UniversityDTO universityDTO) {
        University university = universityService.remover(universityDTO);

        return ResponseEntity.ok()
                .body(university);

    }

    @PostMapping(value = "/atualizar")
    public University atualizar(@RequestBody UniversityDTO universityDTO) {
        return universityService.atualizar(universityDTO);
    }

}