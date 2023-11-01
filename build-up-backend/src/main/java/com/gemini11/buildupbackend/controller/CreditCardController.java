package com.gemini11.buildupbackend.controller;

import com.gemini11.buildupbackend.model.CreditCard;
import com.gemini11.buildupbackend.service.CreditCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/creditCard")
public class CreditCardController {

    @Autowired
    CreditCardService creditCardService;

    @GetMapping("/findAll")
    public ResponseEntity<List<CreditCard>> getAllCreditCard() {
        List<CreditCard> creditCards = new ArrayList<>();
        if (creditCardService.getCreditCards() == null){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        creditCardService.getCreditCards().forEach(creditCards::add);
        if (creditCards.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(creditCards, HttpStatus.OK);
        }
    }

    @GetMapping("/findCreditCardByAccountId/{id}")
    public ResponseEntity<List<CreditCard>> getCreditCardByAccountId(@PathVariable("id") int accountId){
        List<CreditCard> creditCards = new ArrayList<>();
        if (creditCardService.getCreditCardsByAccountId(accountId) == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        creditCardService.getCreditCardsByAccountId(accountId).forEach(creditCards::add);
        if (creditCards.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(creditCards, HttpStatus.OK);
        }
    }

    @GetMapping("/findCreditCardByCreditCardId")
    public ResponseEntity<CreditCard> getCreditCardByCreditCardId(@PathVariable("id") int creditCardId){
        CreditCard creditCard = creditCardService.getCreditCardById(creditCardId);
        if(creditCard == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(creditCard, HttpStatus.OK);
        }
    }

    @PostMapping("/addCreditCard")
    public ResponseEntity<CreditCard> addCreditCard(@RequestBody CreditCard _creditcard){
        CreditCard creditCard = creditCardService.addCreditCard(_creditcard);
        return new ResponseEntity<>(creditCard, HttpStatus.OK);
    }
}
