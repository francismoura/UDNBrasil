package com.inatelTeste.university.interfaces;

import com.inatelTeste.configurations.utils.FilterParams;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.models.University;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IUniversityService {

    Page<University> listar(FilterParams searchString, Pageable pageable);

    String starter();

    University salvar(UniversityDTO universityDTO);

    University atualizar(UniversityDTO universityDTO);

    University remover(UniversityDTO universityDTO);

}
