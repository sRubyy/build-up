package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer order_id;

    private LocalDateTime order_date;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status; // Many orders belong to one status

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user; // Many orders belong to one user

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderItem> orderItems;

    public Integer getOrderId() {return order_id;}
    public LocalDateTime getOrder_date() {return order_date;}
    public User getUser() {return user;}
    public List<OrderItem> getOrderItems() {return orderItems;}
    public void setOrderItems(List<OrderItem> orderItems) {this.orderItems = orderItems;}
    public void setOrder_date(LocalDateTime order_date) {this.order_date = order_date;}
}
