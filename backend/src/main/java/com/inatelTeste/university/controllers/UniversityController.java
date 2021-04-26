package com.inatelTeste.university.controllers;

import com.inatelTeste.configurations.components.EnviromentVariables;
import com.inatelTeste.configurations.utils.FiltroPesquisa;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.services.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping(value = "/api/universidades")
public class UniversityController {

    @Autowired
    UniversityService universityService;

    @GetMapping(value = "/iniciar")
    public ResponseEntity<String> iniciar() {

        String teste = universityService.starter();

        return ResponseEntity.ok()
                .header(EnviromentVariables.header_cors(), EnviromentVariables.baseUrlFrontend())
                .body(teste);

    }

    @PostMapping(value = "/salvar")
    public ResponseEntity<University> salvar(@RequestBody UniversityDTO universityDTO) {

        University university = universityService.salvar(universityDTO);

        return ResponseEntity.ok()
                .header(EnviromentVariables.header_cors(), EnviromentVariables.baseUrlFrontend())
                .body(university);

    }

    @GetMapping(value = "/listar")
    public ResponseEntity<List<University>> listar() throws Exception {

        List<University> universities = universityService.listar();

        return ResponseEntity.ok()
                .header(EnviromentVariables.header_cors(), EnviromentVariables.baseUrlFrontend())
                .body(universities);

    }

    @PostMapping(value = "/remover")
    public ResponseEntity<University> remover(@RequestBody UniversityDTO universityDTO) {

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
