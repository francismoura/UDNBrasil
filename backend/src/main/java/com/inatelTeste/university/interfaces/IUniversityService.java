package com.inatelTeste.university.interfaces;

import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.models.University;

import java.util.List;

public interface IUniversityService {

    List<University> list();

    University create(UniversityDTO universityDTO);

    University update(UniversityDTO universityDTO);

    University delete(UniversityDTO universityDTO);

    
}
