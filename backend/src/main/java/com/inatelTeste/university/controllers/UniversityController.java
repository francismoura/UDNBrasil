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

import javax.validation.Valid;

//@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping(value = "/app/universidades")
public class UniversityController {

    private final IUniversityService universityService;

    @Autowired
    public UniversityController(IUniversityService universityService) {
        this.universityService = universityService;
    }

    @PostMapping(value = "/salvar")
    public University salvar(@RequestBody UniversityDTO universityDTO) {
        return universityService.salvar(universityDTO);
    }

    @GetMapping(value = "/listar")
    public ResponseEntity<Page<University>> listar(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(defaultValue = "name") String sortBy,
            @RequestParam(defaultValue = "") String filterParams) {

        Page<University> universities = universityService.listar(page, size, sortBy, filterParams);

        return ResponseEntity.ok()
                .header(String.valueOf(new HttpHeaders()), EnviromentVariables.baseUrlFrontend())
                .body(universities);

    }

    @DeleteMapping(value = "/remover/{id}")
    public ResponseEntity<University> remover(@PathVariable(value = "id") String id) {

        University university = universityService.remover(id);

        return ResponseEntity.ok()
                .body(university);

    }

    @PutMapping(value = "/atualizar")
    public University atualizar(@Valid @RequestBody UniversityDTO universityDTO) {
        return universityService.atualizar(universityDTO);
    }

}