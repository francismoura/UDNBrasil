package com.inatelTeste.university.controllers;

import com.inatelTeste.configurations.utils.FilterParams;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.services.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/universidades")
public class UniversityController {

    @Autowired
    UniversityService universityService;

    @GetMapping(value = "/iniciar")
    public String iniciar() {
        return universityService.starter();
    }

    @PostMapping(value = "/salvar")
    public University salvar(@RequestBody UniversityDTO universityDTO) {
        return universityService.salvar(universityDTO);
    }

    @PostMapping(value = "/listar")
    public Page<University> listar(@PageableDefault(size = 20) Pageable pageable,
                                   @RequestBody FilterParams searchString) {
        return universityService.listar(searchString, pageable);
    }

    @PostMapping(value = "/remover")
    public University remover(@RequestBody UniversityDTO universityDTO) {
        return universityService.remover(universityDTO);
    }

    @PostMapping(value = "/atualizar")
    public University atualizar(@RequestBody UniversityDTO universityDTO) {
        return universityService.atualizar(universityDTO);
    }

}
