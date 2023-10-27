package com.gemini11.buildupbackend.service;

import com.gemini11.buildupbackend.model.Product;

public interface ProductService {
    Iterable<Product> getProducts();

    Iterable<Product> getProductsBySellerId(int sellerId);

    Product getProductById(int id);

    Product addProduct(Product product);

    Integer deleteProduct(int id);

    Product editProduct(int id, Product product);
}
