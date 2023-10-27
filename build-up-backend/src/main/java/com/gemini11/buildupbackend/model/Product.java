package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer product_id;

    private String name;
    private Double price;
    private String type;
    private String size;
    private Boolean brand_new;
    private String description;
    private LocalDateTime created_at;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User seller;

    public Integer getShoeId() {return product_id;}
    public String getName() {return name;}
    public Double getPrice() {return price;}
    public String getType() {return type;}
    public String getSize() {return size;}
    public Boolean getBrand_new() {return brand_new;}
    public String getDescription() {return description;}
    public LocalDateTime getCreated_at() {return created_at;}
    public User getSeller() {return seller;}
    public void setName(String name) {this.name = name;}
    public void setPrice(Double price) {this.price = price;}
    public void setSize(String size) {this.size = size;}
    public void setBrand_new(Boolean brand_new) {this.brand_new = brand_new;}
    public void setSeller(User seller) {this.seller = seller;}
    public void setDescription(String description) {this.description = description;}
    public void setCreated_at(LocalDateTime created_at) {this.created_at = created_at;}
    public void setType(String type) {this.type = type;}
}
