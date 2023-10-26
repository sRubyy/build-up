package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

@Entity
public class Shoe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer shoe_id;

    private String name;
    private Double price;
    private Integer size_us;
    private Boolean available;
    private Boolean brand_new;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User seller;

    public Integer getShoeId() {return shoe_id;}
    public String getName() {return name;}
    public Double getPrice() {return price;}
    public Integer getSize_us() {return size_us;}
    public Boolean getAvaliable() {return available;}
    public Boolean getBrand_new() {return brand_new;}
    public User getSeller() {return seller;}
    public void setName(String name) {this.name = name;}
    public void setPrice(Double price) {this.price = price;}
    public void setSize_us(Integer size_us) {this.size_us = size_us;}
    public void setAvaliable(Boolean available) {this.available = available;}
    public void setBrand_new(Boolean brand_new) {this.brand_new = brand_new;}
    public void setSeller(User seller) {this.seller = seller;}
}
