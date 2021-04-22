package com.inatelTeste.university.interfaces;

import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.models.University;

import java.util.List;

public interface IUniversityService {

    List<University> listar();

    University salvar(UniversityDTO universityDTO);

    University atualizar(UniversityDTO universityDTO);

    University remover(UniversityDTO universityDTO);
    
}
