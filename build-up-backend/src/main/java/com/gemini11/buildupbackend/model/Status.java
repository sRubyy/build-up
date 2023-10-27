package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "status")
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer status_id;

    private String name;

    public Integer getStatus_id() {return status_id;}
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
}
