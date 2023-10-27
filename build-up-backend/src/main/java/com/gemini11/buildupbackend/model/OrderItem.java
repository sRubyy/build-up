package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer order_item_id;

    @ManyToOne
    @JoinColumn(name = "shoe_id")
    private Product product; // Many order items can have one item

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order; // Many order items belong to one order

    private Integer item_quantity;

    public Integer getOrderItemId() {return order_item_id;}
    public Product getProduct() {return product;}
    public Integer getItem_quantity() {return item_quantity;}
    public Order getOrder() {return order;}
    public void setShoe(Product product) {this.product = product;}
    public void setItem_quantity(int item_quantity) {this.item_quantity = item_quantity;}

}
