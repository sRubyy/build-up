package com.gemini11.buildupbackend.controller;

import com.gemini11.buildupbackend.entity.BuyerCheckoutDTO;
import com.gemini11.buildupbackend.entity.ResponseObject;
import com.gemini11.buildupbackend.model.CreditCard;
import com.gemini11.buildupbackend.model.Order;
import com.gemini11.buildupbackend.model.OrderItem;
import com.gemini11.buildupbackend.repository.StatusRepository;
import com.gemini11.buildupbackend.service.AccountService;
import com.gemini11.buildupbackend.service.CreditCardService;
import com.gemini11.buildupbackend.service.OrderService;
import com.gemini11.buildupbackend.service.ProductService;
import com.gemini11.buildupbackend.utility.JwtHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    AccountService accountService;

    @Autowired
    StatusRepository statusRepository;

    @Autowired
    CreditCardService creditCardService;

    @Autowired
    ProductService productService;

    @GetMapping("/findAll")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = new ArrayList<>();
        if (orderService.getOrders() == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        orderService.getOrders().forEach(orders::add);
        if (orders.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(orders, HttpStatus.OK);
        }
    }

    @GetMapping("/findOrdersByAccountId/{id}")
    public ResponseEntity<List<Order>> getOrdersByAccountId(@PathVariable("id") int accountId) {
        List<Order> orders = new ArrayList<>();
        if (orderService.getOrdersByAccountId(accountId) == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        orderService.getOrdersByAccountId(accountId).forEach(orders::add);
        if (orders.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(orders, HttpStatus.OK);
        }
    }

    @PostMapping("/addOrder")
    public ResponseEntity<Order> addOrder(@RequestBody Order order) {
        Order order1 = orderService.addOrder(order);
        if (order1 == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return new ResponseEntity<>(order1, HttpStatus.CREATED);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteOrder(@PathVariable("id") int id) {
        Integer idd = orderService.deleteOrder(id);
        if (idd == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @CrossOrigin
    @PostMapping("/checkout")
    public ResponseEntity<ResponseObject> checkout(@RequestBody BuyerCheckoutDTO checkoutDTO) {
        String username = new JwtHelper().extractUsernameFromToken(checkoutDTO.token());
        if (username == null) {
            return new ResponseEntity<>(new ResponseObject(
                    LocalDateTime.now(),
                    HttpStatus.BAD_REQUEST,
                    "Token is invalid.",
                    null
            ), HttpStatus.BAD_REQUEST);
        }

        CreditCard creditCard = creditCardService.getCreditCardById(checkoutDTO.creditCardId());
        if (creditCard.getBalance() < checkoutDTO.totalPrice()) {
            return new ResponseEntity<>(new ResponseObject(
                    LocalDateTime.now(),
                    HttpStatus.BAD_REQUEST,
                    "Insufficient balance.",
                    null
            ), HttpStatus.BAD_REQUEST);
        }

        Order newOrder = new Order();
        newOrder.setOrderDate(LocalDateTime.now());
        newOrder.setStatus(statusRepository.findByName("Ordered"));
        newOrder.setAccount(accountService.getAccountByUsername(username).orElse(null));
        newOrder.setCreditCard(creditCard);

        List<OrderItem> items = new ArrayList<>();
        checkoutDTO.items().forEach(item -> {
            OrderItem orderItem = new OrderItem();
            orderItem.setProduct(productService.getProductById(item.itemId()));
            orderItem.setItemQuantity(item.quantity());
            items.add(orderItem);
        });
        newOrder.setOrderItems(items);

        orderService.addOrder(newOrder);
        creditCard.setBalance(creditCard.getBalance() - checkoutDTO.totalPrice());
        creditCardService.editCreditCard(checkoutDTO.creditCardId(), creditCard);
        return new ResponseEntity<>(new ResponseObject(
                LocalDateTime.now(),
                HttpStatus.OK,
                "",
                newOrder
        ), HttpStatus.OK);
    }
}
