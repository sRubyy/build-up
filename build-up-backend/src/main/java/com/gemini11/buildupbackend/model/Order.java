package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer order_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user; // Many orders belong to one user

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<CartItem> cartItems;

    public Integer getOrderId() {return order_id;}
    public User getUser() {return user;}
    public List<CartItem> getCartItems() {return cartItems;}
    public void setCartItems(List<CartItem> cartItems) {this.cartItems = cartItems;}
}
