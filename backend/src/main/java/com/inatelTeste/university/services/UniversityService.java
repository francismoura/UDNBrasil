package com.inatelTeste.university.services;

import com.inatelTeste.configurations.expeptions.ConflictException;
import com.inatelTeste.configurations.expeptions.NotFoundException;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.interfaces.IUniversityService;
import com.inatelTeste.university.models.QUniversity;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.repositories.UniversityRepository;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class UniversityService implements IUniversityService {

    public final static String EXISTS_MSG_THROW = "Já existe uma universidade cadastrada com esse nome.";
    public final static String EDIT_MSG_THROW = "Não foi possível editar os dados dessa universidade.";
    public final static String REMOVE_MSG_THROW = "Não foi possível remover as informações dessa universidade. Dados não encontrados.";

    private final UniversityRepository universityRepository;

    @Autowired
    public UniversityService(UniversityRepository universityRepository) {
        this.universityRepository = universityRepository;
    }

    private final QUniversity qUniversity = new QUniversity("university");

    @Override
    public Page<University> listar(Integer page, Integer size, String sortBy, String filterParams) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

        Predicate predicate = qUniversity.name.containsIgnoreCase(filterParams);

        return universityRepository.findAll(predicate, pageable);

    }

    @Override
    public University salvar(UniversityDTO universityDTO) {

        boolean existsName= universityRepository.existsByName(universityDTO.getName());

        if (existsName) {
            throw new ConflictException(EXISTS_MSG_THROW);
        }

        University university = new University.UniversityBuilder(universityDTO).build();

        return universityRepository.save(university);

    }

    @Override
    public University atualizar(UniversityDTO universityDTO) {

        boolean existsName= universityRepository.existsByName(universityDTO.getName());

        if (existsName) {
            throw new ConflictException(EXISTS_MSG_THROW);
        }

        return universityRepository.findById(universityDTO.getId())
                .map(university -> {
                    university.setAlpha_two_code(universityDTO.getAlpha_two_code());
                    university.setCountry(universityDTO.getCountry());
                    university.setWeb_pages(universityDTO.getWeb_pages());
                    university.setDomains(universityDTO.getDomains());
                    university.setName(universityDTO.getName());
                    university.setState_province(universityDTO.getState_province());

                    return university;
                }).orElseThrow( () -> new NotFoundException(EDIT_MSG_THROW));

    }

    @Override
    public University remover(String id) {

        University university = universityRepository.findById(id)
                .orElseThrow( () -> new NotFoundException(REMOVE_MSG_THROW));

        universityRepository.delete(university);

        return university;

    }

}
