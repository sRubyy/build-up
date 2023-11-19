package com.gemini11.buildupbackend.entity;

public record OrderAndOrderItem(
        Integer orderId,
        Integer statusId,
        Integer orderItemId,
        Integer productId,
        String name,
        String description,
        String size,
        Double price,
        Integer itemQuantity
) {
}
