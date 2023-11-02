package com.gemini11.buildupbackend.controller;

import com.gemini11.buildupbackend.entity.SizePoolObject;
import com.gemini11.buildupbackend.model.Product;
import com.gemini11.buildupbackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @CrossOrigin
    @GetMapping("/findAll")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = new ArrayList<>();
        if (productService.getProducts() == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        productService.getProducts().forEach(products::add);
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
    }

    @CrossOrigin
    @GetMapping("/findByName/{name}")
    public ResponseEntity<List<Product>> getAllProductsByName(@PathVariable("name") String name) {
        List<Product> products = productService.getProductsByName(name);
        products.forEach(product -> product.setAccount(null));
        return ResponseEntity.status(HttpStatus.OK).body(products);
    }

    @CrossOrigin
    @GetMapping("/findBySizeWithMinPriceAndIsBrandNew/{name}")
    public ResponseEntity<List<SizePoolObject>> getGroupSizeWithMinPriceByIsBrandNew(@PathVariable("name") String name) {
        List<List<Object>> data = productService.getSizeWithMinPriceAndIsBrandNew(name);
        List<SizePoolObject> pool = new ArrayList<>();
        data.forEach(record -> pool.add(new SizePoolObject(((String) record.get(0)), (Boolean) record.get(1), (Double) record.get(2))));

        return ResponseEntity.status(HttpStatus.OK).body(pool);
    }

    @CrossOrigin
    @GetMapping("/findProductsBySellerId/{id}")
    public ResponseEntity<List<Product>> getProductsBySellerId(@PathVariable("id") int sellerId) {
        List<Product> products = new ArrayList<>();
        if (productService.getProductsBySellerId(sellerId) == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        productService.getProductsBySellerId(sellerId).forEach(products::add);
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
    }

    @CrossOrigin
    @GetMapping("/findProductsByProductId/{id}")
    public ResponseEntity<Product> getProductsByProductId(@PathVariable("id") int productId) {
        Product product = productService.getProductById(productId);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(product, HttpStatus.OK);
        }
    }

    @CrossOrigin
    @PostMapping("/addProduct")
    public ResponseEntity<Product> addProduct(@RequestBody Product _product) {
        Product product = productService.addProduct(_product);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return new ResponseEntity<>(product, HttpStatus.CREATED);
        }
    }

    @CrossOrigin
    @PutMapping("/editProduct/{id}")
    public ResponseEntity<Product> editProduct(@PathVariable("id") int id, @RequestBody Product _product) {
        Product product = productService.editProduct(id, _product);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(product, HttpStatus.OK);
        }
    }

    @CrossOrigin
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") int _id) {
        Integer id = productService.deleteProduct(_id);
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

}
