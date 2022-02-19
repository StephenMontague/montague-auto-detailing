package com.montagueautodetailing.website;

import com.montagueautodetailing.website.model.Service;
import com.montagueautodetailing.website.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MontagueAutoDetailingWebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(MontagueAutoDetailingWebsiteApplication.class, args);
	}
}
