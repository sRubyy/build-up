package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "credit_card")
public class CreditCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_id")
    private Integer cardId;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @Column(name = "holder_name")
    private String holderName;

    @Column(name = "expiration_date")
    private LocalDateTime expirationDate;

    private String cvv;

    private Double balance;
}
