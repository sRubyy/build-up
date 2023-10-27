package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

@Entity
public class Account {

    @Id
    private String username;

    @Column(nullable = false)
    private String password;

    public Account() {}

    public Account(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
