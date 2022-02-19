package com.montagueautodetailing.website.repository;

import com.montagueautodetailing.website.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository  extends JpaRepository<Service, Integer> {
}
