package com.inatelTeste;

import com.inatelTeste.configurations.utils.JsonConfig;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.models.QUniversity;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.repositories.UniversityRepository;
import com.querydsl.core.types.Predicate;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class InatelTesteApplication {

    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

    public static void main(String[] args) {
        SpringApplication.run(InatelTesteApplication.class, args);
    }

    @Bean
    public CommandLineRunner init(UniversityRepository universityRepository) {
        return args -> {

            universityRepository.deleteAll();

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

                        QUniversity qUniversity = new QUniversity("university");

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

        };

        //Poderia ter utilizado restTemplate com a URL da api "http://universities.hipolabs.com/search?country=brazil"
        //mas preferi dificultar e trabalhar um pouco com json

//        ResponseEntity<University[]> responseEntity =
//                restTemplate.getForEntity(URL_API, University[].class);
//
//        if (responseEntity.getBody() != null) {
//            universities = Arrays.asList(responseEntity.getBody());
//        }

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

    //remover items duplicados quando consumir do restTemplate
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
