package com.inatelTeste.university.interfaces;

import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.models.University;
import org.springframework.data.domain.Page;


public interface IUniversityService {

    Page<University> listar(Integer page, Integer size, String sortBy, String filterParams);

    University salvar(UniversityDTO universityDTO);

    University atualizar(UniversityDTO universityDTO);

    University remover(String id);

}