package com.inatelTeste.university.services;

import com.inatelTeste.configurations.utils.JsonConfig;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.interfaces.IUniversityService;
import com.inatelTeste.university.models.QUniversity;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.repositories.UniversityRepository;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UniversityService implements IUniversityService {

    public String URL_API = "http://universities.hipolabs.com/search?country=brazil";

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    UniversityRepository universityRepository;

    private final QUniversity qUniversity = new QUniversity("university");

    @Override
    public String starter() {

        universityRepository.deleteAll();

        //Poderia ter utilizado restTemplate com a URL da api "http://universities.hipolabs.com/search?country=brazil"
        //mas preferi dificultar e trabalhar um pouco com json

//        ResponseEntity<University[]> responseEntity =
//                restTemplate.getForEntity(URL_API, University[].class);
//
//        if (responseEntity.getBody() != null) {
//            universities = Arrays.asList(responseEntity.getBody());
//        }

        JSONArray jsonArray;

        try {

            jsonArray = JsonConfig.readJsonFromUrl("https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json");

            for (int i = 0; i < jsonArray.length(); i++) {

                JSONObject json = jsonArray.getJSONObject(i);
                
                if (json.getString("country").equals("Brazil")) {

                    UniversityDTO universityDTO = new UniversityDTO();

                    universityDTO.setAlpha_two_code(json.getString("alpha_two_code"));
                    universityDTO.setCountry(json.getString("country"));
                    universityDTO.setWeb_pages(jsonToArray(json.getJSONArray("web_pages")));
                    universityDTO.setDomains(jsonToArray(json.getJSONArray("domains")));
                    universityDTO.setName(json.getString("name"));
                    String stateProvince = validateString(json.getString("state-province"));
                    universityDTO.setStateProvince(stateProvince);

                    University university = new University.UniversityBuilder(universityDTO).build();

                    Predicate predicate = qUniversity.name.containsIgnoreCase(university.getName());

                    List<University> universitiesDB = (List<University>) universityRepository.findAll(predicate);

                    if (universitiesDB.isEmpty()) {
                        universityRepository.save(university);
                    }

                }

            }

        } catch (IOException | JSONException ioException) {
            ioException.printStackTrace();
        }

        return "OK";

    }

    private List<String> jsonToArray(JSONArray jArray) throws JSONException {

        List<String> list = new ArrayList<>();

        if (jArray.length() == 1) {
            list.add(jArray.getString(0));
        } else {
            for (int i = 0; i < jArray.length(); i++) {
                String string = jArray.getString(i);
                list.add(string);
            }
        }

        return list;
    }

    private String validateString(String string) {

        return string.equals("null") ? null : string;
    }

    @Override
    public Page<University> listar(Integer page, Integer size, String sortBy, String filterParams) {

        Pageable pageable = PageRequest.of(0, 20, Sort.by(sortBy));

        Predicate predicate = qUniversity.name.containsIgnoreCase(filterParams);

        return filterParams.equals("") ?
                universityRepository.findAll(pageable) :
                universityRepository.findAll(predicate, pageable);

    }

    @Override
    public University salvar(UniversityDTO universityDTO) {

        University university = new University.UniversityBuilder(universityDTO).build();

        return universityRepository.save(university);

    }

    @Override
    public University atualizar(UniversityDTO universityDTO) {
        return null;
    }

    @Override
    public University remover(UniversityDTO universityDTO) {

        University university = new University();
        Optional<University> universityDb = universityRepository.findById(universityDTO.getId());

        if (universityDb.isPresent()) {
            university = universityDb.get();
        }

        universityRepository.delete(university);

        return university;

    }

    //remove items duplicados quando consumir do restTemplate
//    private List<University> checkDuplicateItems(List<University> universities) {
//
//        List<String> universitiesList = new ArrayList<>();
//        List<University> finalList = new ArrayList<>();
//
//        for (University university : universities) {
//
//            if (!universitiesList.contains(university.getName())) {
//
//                finalList.add(university);
//                universitiesList.add(university.getName());
//
//            }
//
//        }
//
//        return finalList;
//
//    }

}
