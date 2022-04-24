package com.montagueautodetailing.website.controller;

import com.montagueautodetailing.website.model.Service;
import com.montagueautodetailing.website.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/services")
public class ServiceController {

    @Autowired
    ServiceRepository serviceRepository;

    @PostMapping
    public Service createNewService(@RequestBody Service service) {
        return serviceRepository.save(service);
    }

    @GetMapping
    public List<Service> getAllService() {
        return serviceRepository.findAll();
    }
}
