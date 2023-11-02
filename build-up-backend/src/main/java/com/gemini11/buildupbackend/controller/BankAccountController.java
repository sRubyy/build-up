package com.gemini11.buildupbackend.controller;

import com.gemini11.buildupbackend.model.BankAccount;
import com.gemini11.buildupbackend.service.BankAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/bank-account")
public class BankAccountController {

    @Autowired
    BankAccountService bankAccountService;

    @GetMapping("/findAll")
    public ResponseEntity<List<BankAccount>> getAllProducts() {
        List<BankAccount> bankAccounts = new ArrayList<>();
        if (bankAccountService.getAllBankAccount() == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        bankAccountService.getAllBankAccount().forEach(bankAccounts::add);
        if (bankAccounts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(bankAccounts, HttpStatus.OK);
        }
    }

    @GetMapping("/findBankAccountByAccountId/{id}")
    public ResponseEntity<List<BankAccount>> getBankAccountByAccountId(@PathVariable("id") int accountId) {
        List<BankAccount> bankAccounts = new ArrayList<>();
        if (bankAccountService.getBankAccountByAccountId(accountId) == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        bankAccountService.getBankAccountByAccountId(accountId).forEach(bankAccounts::add);
        if (bankAccounts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(bankAccounts, HttpStatus.OK);
        }
    }

    @GetMapping("/findBankAccountById/{id}")
    public ResponseEntity<BankAccount> getBankAccountById(@PathVariable("id") int bankAccountId) {
        BankAccount bankAccount = bankAccountService.getBankAccountById(bankAccountId);
        if (bankAccount == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(bankAccount, HttpStatus.OK);
        }
    }

    @PostMapping("/addBankAccount")
    public ResponseEntity<BankAccount> addBankAccount(@RequestBody BankAccount _bankAccount) {
        BankAccount bankAccount = bankAccountService.addBankAccount(_bankAccount);
        if (bankAccount == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return new ResponseEntity<>(bankAccount, HttpStatus.CREATED);
        }
    }

    @PutMapping("/editBankAccount/{id}")
    public ResponseEntity<BankAccount> editBankAccount(@PathVariable("id") int id, @RequestBody BankAccount _bankAccount) {
        BankAccount bankAccount = bankAccountService.editBankAccount(id, _bankAccount);
        if (bankAccount == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(bankAccount, HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteBankAccount(@PathVariable("id") int _id) {
        Integer id = bankAccountService.deleteBankAccount(_id);
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
