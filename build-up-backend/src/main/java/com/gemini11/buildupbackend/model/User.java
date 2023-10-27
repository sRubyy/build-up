package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;

    private String username;
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ShippingAddress> shipping_addresses;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Order> orders;

    public Integer getUser_id() {return user_id;}
    public String getUsername() {return username;}
    public String getEmail() {return email;}
    public void setUsername(String username) {this.username = username;}
    public void setEmail(String email) {this.email = email;}
}
