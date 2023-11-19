package com.gemini11.buildupbackend.repository;

import com.gemini11.buildupbackend.model.Account;
import com.gemini11.buildupbackend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    Iterable<Order> findByAccount(Optional<Account> user);

    @Query(value = """
            select o.order_id, o.status_id, oi.order_item_id, oi.product_id, acc.account_id, acc.username, p.name, p.description,p.size,p.price
            From build_up_db.orders o
            inner join build_up_db.order_item oi on  o.order_id = oi.order_id
            inner join build_up_db.account acc on o.owner_account_id = acc.account_id
            inner join build_up_db.product p on oi.product_id = p.product_id;
            where o.owner_account_id = :account_id;
            """,
            nativeQuery = true
    )
    List<Order> findOrderByToken(@Param("account_id") int account_id);
}
