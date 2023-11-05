package com.gemini11.buildupbackend.service.implement;

import com.gemini11.buildupbackend.model.Account;
import com.gemini11.buildupbackend.model.Product;
import com.gemini11.buildupbackend.repository.AccountRepository;
import com.gemini11.buildupbackend.repository.ProductRepository;
import com.gemini11.buildupbackend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    AccountRepository accountRepository;

    @Override
    public Iterable<Product> getProducts() {
        try {
            return productRepository.findAll();
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<Product> getProductsByName(String name) {
        try {
            return productRepository.findByName(name);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<List<Object>> getSizeWithMinPriceAndIsBrandNew(String name) {
        try {
            return productRepository.findSizeWithMinPriceAndIsBrandNew(name);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<List<Object>> getSizeWithMinPrice(String name, Boolean is_brand_new) {
        try {
            return productRepository.findSizeWithMinPrice(name, is_brand_new);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Iterable<Product> getProductsBySellerId(int sellerId) {

        try {
            Optional<Account> user = accountRepository.findByAccountId(sellerId);
            if (user.isPresent()) {
                return productRepository.findByAccount(user);
            } else {
                return Collections.emptyList();
            }
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Product getProductById(int id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Product addProduct(Product product) {
        try {
            return productRepository.save(product);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Integer deleteProduct(int id) {
        try {
            productRepository.deleteById(id);
            return id;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Product editProduct(int id, Product product) {
        Optional<Product> product1 = productRepository.findById(id);

        if (product1.isPresent()) {
            Product product2 = product1.get();
            product2.setName(product.getName());
            product2.setAccount(product.getAccount());
            product2.setPrice(product.getPrice());
            product2.setBrandNew(product.getBrandNew());
            product2.setDescription(product.getDescription());
            product2.setCreatedAt(product.getCreatedAt());
            product2.setSize(product.getSize());
            product2.setType(product.getType());
            return productRepository.save(product2);
        } else {
            return null;
        }
    }
}
