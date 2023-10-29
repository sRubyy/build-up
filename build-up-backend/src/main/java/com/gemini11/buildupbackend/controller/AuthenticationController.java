package com.gemini11.buildupbackend.controller;

import com.gemini11.buildupbackend.entity.AuthRequestBody;
import com.gemini11.buildupbackend.entity.ResponseObject;
import com.gemini11.buildupbackend.model.Account;
import com.gemini11.buildupbackend.service.AccountService;
import com.gemini11.buildupbackend.utility.JwtHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class AuthenticationController {

    private final AccountService accountService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public AuthenticationController(
            AccountService accountService,
            BCryptPasswordEncoder bCryptPasswordEncoder
    ) {
        this.accountService = accountService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping("/auth")
    public ResponseEntity<ResponseObject> auth(
            @RequestBody AuthRequestBody authRequestBody
    ) {
        Optional<Account> account = accountService.getAccountByUsername(authRequestBody.username());

        if (account.isPresent()) {
            if (bCryptPasswordEncoder.matches(authRequestBody.password(), account.get().getPassword())) {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(
                        LocalDateTime.now(),
                        HttpStatus.OK,
                        "",
                        new JwtHelper().generateToken(authRequestBody.username())
                ));
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ResponseObject(
                LocalDateTime.now(),
                HttpStatus.UNAUTHORIZED,
                "The username or password is incorrect.",
                null
        ));
    }

    @GetMapping("/auth/verify")
    public ResponseEntity<ResponseObject> verify(
            @RequestParam(name = "subject") String subject,
            @RequestParam(name = "token") String token
    ) {
        boolean isValidToken = new JwtHelper().verifyToken(subject, token);
        HttpStatus httpStatus = isValidToken ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        Map<String, Object> data = new HashMap<>();
        data.put("isValidToken", isValidToken);
        return ResponseEntity.status(httpStatus).body(new ResponseObject(
                LocalDateTime.now(),
                httpStatus,
                isValidToken ? "" : "The token is invalid.",
                data
        ));
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseObject> createAccount(@RequestBody Account account) {
        Account _account;
        boolean isDuplicate = false;

        try {
            isDuplicate = accountService.getAccountByUsername(account.getUsername()).isPresent();

            if (isDuplicate) {
                throw new Exception("The username is duplicated.");
            }

            _account = accountService.createAccount(new Account(
                    account.getUsername(),
                    bCryptPasswordEncoder.encode(account.getPassword())
            ));
        } catch (Exception error) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ResponseObject(
                    LocalDateTime.now(),
                    isDuplicate ? HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR,
                    error.getMessage(),
                    null
            ));
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseObject(
                LocalDateTime.now(),
                HttpStatus.CREATED,
                "",
                _account
        ));
    }

    @GetMapping("/accounts")
    public ResponseEntity<ResponseObject> getAccounts() {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(
                LocalDateTime.now(),
                HttpStatus.OK,
                "",
                accountService.getAccounts()
        ));
    }

    @GetMapping("/account/{username}")
    public ResponseEntity<ResponseObject> getAccountByUsername(@PathVariable String username) {
        Optional<Account> account = accountService.getAccountByUsername(username);
        return account.map(value -> ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(
                LocalDateTime.now(),
                HttpStatus.OK,
                "",
                value
        ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseObject(
                LocalDateTime.now(),
                HttpStatus.NOT_FOUND,
                "The username does not exist.",
                null
        )));
    }

    @DeleteMapping("/account/{username}")
    public ResponseEntity<ResponseObject> deleteAccountByUsername(@PathVariable String username) {
        accountService.deleteAccountByUsername(username);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(
                LocalDateTime.now(),
                HttpStatus.NO_CONTENT,
                "",
                null
        ));
    }
}