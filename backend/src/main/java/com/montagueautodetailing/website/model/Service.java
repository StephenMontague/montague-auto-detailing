package com.montagueautodetailing.website.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "services")
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "service_code")
    private String serviceCode;

    @Column(name = "service_name")
    private String serviceName;

    @Column(name = "description")
    private String description;

    @Column(name = "service_type")
    private String serviceType;

    @Column(name = "sale_price")
    private String salePrice;
}
