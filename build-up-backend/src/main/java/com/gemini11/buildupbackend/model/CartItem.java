package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cart_items")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cart_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user; // Many cart items belong to one user

    @ManyToOne
    @JoinColumn(name = "shoe_id")
    private Shoe shoe; // Many cart items can have one shoe

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order; // Many cart items belong to one order

    private Integer shoe_quantity;

    public Integer getCartId() {return cart_id;}
    public User getUser() {return user;}
    public Shoe getShoe() {return shoe;}
    public Integer getShoe_quantity() {return shoe_quantity;}
    public Order getOrder() {return order;}
    public void setShoe(Shoe shoe) {this.shoe = shoe;}
    public void setShoe_quantity(int shoe_quantity) {this.shoe_quantity = shoe_quantity;}

}
