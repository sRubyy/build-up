package com.gemini11.buildupbackend.repository;

import com.gemini11.buildupbackend.model.Account;
import com.gemini11.buildupbackend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    Iterable<Order> findByAccount(Optional<Account> user);
}
