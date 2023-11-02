package com.gemini11.buildupbackend.repository;

import com.gemini11.buildupbackend.model.Account;
import com.gemini11.buildupbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    Iterable<Product> findByAccount(Optional<Account> seller);

    List<Product> findByName(String name);

    @Query(value = """
            SELECT size, is_brand_new, MIN(price) AS min_price, product_id, name, description
            FROM product
            WHERE name = :name
            GROUP BY size, is_brand_new
            ORDER BY size;
            """,
            nativeQuery = true
    )
    List<List<Object>> findSizeWithMinPriceAndIsBrandNew(@Param("name") String name);
}
