package com.gemini11.buildupbackend.entity;

import java.util.List;

public record BuyerCheckoutDTO(
        Integer creditCardId,
        Integer shippingAddressId,
        List<ItemAndQuantity> items,
        String token,
        Double totalPrice
) {
}
