package com.gemini11.buildupbackend.service.implement;

import com.gemini11.buildupbackend.model.Account;
import com.gemini11.buildupbackend.repository.AccountRepository;
import com.gemini11.buildupbackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    @Autowired
    public AccountServiceImpl(
            AccountRepository accountRepository
    ) {
        this.accountRepository = accountRepository;
    }

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public List<Account> getAccounts() {
        return accountRepository.findAll();
    }

    public Optional<Account> getAccountByUsername(String username) {
        return Optional.ofNullable(accountRepository.findByUsername(username));
    }

    public Optional<Account> getAccountById(Integer id) {
        return accountRepository.findByAccountId(id);
    }

    public void deleteAccountByUsername(String username) {
        accountRepository.deleteByUsername(username);
    }
}
