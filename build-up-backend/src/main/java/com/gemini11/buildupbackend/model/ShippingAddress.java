package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "shipping_address")
public class ShippingAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String phone;
    private String country;
    private String detail;
    private String province;
    private String district;
    private String sub_district;
    private String postcode;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user; // Many shipping addresses belong to one user

    public Integer getId() {return id;}
    public String getName() {return name;}
    public String getPhone() {return phone;}
    public String getCountry() {return country;}
    public String getDetail() {return detail;}
    public String getProvince() {return province;}
    public String getDistrict() {return district;}
    public String getSub_district() {return sub_district;}
    public String getPostcode() {return postcode;}
    public void setName(String name) {this.name = name;}
    public void setPhone(String phone) {this.phone = phone;}
    public void setCountry(String country) {this.country = country;}
    public void setDetail(String detail) {this.detail = detail;}
    public void setProvince(String province) {this.province = province;}
    public void setDistrict(String district) {this.district = district;}
    public void setSub_district(String sub_district) {this.sub_district = sub_district;}
    public void setPostcode(String postcode) {this.postcode = postcode;}

}
