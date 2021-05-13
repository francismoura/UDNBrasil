package com.inatelTeste.configurations.services;

import com.inatelTeste.configurations.utils.JsonConfig;
import com.inatelTeste.configurations.utils.StringUtils;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.models.QUniversity;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.repositories.UniversityRepository;
import com.querydsl.core.types.Predicate;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Component
@Configuration
public class AppStartupRunner implements CommandLineRunner {

    private static final String URL = "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json";

    @Autowired
    public AppStartupRunner(UniversityRepository universityRepository) {
        this.universityRepository = universityRepository;
    }

    private final UniversityRepository universityRepository;

    @Override
    public void run(String... args) throws Exception {

        universityRepository.deleteAll();

        JSONArray jsonArray;

        try {

            jsonArray = JsonConfig.readJsonFromUrl(URL);

            for (int i = 0; i < jsonArray.length(); i++) {

                JSONObject json = jsonArray.getJSONObject(i);

                if (json.getString("country").equals("Brazil")) {

                    UniversityDTO universityDTO = new UniversityDTO();

                    universityDTO.setAlpha_two_code(json.getString("alpha_two_code"));
                    universityDTO.setCountry(json.getString("country"));
                    universityDTO.setWeb_pages(JsonConfig.toArray(json.getJSONArray("web_pages")));
                    universityDTO.setDomains(JsonConfig.toArray(json.getJSONArray("domains")));
                    universityDTO.setName(json.getString("name"));
                    String stateProvince = StringUtils.validateString(json.getString("state-province"));
                    universityDTO.setStateProvince(stateProvince);

                    University university = new University.UniversityBuilder(universityDTO).build();

                    QUniversity qUniversity = new QUniversity("university");

                    Predicate predicate = qUniversity.name.containsIgnoreCase(university.getName());

                    List<University> universitiesDB = (List<University>) universityRepository.findAll(predicate);

                    //remove elementos duplicados
                    if (universitiesDB.isEmpty()) {
                        universityRepository.save(university);
                    }

                }

            }

        } catch (IOException | JSONException ioException) {
            ioException.printStackTrace();
        }

    }

    //Poderia ter utilizado restTemplate com a URL da api "http://universities.hipolabs.com/search?country=brazil"
    //mas preferi dificultar e trabalhar um pouco com json

//        ResponseEntity<University[]> responseEntity =
//                restTemplate.getForEntity(URL_API, University[].class);
//
//        if (responseEntity.getBody() != null) {
//            universities = Arrays.asList(responseEntity.getBody());
//        }

    //remover items duplicados quando consumir do restTemplate
//    private List<University> checkDuplicateItems(List<University> universities) {
//        List<String> universitiesList = new ArrayList<>();
//        List<University> finalList = new ArrayList<>();
//        for (University university : universities) {
//            if (!universitiesList.contains(university.getName())) {
//                finalList.add(university);
//                universitiesList.add(university.getName());
//            }
//        }
//        return finalList;
//    }

}
