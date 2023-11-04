package com.gemini11.buildupbackend.entity;

import java.util.List;

public record BuyerCheckoutDTO(
        Integer creditCardId,
        List<ItemAndQuantity> items,
        String token,
        Double totalPrice
) {
}
