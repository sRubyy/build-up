package com.gemini11.buildupbackend.repository;

import com.gemini11.buildupbackend.model.Account;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, String> {

    Account findByUsername(String username);

    @Transactional
    void deleteByUsername(String username);
}
