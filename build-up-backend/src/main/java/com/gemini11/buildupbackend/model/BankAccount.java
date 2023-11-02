package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name = "bank_account")
public class BankAccount {

    @Id
    @Column(name = "back_account_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bankAccountNumber;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @Column(name = "holder_name")
    private String holderName;

    @Column(name = "bank")
    private String bank;

    public BankAccount() {

    }
}
