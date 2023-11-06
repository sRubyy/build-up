package com.gemini11.buildupbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

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

    public Account getAccount() {
        return account;
    }

    public Integer getBankAccountNumber() {
        return bankAccountNumber;
    }

    public String getBank() {
        return bank;
    }

    public String getHolderName() {
        return holderName;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public void setBankAccountNumber(Integer bankAccountNumber) {
        this.bankAccountNumber = bankAccountNumber;
    }

    public void setHolderName(String holderName) {
        this.holderName = holderName;
    }
}
