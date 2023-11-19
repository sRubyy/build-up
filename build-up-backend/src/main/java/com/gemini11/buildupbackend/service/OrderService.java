package com.gemini11.buildupbackend.service;

import com.gemini11.buildupbackend.model.Order;

import java.util.List;

public interface OrderService {
    Iterable<Order> getOrders();

    Iterable<Order> getOrdersByAccountId(int userId);

    Order addOrder(Order order);

    Integer deleteOrder(int id);

    List<Order> findOrderByToken(int account_id);
}
