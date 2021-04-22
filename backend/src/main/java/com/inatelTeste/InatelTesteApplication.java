package com.inatelTeste;

import com.inatelTeste.university.dtos.DomainDTO;
import com.inatelTeste.university.dtos.UniversityDTO;
import com.inatelTeste.university.dtos.WebPageDTO;
import com.inatelTeste.university.models.Domain;
import com.inatelTeste.university.models.University;
import com.inatelTeste.university.models.WebPage;
import com.inatelTeste.university.repositories.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication(scanBasePackages={"com.inatelTeste"})
public class InatelTesteApplication implements CommandLineRunner {

    @Autowired
    UniversityRepository universityRepository;

    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

    public static void main(String[] args) {
        SpringApplication.run(InatelTesteApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        URI uri = new URI("http://my favorite site!");

        universityRepository.deleteAll();

        DomainDTO domainDTO = new DomainDTO();
        domainDTO.setDomain("teste dominio");
        Domain domain = new Domain.DomainBuilder(domainDTO).build();

        List<Domain> domains = new ArrayList<>();
        domains.add(domain);

        WebPageDTO webPageDTO = new WebPageDTO();
        webPageDTO.setUri(uri);
        WebPage webPage = new WebPage.WebPageBuilder(webPageDTO).build();

        List<WebPage> webPages = new ArrayList<>();
        webPages.add(webPage);


        UniversityDTO universityDTO = new UniversityDTO();
        universityDTO.setDomains(domains);
        universityDTO.setWeb_pages(webPages);
        universityDTO.setName("Bazinga University");
        universityDTO.setState_province("RJ");
        universityDTO.setCountry("brazil");
        universityDTO.setAlpha_two_code("BU");

        universityRepository.save(new University.UniversityBuilder(universityDTO).build());

    }

}
