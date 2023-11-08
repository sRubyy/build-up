package com.gemini11.buildupbackend.entity;

public record CreditCartCreateDTO(
        String cardNumber,
        String holderName,
        String expirationDate,
        String cvc,
        Double balance,
        Integer accountId,
        String token
) {
}
