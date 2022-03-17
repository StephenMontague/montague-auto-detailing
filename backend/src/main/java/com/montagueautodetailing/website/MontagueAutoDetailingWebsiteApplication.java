package com.montagueautodetailing.website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MontagueAutoDetailingWebsiteApplication /* implements CommandLineRunner */ {

	public static void main(String[] args) {
		SpringApplication.run(MontagueAutoDetailingWebsiteApplication.class, args);
	}

//	@Autowired
//	private ServiceRepository serviceRepository;
//
//	@Override
//	public void run(String... args) throws Exception {
//		Service service1 = new Service();
//		service1.setDescription("This is a basic exterior wash to help remove the day to day dirt that occurs during your routine drives. Foam, hand wash, and rinse of the complete exterior of your car. Includes a hand dry and all jams wiped.");
//		service1.setServiceCode("Base-01");
//		service1.setServiceName("Exterior Basic Clean");
//		service1.setServiceType("Exterior");
//		service1.setSalePrice("Starting at $45.00");
//		serviceRepository.save(service1);
//
//		Service service2 = new Service();
//		service2.setDescription("This is meant for those that keep their cars clean. It is a quick clean to make sure that the carpets and seats are vacuumed, and that the dash and windows are wiped down.");
//		service2.setServiceCode("Base-02");
//		service2.setServiceName("Interior Basic Clean");
//		service2.setServiceType("Interior");
//		service2.setSalePrice("Starting at $65.00");
//		serviceRepository.save(service2);
//
//		Service service3 = new Service();
//		service3.setDescription("Deeper Exterior Clean using a Biodegradable Citrus Foam.");
//		service3.setServiceCode("Base-03");
//		service3.setServiceName("Exterior Decontamination & Detail");
//		service3.setServiceType("Exterior");
//		service3.setSalePrice("Starting at $125.00");
//		serviceRepository.save(service3);
//
//		Service service4 = new Service();
//		service4.setDescription("This detail will make sure to get all pet hair and dirt out of all nooks and " +
//				"crannies. Windows will be wiped down to remove finger prints and smudges. Dash and cup holders will be wiped and vacuumed to remove as many crumbs as possible. *Stain removal is not included.");
//		service4.setServiceCode("Base-04");
//		service4.setServiceName("Interior Detail");
//		service4.setServiceType("Interior");
//		service4.setSalePrice("Starting at $150.00");
//		serviceRepository.save(service4);
//
//		Service service5 = new Service();
//		service5.setDescription("");
//		service5.setServiceCode("Base-05");
//		service5.setServiceName("Engine Bay Clean");
//		service5.setServiceType("Exterior");
//		service5.setSalePrice("Set Price of $100.00");
//		serviceRepository.save(service5);
//
//	}
}
