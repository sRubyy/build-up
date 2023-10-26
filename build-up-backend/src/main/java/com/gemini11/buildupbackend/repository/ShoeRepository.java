package com.gemini11.buildupbackend.repository;

import com.gemini11.buildupbackend.model.Shoe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoeRepository extends JpaRepository<Shoe, Integer> {
}
